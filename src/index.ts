import { Context } from "./insomnia-plugin-types";
import { getDefaultsConfig } from "./config";
import { processDefaultHeaders } from "./headers";
import { processDefaultParameters } from "./parameters";
import { log } from "./logger";

type DefaultHandlers = { [key: string]: any };

const defaultHandlers: DefaultHandlers = {
  parameters: processDefaultParameters,
  headers: processDefaultHeaders
};

function requestHook(context: Context) {
  const defaults = getDefaultsConfig(context.request);
  if (!defaults) {
    return;
  }

  Object.entries(defaults).forEach(([key, value]) => {
    if (key in defaultHandlers) {
      defaultHandlers[key](context.request, value);
    } else {
      log(`Cannot handle defaults for ${key}`);
    }
  });
}

export const requestHooks = [requestHook];
