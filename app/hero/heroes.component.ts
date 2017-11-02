import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

import {Hero} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes(); // 调用getHeroes()来完成初始化
  }

  // promise 订阅
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = <Array<Hero>>res;
    });
  }

  // getHeroes(): void {
  //   this.heroService
  //     .getHeroes()
  //     .then(heroes => this.heroes = heroes);
  // }


  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .subscribe((res) => {
        let hero: Hero = <Hero>res;
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
