import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { }

  getDataFromJokeApiDev():Observable<any>{
    // console.log(this.http.get(environment.jokeApi));
    return this.http.get(environment.jokeApiDev);
  }

  getDataFromJokeApiMoney():Observable<any>{
    // console.log(this.http.get(environment.jokeApi));
    return this.http.get(environment.jokeApiMoney);
  }

  getDataFromJokeApiScience():Observable<any>{
    // console.log(this.http.get(environment.jokeApi));
    return this.http.get(environment.jokeApiScience);
  }


}
