import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"

import { Hero } from "./hero";

import {HeroService} from "./hero.service";




@Component(
{
  selector: 'my-heroes',
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit
{ 
	title = "Tour of heroes";
	heroes: Hero[];

	mode = "Observable"
	
	selectedHero: Hero;

	constructor(private heroService: HeroService,
              private router: Router){}


	getHeroes()
	{
		// this.heroService.getHeroes().then((heroes) => 
		// {
		// 	alert("some promise things then" + heroes);
		// 	this.heroes = heroes
		// });
		this.heroService.getHeroes().subscribe(heroes =>
		{
			this.heroes = heroes;
		})
	}
	ngOnInit(): void
	{
		this.getHeroes();
	}

	onSelect(hero: Hero): void
	{
		this.selectedHero = hero;
	}

  gotoDetail(): void
  {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }

}
