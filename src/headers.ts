import { Request } from "./insomnia-plugin-types";

import { HeadersConfig } from "./config";

import { log } from "./logger";

export function processDefaultHeaders(
  request: Request,
  headers: HeadersConfig
) {
  Object.entries(headers).forEach(([name, value]) => {
    debugger;
    if (!request.hasHeader(name)) {
      request.setHeader(name, value);
      log(`Header ${name} set to ${value}`);
    }
  });
}
