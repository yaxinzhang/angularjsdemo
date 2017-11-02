// import { InMemoryDbService } from 'angular-in-memory-web-api';
//
// export class InMemHeroService implements InMemoryDbService {
//   createDb() {
//     let heroes = [
//       { id: 1, name: 'Windstorm' },
//       { id: 2, name: 'Bombasto' },
//       { id: 3, name: 'Magneta' },
//       { id: 4, name: 'Tornado' }
//     ];
//     return {heroes};
//   }
// }
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0, name: 'Zero'},
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}
