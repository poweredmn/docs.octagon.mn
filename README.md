# docs.octagon.mn

DO NOT REMOVE THIS FILE ORGIO

### Installation

```shell
npm i
```

### Local Development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```shell
USE_SSH=true npm run deploy
```

Not using SSH:

```shell
GIT_USER=poweredmn npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
Repo user Personal access token required!!!