import { NextResponse } from "next/server";

const generateNonce = (length = 16) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nonce = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    nonce += charset[randomIndex];
  }
  return nonce;
};

const getCSPHeader = (addNonce) => {
  if (addNonce) {
    const nonce = generateNonce();
    const cspHeaderDetail = `
    default-src 'self' 'nonce-${nonce}' ${process.env.CSP_ALLOW_LINK_DEFAULT_SRC};
    script-src 'self' 'strict-dynamic' 'nonce-${nonce}' blob: ${process.env.CSP_ALLOW_LINK_SCRIPT_SRC};
    style-src 'self' 'unsafe-inline' 'nonce-${nonce}' ${process.env.CSP_ALLOW_LINK_STYLE_SRC};
    img-src 'self' 'nonce-${nonce}' ${process.env.CSP_ALLOW_LINK_IMG_SRC} blob: data:;
    font-src 'self' ${process.env.CSP_ALLOW_LINK_FONT_SRC} data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self' ${process.env.CSP_ALLOW_LINK_FORM_SRC};
    frame-src 'self' ${process.env.CSP_ALLOW_LINK_FRAME_SRC};
    media-src 'self' ${process.env.CSP_ALLOW_LINK_MEDIA_SRC};
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `;
    return cspHeaderDetail;
  } else {
    const cspHeaderDetail = `
    default-src 'self' ${process.env.CSP_ALLOW_LINK_DEFAULT_SRC};
    script-src 'self' 'strict-dynamic' blob: ${process.env.CSP_ALLOW_LINK_SCRIPT_SRC};
    style-src 'self' 'unsafe-inline' ${process.env.CSP_ALLOW_LINK_STYLE_SRC};
    img-src 'self' ${process.env.CSP_ALLOW_LINK_IMG_SRC} blob: data:;
    font-src 'self' ${process.env.CSP_ALLOW_LINK_FONT_SRC} data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self' ${process.env.CSP_ALLOW_LINK_FORM_SRC};
    frame-src 'self' ${process.env.CSP_ALLOW_LINK_FRAME_SRC};
    media-src 'self' ${process.env.CSP_ALLOW_LINK_MEDIA_SRC};
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `;
    return cspHeaderDetail;
  }
};

const setHeadersAndCreateResponse = (req, cspHeader) => {
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();
  const nonce = generateNonce();
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
};

export { getCSPHeader, setHeadersAndCreateResponse };
