import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UserService {

  private getUsersUrl: string;
  private addUserUrl: string;

  constructor(private http: HttpClient) {
    this.getUsersUrl = 'http://localhost:8080/getUsers';
    this.addUserUrl = 'http://localhost:8080/addUser';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.addUserUrl, user);
  }
}
