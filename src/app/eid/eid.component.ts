import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { EID } from './eid.model';
import { EIDService } from './eid.service';

@Component({
  selector: 'app-eid',
  templateUrl: './eid.component.html',
  styleUrls: ['./eid.component.css'],
  providers: [EIDService]
})
export class EIDComponent implements OnInit {
  httpdata = null;
  dataSource = <EID> (this.httpdata);

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

}
