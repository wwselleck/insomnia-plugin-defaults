const LOG_PREFIX = `[insomnia-plugin-defaults]: `;

export function log(message: string) {
  console.log(`${LOG_PREFIX}${message}`);
}
