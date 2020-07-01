# Gatsby Eregion Forge Template

This is a boilerplate for a static website with somme useful plugins based on [Gatsby](https://www.gatsbyjs.org/) .

## 🚀 Quick start

### 1. Install the Gatsby CLI.

```sh
npm install -g gatsby-cli
```

### 2. Create a Gatsby site from this template.

```sh
gatsby new project <BIT_BUCKET_URL>
```

### 3. Start the site in `development` mode.

Next, move into your new site’s directory and start it up:

```sh
cd project/
gatsby develop
```

### 4. Open the source code and start editing!

Your site is now running at `http://localhost:8000`. Open the `project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes, and the browser will update in real time!

You can change page metadata on `gatsby-config.js`.

### 5. Build site for production.

#### Using Gatsby CLI

Gatsby CLI will generate files ready for a production environment.
You can serve these files using a CDN or running a local server.

```sh
# Build for production
gatsby build

# See generated files
cd public
```

#### Using Docker

The Dockerfile in this project will build the site and create a server to be used on production.

```sh
# Build a Docker container
docker build -t challenge-app .

# Run the built container
docker run -p 80:80 challenge-app

# You can then access the app in your browser via localhost:80
```

At this point, you’ve got a fully functional Gatsby website. For additional information on how you can customize your Gatsby site, see Gatsby [plugins](https://gatsbyjs.org/plugins/) and [the official tutorial](https://gatsbyjs.org/tutorial/).

## 🧐 Features
* Support SCSS
* Styled Components
* Web font loader (Google and custom font)

## 📜 Acknowledgements

This boilerplate was based on the project [HiStaff Static Website](https://github.com/histaff/website-static/) by [HiStaff](https://github.com/histaff).
