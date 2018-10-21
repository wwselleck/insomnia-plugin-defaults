import { Request } from "./insomnia-plugin-types";

import { ParametersConfig } from "./config";

import { log } from "./logger";

export function processDefaultParameters(
  request: Request,
  parameters: ParametersConfig
) {
  parameters.forEach(param => {
    if (!request.getParameter(param.name)) {
      request.setParameter(param.name, param.value);
      log(`Parameter ${param.name} set to ${param.value}`);
    }
  });
}
