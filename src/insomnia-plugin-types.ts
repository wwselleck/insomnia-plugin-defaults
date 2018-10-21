type EnvironmentVariableValue =
  | string
  | number
  | boolean
  | Object
  | Array<any>
  | null;

export interface Request {
  getParameters(): Array<{ name: string; value: string }>;
  getParameter(name: string): string;
  setParameter(name: string, value: string): void;
  getEnvironmentVariable(name: string): EnvironmentVariableValue;
  getHeader(name: string): string;
  setHeader(name: string, value: string): void;
  hasHeader(name: string): boolean;
}

export interface Context {
  request: Request;
}
