import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroService} from './hero/hero.service';
import {HeroesComponent} from './hero/heroes.component';
import {routes} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './mock/in-memory-data.service';
import {HeroSearchComponent} from './hero/hero-search.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    CategoryComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
