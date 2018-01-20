import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Filter } from '../models/filter';
import { FilterDto } from '../dto/filterdto';
import { FilterDescription } from '../models/filterDescription';
import { Constants } from '../app.constants';
import {SelectItem} from 'primeng/primeng';
 
@Injectable()
export class FilterService { 

  private actionUrl: string;
  private headers: Headers; 
  private filters: FilterDto[] = [];
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }
  
  public getAll = () : Observable<FilterDto[]> => {    
    this.actionUrl = Constants.apiServer + '/service/filter/alls';
    
    return this.http.get(this.actionUrl)
      .map((response: Response) => <FilterDto[]>response.json())
      .catch(this.handleError);
  }

  public getFilters = () : FilterDto[] => {    
   this.getAll()
      .subscribe((data: FilterDto[]) => { 
          this.filters = data;       
          return this.filters;
      },
      error => console.log(error),
      () => console.log('Get all Filters complete'));
      
    return this.filters;
  }
  
  public save = (filter : Filter): Observable<Filter> => {
      let toAdd = JSON.stringify(filter);
      let actionUrl = Constants.apiServer + '/service/filter/save';      
      return this.http.post(actionUrl, toAdd, { headers: this.headers })
        .map((response: Response) => {
            return  response.json();
        }) 
        .catch(this.handleError);
   }
  
  
   public delete = (filter : Filter): Observable<Boolean> => {
      let toAdd = JSON.stringify(filter);
      let actionUrl = Constants.apiServer + '/service/filter/delete';      
      return this.http.post(actionUrl, toAdd, { headers: this.headers })
        .map((response: Response) => {
            if (response && response.json()=='Success') {                 
                    return true;                  
            }else {                       
                      return false;
            }
        }) 
        .catch(this.handleError);
   }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
