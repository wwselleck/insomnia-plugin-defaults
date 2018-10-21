import { Request } from "./insomnia-plugin-types";

export type HeadersConfig = { [name: string]: string };
export type ParametersConfig = Array<{ name: string; value: string }>;

export const ENVIRONMENT_KEY = "DEFAULTS";

export type AvailableDefaults = "headers" | "parameters";

export interface EnvironmentDefaultsConfig {
  headers: HeadersConfig;
  parameters: ParametersConfig;
}

export function getDefaultsConfig(request: Request): EnvironmentDefaultsConfig {
  let defaults = request.getEnvironmentVariable(ENVIRONMENT_KEY);
  return defaults as EnvironmentDefaultsConfig;
}
