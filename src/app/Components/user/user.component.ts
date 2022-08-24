import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { JokeService } from '../../Services/joke.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  jokeDev:String = 'Loading';
  jokeMoney:String = 'Loading';
  jokeScience:String = 'Loading';
  // id!:string |null
  constructor(private route:ActivatedRoute, private jokeApi:JokeService) { }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((param:ParamMap)=>{
  //     this.id = param.get('id');
  //   })
  // }

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
