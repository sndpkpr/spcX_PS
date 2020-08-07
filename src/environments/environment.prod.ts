// export const Environment = {
//   production: true
// };
import { Injector, enableProdMode } from '@angular/core';
export class Environment {
  production = true;
  isSecure : true;
  baseUrl : 'api.spaceXdata.com/v3/';
  port : 443;
}

const injector = Injector.create([
  { provide: Environment, useClass: Environment, deps: [] }
]);

export const environment: Environment = injector.get(Environment);

// Remove all console messages
console.log = function() {};
