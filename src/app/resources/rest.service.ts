import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  public resourcesList() {
    console.log('Test')
    console.log(environment.restUrl)
    return this.http.get(environment.restUrl + '/list');
  }

  public resource(id: any) {
    return this.http.get(environment.restUrl + `/get/${id}`);
  }

  public types() {
    return this.http.get(environment.restUrl + '/types');
  }

  public addResource(data: any) {
    console.debug(data)
    return this.http.post(environment.restUrl + '/add', data);
  }

  public isReturn(id: any) {
    console.debug(id)
    return this.http.get(environment.restUrl + `/isReturn/${id}`);
  }

  public addBorrow(person: string, resourceId: number) {
    return this.http.post(environment.restUrl + '/addBorrow', {person: person, resourceId: resourceId});
  }

}
