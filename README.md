# Department of Beards Front-End (DoBFE)
#### The Beard is a Superfluous Burden

This is the front-end for the website for the Department of Beards, a sub-department of the [Australian Tax Office](https://www.ato.gov.au/) (ATO) responsible for collecting the Australian Beard Tax (ABT).

It is a generated website using [Middleman](https://middlemanapp.com/). It uses Webpacker and NPM to manage Javascript.

## Running Locally

For initial setup, run:

```
script/setup
```

To build the site dynamically during development, run:

```
bundle exec middleman server
```

## Deploying

This site is deployed through GitHub Pages. To deploy, provided you have write permission on the repository, use the command:

```
bundle exec middleman deploy
```

## Acknowledgements

This codebase takes some inspiration from:

https://github.com/icelab/middleman-skeleton

https://github.com/matthewlehner/middleman-webpack
