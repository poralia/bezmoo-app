import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Get sales order
   * 
   * @param filters any
   * @return http Observable
   */
  public getOrder(filters: {
    query: any[],
    fields: string[],
    order_by: string,
    limit_page_length: number,
  }): Observable<any> {
    let httpParams = new HttpParams();

    for (let key in filters) {
      if (filters.hasOwnProperty(key)) {
        let value;
        
        if (key == 'query') {
          value = JSON.stringify(filters[key]);
          // replace `query` with `filters`
          key = 'filters';
        }
        else if (key == 'fields') {
          value = JSON.stringify(filters[key]);
        }
        else {
          value = (filters as any)[key];
        }

        httpParams = httpParams.set(key, value);
      }
    }

    return this.httpClient
      .get(`${environment.api}/resource/Sales%20Order`, { params: httpParams })
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  /**
   * Retrieve sales order
   * 
   * @param filters any
   * @return http Observable
   */
  public retrieveOrder(name: string): Observable<any> {
    return this.httpClient
      .get(`${environment.api}/resource/Sales%20Order/${name}`)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  /**
   * Get POS Profile
   */
  public getProfile(payload: { 
    filters: any[],
    fields: string[],
  }): Observable<any> {
    let httpParams = new HttpParams();

    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let value;
        
        if (key == 'filters') {
          value = JSON.stringify(payload[key]);
        }
        else if (key == 'fields') {
          value = JSON.stringify(payload[key]);
        }
        else {
          value = (payload as any)[key];
        }

        httpParams = httpParams.set(key, value);
      }
    }
    
    return this.httpClient
      .get(`${environment.api}/resource/POS%20Profile`, { params: httpParams })
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  /**
   * Create queue
   */
  public createQueue(payload: any): Observable<any> {
    return this.httpClient.post(`${environment.api}/resource/Queue`, payload);
  }

  /**
   * Get queue
   */
  public getQueue(payload: {
    fields: string[],
    filters: any[],
  }): Observable<any> {
    let httpParams = new HttpParams();

    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let value;
        
        if (key == 'filters') {
          value = JSON.stringify(payload[key]);
        }
        else if (key == 'fields') {
          value = JSON.stringify(payload[key]);
        }
        else {
          value = (payload as any)[key];
        }

        httpParams = httpParams.set(key, value);
      }
    }

    return this.httpClient
      .get(`${environment.api}/resource/Queue`, { params: httpParams })
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

  /**
   * Delete queue
   */
  public deleteQueue(name: string): Observable<any> {
    return this.httpClient.delete(`${environment.api}/resource/Queue/${name}`);
  }

  /**
   * Get company list
   */
  public getCompany(payload: {
    fields: string[],
    filters: any[],
  }): Observable<any> {
    let httpParams = new HttpParams();

    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let value;
        
        if (key == 'filters') {
          value = JSON.stringify(payload[key]);
        }
        else if (key == 'fields') {
          value = JSON.stringify(payload[key]);
        }
        else {
          value = (payload as any)[key];
        }

        httpParams = httpParams.set(key, value);
      }
    }

    return this.httpClient
      .get(`${environment.api}/resource/Company`, { params: httpParams })
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }

}
