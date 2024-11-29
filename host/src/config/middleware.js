import { NextResponse } from "next/server";
import { getCSPHeader, setHeadersAndCreateResponse } from "./cspHeader";

async function handleImageRequest(req) {
  if (req) {
    return NextResponse.next();
  }
}

async function handleApiRequest(req) {
  if (req) {
    return NextResponse.next();

    const cspHeader = getCSPHeader(true);
    setHeadersAndCreateResponse(req, cspHeader);
  }
}

export { handleImageRequest, handleApiRequest };
