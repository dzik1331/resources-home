import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  public bookList() {
    return this.http.get(environment.restUrl + '/list');
  }

  public types() {
    return this.http.get(environment.restUrl + '/types');
  }

  public addBook(data: any) {
    console.debug(data)
    return this.http.post(environment.restUrl + '/add', data);
  }

}
