import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import {Hero} from "./hero";
// import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService
{

	
	private pokeUrl = "api/pokedex";
	constructor(private http: Http) {};


	getHeroes(): Observable<Hero[]>
	{
		
		let headers = new Headers();
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        
        return this.http.get(this.pokeUrl)
        .map(res => res.json());

		// return Promise.resolve(HEROES);
		// return this.http.get(this.pokeUrl, {headers: headers})	
		// .toPromise()
		// .then((response) => 
		// {
		// 	alert(response.json());
		// 	response.json() as Hero[];
		// })
		// .catch(this.handleError);
	}

	private handleError(error: any): Promise<any>
	{
		console.error("error", error);
		return Promise.reject(error.message || error);
	}

	// getHeroesSlowly(): Promise<Hero[]>
	// {
	// 	return new Promise(resolve => 
	// 	{
	// 		setTimeout(() => resolve(this.getHeroes()), 2000);
	// 	})
	// }

	getHero(id: number): Observable<Hero>
	{
		const url = `${this.pokeUrl}/${id}`;
		return this.http.get(url)
		.map(res => res.json());
	}
}