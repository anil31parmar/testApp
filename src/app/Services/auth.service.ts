import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data:string):Observable<any>{
    return this.http.post(environment.registerApi,data).pipe(catchError(this.handleError));
  }

  logIn(data:string):Observable<any>{
    return this.http.post(environment.logInApi, data).pipe(catchError(this.handleError));
  }

   ///error handling
   handleError(error:any){
    window.alert(error.error.message)
     return error.error.message;
  }
}
