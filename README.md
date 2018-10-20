# [hnpwa](https://hnpwa.now.sh)
[![Website hnpwa.now.sh](https://img.shields.io/website-up-down-green-red/https/hnpwa.now.sh.svg)](https://hnpwa.now.sh/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Hacker news clone written in TypeScript, React and Redux. 

You can find it hosted here: https://hnpwa.now.sh

## Running locally

### Docker

Build the image
```bash
docker build . --tag hnpwa
```

Run it
```bash
docker run -p 3000:3000 hnpwa
```

### Node

Install packages
```bash
yarn
```

Build assets
```bash
NODE_ENV=production yarn build
```

Start the server
```
NODE_ENV=production yarn start
```

