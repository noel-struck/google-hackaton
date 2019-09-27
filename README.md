# nearest-host

This application is written using the [voxa3](https://github.com/mediarain/voxa) framework developed by RAIN.

## Development setup

- Install and use Node v8.10
- Run `yarn`
- Create a `src/config/local.json` file and customize it for your local setup, you can use `src/config/local.example.json`
- Start the development server with `yarn watch`

## Tests

This project has a test suite built using [mocha](https://mochajs.org/), [chai](https://www.chaijs.com/), [alexa-mime](https://www.npmjs.com/package/alexa-mime) and [virtual-alexa](https://www.npmjs.com/package/virtual-alexa)

### Running the tests

```sh
$ yarn test --watch --bail
```

