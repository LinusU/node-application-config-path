# node-application-config-path

Store your application config in the right location.

## Installation

```bash
npm install --save application-config-path
```

## Usage

```javascript
import applicationConfigPath from 'application-config-path'

// cfgPath is a string with the path to a directory
// where you can store your config.
const cfgPath = applicationConfigPath('My App')
```

## API

### `applicationConfigPath(name)`

Return a string with the path to a directory where you can store your application specific config.

## License

MIT
