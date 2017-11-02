import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {Headers, Http} from '@angular/http';
import {Hero} from './hero';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).map((res) => res.json())
      .catch(this.handleError);
  }

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.heroesUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Hero[])
  //     .catch(this.handleError);
  // }

  getHero(id: number) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).map((res) => res.json());
  }

  // hero 服务的delete()方法使用 HTTP 的 delete() 方法来从服务器上移除该英雄：
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // put() 方法来把修改持久化到服务端
  update(hero: Hero) {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .catch(this.handleError);
  }

  create(name: string) {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers}).map((res) => res.json());
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

function ttt(a, b) {

}
