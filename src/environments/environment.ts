// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://node-initial-hitesh.herokuapp.com/v1/',
  jokeApiDev: 'https://api.chucknorris.io/jokes/random?category=dev',
  jokeApiMoney: 'https://api.chucknorris.io/jokes/random?category=money',
  jokeApiScience: 'https://api.chucknorris.io/jokes/random?category=science',
  registerApi: 'https://node-initial-hitesh.herokuapp.com/v1/auth/register',
  logInApi: 'https://node-initial-hitesh.herokuapp.com/v1/auth/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
