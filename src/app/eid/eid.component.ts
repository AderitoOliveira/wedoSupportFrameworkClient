import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { EID } from './eid.model';
import { EIDService } from './eid.service';
import { liveSearch } from '../util/utilfunctions';

@Component({
  selector: 'app-eid',
  templateUrl: './eid.component.html',
  styleUrls: ['./eid.component.css'],
  providers: [EIDService]
})
export class EIDComponent implements OnInit {
  httpdata = null;
  dataSource = <EID> (this.httpdata);
  searchText = null;

  private eidSubject = new Subject<string>();

  constructor(private eidService: EIDService) { }

  ngOnInit() {
    console.log("Inside ngOnInit");
    this.getEids();
  }


  getEids(): void {
    this.eidService.getEids().subscribe(data => {
      console.log(data); 
      this.dataSource = data["results"] as any;

    });
  }

  readonly eid = this.eidSubject.pipe(
    liveSearch(eid => this.eidService.filterEids(eid))
  );

  searchEID(eid: string) {
    this.eidSubject.next(eid);
  }

}
