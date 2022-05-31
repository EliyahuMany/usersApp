import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class AppService {
  private apiUrl = 'https://gorest.co.in/public/v2/'

  constructor(private http: HttpClient) {
  }

  getUsers() {
    console.log('getUsers')
    return this.http.get(`${this.apiUrl}users`);
  }
}
