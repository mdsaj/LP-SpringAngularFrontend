import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Message } from '../model/Message';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class UserService {

  private getUsersUrl: string;
  private addUserUrl: string;
  private deleteUserUrl: string;

  constructor(private http: HttpClient) {
    this.getUsersUrl = 'http://localhost:8080/users';
    this.addUserUrl = 'http://localhost:8080/users';
    this.deleteUserUrl = 'http://localhost:8080/deleteUser';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.addUserUrl, user);
  }

  public deleteUser(id: String): Observable<Message> {
    const deleteUserUrl = this.deleteUserUrl + '/' + id;
    return this.http.delete<Message>(deleteUserUrl);
  }
}
