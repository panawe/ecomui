import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Category } from '../models/category';
import { CategoryDescription } from '../models/categoryDescription';
import { Constants } from '../app.constants';

@Injectable()
export class CategoryService { 

  private actionUrl: string;
  private headers: Headers; 
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }
  public getAll = (): Observable<CategoryDescription[]> => {    
    this.actionUrl = Constants.apiServer + '/service/CategoryDescription/all';
    
    return this.http.get(this.actionUrl)
      .map((response: Response) => <CategoryDescription[]>response.json())
      .catch(this.handleError);
  }

    public getActiveVideos = (): Observable<Category[]> => {    
    this.actionUrl = Constants.apiServer + '/service/video/getActiveVideos';
    
    return this.http.get(this.actionUrl)
      .map((response: Response) => <Category[]>response.json())
      .catch(this.handleError);
  }
  
    public getFirstVideo = (): Observable<Category> => {    
    this.actionUrl = Constants.apiServer + '/service/video/getFirstVideo';
    
    return this.http.get(this.actionUrl)
      .map((response: Response) => <Category>response.json())
      .catch(this.handleError);
  }
  public save = (category : Category): Observable<Category> => {
      let toAdd = JSON.stringify(category);
      let actionUrl = Constants.apiServer + '/service/category/save';      
      return this.http.post(actionUrl, toAdd, { headers: this.headers })
        .map((response: Response) => {
            return  response.json();
        }) 
        .catch(this.handleError);
   }
  
   public delete = (category : Category): Observable<Boolean> => {
      let toAdd = JSON.stringify(category);
      let actionUrl = Constants.apiServer + '/service/category/delete';      
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
