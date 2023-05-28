<div align="center">

<img alt="Larsvanderniet.nl favicon" width="50px" height="50px" src="https://github.com/larsniet/lars-gatsby/blob/main/media/favicon.png">

# Lars van der Niet

Larsvanderniet.nl is a **portfolio website**, created by Lars van der Niet.

It's a [GatsbyJS](https://www.gatsbyjs.com/) website and uses [DatoCMS](https://www.datocms.com/) as backend. Apart from the basic SEO stuff done within Gatsby, my application also hosts an [RSS feed](https://www.larsvanderniet.nl/rss.xml). This feed is updated automatically using a [cronjob](https://github.com/larsniet/larsniet/blob/main/.github/workflows/project-workflow.yml) in Github Actions which retrieves all current projects and displays them on my Github profile.

[Installation](#installation) •
[Configuration](#configuration)

<img alt="Larsvanderniet.nl screenshot" width="100%" src="https://github.com/larsniet/lars-gatsby/blob/main/media/larsvanderniet.png">

</div>

## Installation

### Step 1: Clone this repository

Run the following command in your terminal to clone this repo.

```sh
git clone https://github.com/larsniet/lars-gatsby.git
```

### Step 2: Install dependencies

Open up a terminal within the folder where you cloned the repo and run the following command.

```sh
cd lars-gatsby && yarn install
```

## Configuration

### Dato CMS

As Content Management System I chose [DatoCMS](https://www.datocms.com/). It's a user-friendly focused CMS which makes it really easy to understand how content is structured. Ofcourse I cannot give you access to my specific DatoCMS dashboard, so you'll have to do with a screenshot of my project-modal.

<img alt="Screenshot of project modal in DatoCMS" width="100%" src="https://github.com/larsniet/lars-gatsby/blob/main/media/modal.png">

### Environment variables

Environment variables can be used for configuration.
They must be set before `yarn build` is called.

- `DATO_API_TOKEN`
  - Read only API token from DatoCMS.
  - Note: Using DatoCMS might be a bit confusing if you don't know GraphQL/GatsbyJS.

### Build the application

If everything is linked correctly and adjusted to your needs, simply run the following command

```sh
yarn start
```

## License and restrictions

This project is AGPL-3.0 licenced with certain restrictions for commercial use. These restrictions are as follows:

The files in the content, static, src/pages and src/images folders are proprietary, unless stated otherwise on the top of the file.

In short, this means that this project can be used under the AGPL-3.0 license, as long as all content is completely replaced, the styling has been modified and all trademarks have been removed, making sure all current branding and content has been removed.

Exceptions can be made for these restrictions, but are only valid with written consent from Lars van der Niet. If you would like me to make an exception, please send an email to lvdnbusiness@icloud.com.
