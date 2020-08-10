// export const Environment = {
//   production: true
// };
import { Injector, enableProdMode } from '@angular/core';
export class Environment {
  production = true;
  isSecure = true;
  hostName = 'api.spaceXdata.com';
  port = 443;
  basePath = '/v3/';
  baseURL = '/v3/';
}

const injector = Injector.create({ providers: [
  { provide: Environment, useClass: Environment, deps: [] }
]});

export const environment: Environment = injector.get(Environment);

// Remove all console messages
console.log = function() {};
