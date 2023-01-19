import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Proyecto de GW2 en Angular';
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
