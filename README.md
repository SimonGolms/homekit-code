# HomeKit Code

Generate a pairing HomeKit QR code label or scannable tag to setup your HomeKit accessory

[![npm version](https://img.shields.io/npm/v/homekit-code.svg)](https://www.npmjs.com/package/homekit-code)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/simongolms/homekit-code#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/simongolms/homekit-code/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/simongolms/homekit-code)](https://github.com/simongolms/homekit-code/blob/master/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/SimonGolms/homekit-code/releases)

## Usage - QR Code

```sh
npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT
```

### CLI

```txt
Usage: homekit-code qrcode [options]

Generate a scannable HomeKit QR Code label

Options:
      --version      Show version number  [boolean]
      --help         Show help  [boolean]
  -c, --category     Category of the HomeKit accessory, required for generating a QR Code  [choices: "airConditioner", "airport", "airPurifier", "appleTv", "bridge", "dehumidifier", "door", "doorLock", "fan", "faucet", "garage", "heater", "humidifier", "ipCamera", "lightbulb", "other", "outlet", "programmableSwitch", "rangeExtender", "securitySystem", "sensor", "showerHead", "speaker", "sprinkler", "switch", "targetController", "television", "thermostat", "videoDoorBell", "window", "windowCovering"] [default: "airConditioner"]
  -n, --name         Name of the generated file  [string] [default: "homekit-qrcode"]
  -o, --output       Format of the generated file  [required] [choices: "svg", "png"] [default: "svg"]
  -p, --pairingCode  8 digits pairing code  [string] [required]
  -s, --setupId      Setup Id, required for generating a QR Code  [string] [default: ""]
  -z, --zoom         Zoom factor when the output is an image  [number] [default: 2]

Examples:
  npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT                                       Generate a QR code for a HomeKit switch
  npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT --name=switch --output=png --zoom=10  Generate a QR code for a HomeKit switch as switch.png with an image zoom factor of 10
```

### Output

![homekit-qrcode](./docs/homekit-qrcode.png)

## Usage - Tag

```sh
npx homekit-code tag --pairingCode=84131633
```

### CLI

```txt
Usage: homekit-code qrcode [options]

Generate a scannable HomeKit tag label

Options:
      --version      Show version number  [boolean]
      --help         Show help  [boolean]
  -n, --name         Name of the generated file  [string] [default: "homekit-tag"]
  -o, --output       Format of the generated file  [required] [choices: "svg", "png"] [default: "svg"]
  -p, --pairingCode  8 digits pairing code  [string] [required]
  -z, --zoom         Zoom factor when the output is an image  [number] [default: 5]

Examples:
  npx homekit-code tag --pairingCode=84131633                                       Generate a scannable tag for a HomeKit accessory
  npx homekit-code tag --pairingCode=84131633 --name=switch --output=png --zoom=10  Generate a scannable tag for a HomeKit accessory as switch.png with an image zoom factor of 10
```

### Output

![homekit-tag](./docs/homekit-tag.png)

---

## Local Development

### Install Dependencies

```sh
npm install
```

### Start Development Server

```sh
npm run start -- qrcode --category=switch --pairingCode=84131633 --setupId=3QYT
```

### Build

To build `homekit-code` for production, run:

```sh
npm run build
```

Afterwards the executable code is available under `./lib/`.

```sh
cd lib
node index.js --category=switch --pairingCode=84131633 --setupId=3QYT
```

### Repair

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

```sh
npm run repair
```

### Release

Fully automated version management and package publishing via [semantic-release](https://github.com/semantic-release). It bumps the version according to conventional commits, publishes the package to npm and release a new version to GitHub.

#### Automatic Release (GitHub Action) [Recommended]

Make sure that the secrets `GITHUB_TOKEN` and `NPM_TOKEN` are available in GitHub repository.

```sh
npm run release:ci
```

#### Manual Release

Make sure that the environment variables `GITHUB_TOKEN` and `NPM_TOKEN` are set or declared in `.env` and a productive build was previously created via `npm run build`.

```sh
npm run release
```

You can also test the release manually by running the following command:

```sh
npm run release:dry-run
```

---

## FAQ

### Will my HomeKit accessory be able to pair with the generated QR code?

The QR code is not the same as the pairing code, instead it consists of several parameters such as the category, a specific version and other parameters.
This generated setup payload is the actual content of the QR code and can be generated with the [HomeKit Accessory Simulator (HAS)](https://developer.apple.com/documentation/homekit/testing_your_app_with_the_homekit_accessory_simulator) as well.

![qrcode](./docs/apple-homekit-accessory-simulator.png)

### How do I find out the setup id of my HomeKit Accessory?

Scan the QR code with a QR scanner of your choice. You should get a text starting with `X-HM://....` . The next 9 characters are the combination of the different parameters like the pairing code and the category. The remaining characters are the setup id.

```txt
X-HM://0081YCYEP3QYT ◄── Scanned Setup Payload

X-HM:// 008YCYEP 3QYT
  ▲        ▲      ▲
  │        │      └─── Setup ID
  │        └── Combination of Parameters (first 9 characters)
  └─ Starting Content
```

## Author

**Simon Golms**

- Digital Card: `npx simongolms`
- Github: [@SimonGolms](https://github.com/SimonGolms)
- Website: [gol.ms](https://gol.ms)

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2022 [Simon Golms](https://github.com/simongolms).<br />
This project is [MIT](https://github.com/simongolms/homekit-code/blob/master/LICENSE) licensed.

## Resources

- https://github.com/maximkulkin/esp-homekit
- https://developer.apple.com/documentation/homekit/hmaccessorycategory/accessory_category_types#overview
- https://developer.apple.com/documentation/homekit/testing_your_app_with_the_homekit_accessory_simulator
