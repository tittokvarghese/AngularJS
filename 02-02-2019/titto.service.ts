import { Injectable } from '@angular/core';
import {HttpClient.HttpErrorResponse} from '@angular/common/http';

import {users} from './users';
import { store, pipe } from '@angular/core/src/render3';
import { observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TittoService {



users:users[];

  constructor(private http: HttpClient) { 

    //getApiUsers(){
    //  return this.http.get('http://localhost/hhhh.php');
    //}

store(users: users): Observable<users[]>{
return this.http.post('http://localhost/jjj.php',{data: users}),
pipe(
map((res) => this.users=(res['data']); 
return this.users;
}),catchError(this.handleError));


  
}

private handleError(error: )
{

}
}
