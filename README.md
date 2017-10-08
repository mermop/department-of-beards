# Department of Beards Front-End (DoBFE)
#### The Beard is a Superfluous Burden

This is the front-end for the website for the Department of Beards, a sub-department of the [Australian Tax Office](https://www.ato.gov.au/) (ATO) responsible for collecting the Australian Beard Tax (ABT).

It is a generated website using [Middleman](https://middlemanapp.com/).

## Running Locally

For initial setup, run:

```
script/setup
```

The DoBFE uses `dotenv` to manage environment variables and secrets. Environment variables for running locally are stored in `.env.development`, and environment variables for building and deploying the site are stored in `.env.build`

The Department of Beards front-end is designed to run alongside the Department of Beards back-end (DoBBE), a Rails application that receives form submissions and sends confirmation emails with further instructions for payment of the ABT. Set the `BACKEND_URL` in the `.env.development` file to either the port where the DoBBE is running locally or to the DoBBE staging server, for example:

```
BACKEND_URL=localhost:3000
```

To build the site dynamically during development, run:

```
bundle exec middleman server
```

## Deploying

## Acknowledgements

https://github.com/icelab/middleman-skeleton
https://github.com/matthewlehner/middleman-webpack
