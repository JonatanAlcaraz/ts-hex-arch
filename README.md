# ts-hex-arch

**Make sure** you have installed [Node](https://nodejs.org),  [ts-node](https://www.npmjs.com/package/ts-node), [Typescript](https://www.npmjs.com/package/typescript), [Docker](https://docs.docker.com/get-docker/), and [Docker Compose](https://docs.docker.com/compose/install/) globally.

 
**Create env vars**
```bash
cp .env-example .env
```

**Install dependencies**
```bash
npm install
```

**Start DB**
```bash
docker-compose up -d
```

**Build server**
```bash
npm run build
```

**Start server**
```bash
npm run dev
```