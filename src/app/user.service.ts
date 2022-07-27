import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getAllUserUrl = 'https://backend-people-crud-app.herokuapp.com/users';
  private deleteUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/';

  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get<any>(this.getAllUserUrl);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(this.deleteUserUrl + id);
  }
}
