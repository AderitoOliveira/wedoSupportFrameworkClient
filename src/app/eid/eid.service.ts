import { Injectable } from '@angular/core/esm2015';
import { HttpClientModule }  from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { EID } from './eid.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EIDService {
 
    httpdata = <EID>{};

    constructor(private httpClient: HttpClient) { }
   
    getEids(): Observable<EID> {
      
        console.log("Inside getEids");
        /* this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data)=> {
            console.log(data); 
            this.httpdata = data;
          });
          

        return of(this.httpdata); */

        return this.httpClient.get('http://localhost:60100/rest/query').pipe(map((res:any) => res)) 
    }
}