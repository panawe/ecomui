import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Filter } from '../models/filter';
import { FilterDto } from '../dto/filterdto';
import { FilterDescription } from '../models/filterDescription';
import { Constants } from '../app.constants';
import {SelectItem} from 'primeng/primeng';
 
@Injectable()
export class GenericService { 

  private actionUrl: string;
  private headers: Headers; 
  private filters: FilterDto[] = [];
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }
  
  public getAll = (entity : string) : Observable<any[]> => {    
    this.actionUrl = Constants.apiServer + '/service/' + entity + '/all';
    
    return this.http.get(this.actionUrl)
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
