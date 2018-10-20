# [hnpwa](https://hnpwa.now.sh)

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

