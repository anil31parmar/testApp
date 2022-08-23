import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../Services/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent implements OnInit {

  jokeDev:String = 'Loading';
  jokeMoney:String = 'Loading';
  jokeScience:String = 'Loading';

  constructor(private jokeApi:JokeService) { }

  ngOnInit(): void {
    this.getApiForDevJoke();
    this.getApiForMoneyJoke();
    this.getApiForScienceJoke();
  }

  getApiForDevJoke(){
    this.jokeApi.getDataFromJokeApiDev().subscribe((res) =>{
      this.jokeDev = res.value;
    });
  }

  getApiForMoneyJoke(){
    this.jokeApi.getDataFromJokeApiMoney().subscribe((res) =>{
      this.jokeMoney = res.value;
    });
  }

  getApiForScienceJoke(){
    this.jokeApi.getDataFromJokeApiScience().subscribe((res) =>{
      this.jokeScience = res.value;
    });
  }

}
