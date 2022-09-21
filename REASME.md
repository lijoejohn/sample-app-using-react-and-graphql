# Sample app using react and graphQl

Sample app using react and graphQL

## Prerequisites

1. Nodejs v16.16.0 +
2. Yarn globally

## Run the application in your local

### Without Docker

1. `cd graphql-server`
2. `yarn install`
3. `yarn start`

4. `cd ui`
5. `yarn install`
6. `yarn run dev`

## Other commands

1. To run the application in production mode in dev
   `yarn run build`
   `yarn run preview`

   The vite preview command will boot up local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment. (https://stackoverflow.com/questions/71703933/what-is-the-difference-between-vite-and-vite-preview)

2. To run the unit test cases
   `yarn run test`

3. To get the test coverage
   `yarn run coverage`

4. To check the lint issues
   `yarn run lint`

5. To build the production artifacts
   `yarn run build`
   By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.
