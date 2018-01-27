import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  public resourcesList(id, filter = null, types = null) {
    if (filter || types) {
      return this.http.post(environment.restUrl + `/list/${id}`, {filter: filter, types: types});
    } else {
      return this.http.get(environment.restUrl + `/list/${id}`);
    }
  }

  public resource(id: any) {
    return this.http.get(environment.restUrl + `/get/${id}`);
  }

  public types() {
    return this.http.get(environment.restUrl + '/types');
  }

  public addResource(data: any) {
    return this.http.post(environment.restUrl + '/add', data);
  }

  public editResource(id: number, data: any) {
    return this.http.put(environment.restUrl + `/update/${id}`, data);
  }

  public isReturn(id: any) {
    return this.http.get(environment.restUrl + `/isReturn/${id}`);
  }

  public addBorrow(person: string, resourceId: number) {
    return this.http.post(environment.restUrl + '/addBorrow', {person: person, resourceId: resourceId});
  }

  public deleteBorrow(id: number) {
    return this.http.delete(environment.restUrl + `/deleteBorrow/${id}`);
  }

  public deleteResource(id: number) {
    return this.http.delete(environment.restUrl + `/deleteResource/${id}`);
  }

  public clearImages() {
    return this.http.get(environment.restUrl + '/clearNoUsedImage');
  }

}
