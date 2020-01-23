import { Injectable } from '@angular/core';
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

        //return this.httpClient.get('http://localhost:60100/rest/getAllEids').pipe(map((res:any) => res)) -- WORKING CODE
        return this.httpClient.get('http://localhost:60100/rest/getEidsMapping').pipe(map((res:any) => res)) 
    }

    filterEids(eid: string): Observable<EID> {
      
        console.log("Inside filterEids");

        return this.httpClient.get('http://localhost:60100/filterByEid/${eid}').pipe(map((res:any) => res)) 
    }
}