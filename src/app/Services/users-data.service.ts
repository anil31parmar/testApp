import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../Interface/user.Interafce';
import { endpoint } from '../endpoint/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  //get user data and display it in table
  getUserData(): Observable<any>{
    return this.http.get(`${environment.apiUrl}${endpoint.users}`);
  }

  //add new user data
  postData(addedData:user): Observable<any>{
    return this.http.post(`${environment.apiUrl}${endpoint.users}`,addedData).pipe(catchError(this.handleError))
  }

  //edit/update specific user data
  updateData(id: user, data: user): Observable<any>{
    let apiUrl = `${environment.apiUrl}${endpoint.users}/${id}`;
    return this.http.patch(apiUrl, data).pipe(catchError(this.handleError));
  }

  //get single id
  getId(id: any): Observable<any> {
    let apiUrl = `${environment.apiUrl}${endpoint.users}/${id}`;
    return this.http.get(apiUrl).pipe(catchError(this.handleError))
  }

  //delete user data
  deteleUser(id: user): Observable<any>{
    let apiUrl = `${environment.apiUrl}${endpoint.users}/${id}`;
    return this.http.delete(apiUrl);
  }

  ///error handling
  handleError(error:any){
    window.alert(error.error.message)
     return error.error.message;
  }
}
