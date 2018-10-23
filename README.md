# insomnia-plugin-defaults


[![npm](https://img.shields.io/npm/v/insomnia-plugin-defaults.svg)](https://www.npmjs.com/package/insomnia-plugin-defaults)


## Installation
1. Open your preferences in Insomnia
2. Type `insomnia-plugin-defaults`
3. Click 'Install Plugin'

## Usage
Right now, defaults for

- Headers
- Query Parameters

are supported.

You define defaults in your Insomnia environment

```
{
    "DEFAULTS": {
        "headers": {
            "X-Test-Header": "test-value"
        },
        "parameters": [
            {
                "name": "q"
                "value": "How does the internet get across the ocean"
            }
        ]
    }
}
```
