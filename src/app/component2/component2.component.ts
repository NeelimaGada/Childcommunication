import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input() public user;

  columnDefs = [
    { headerName: 'FirstName', field: 'firstname' },
    { headerName: 'LastName', field: 'lastname' },
    { headerName: 'MobileNo', field: 'mobile' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Location', field: 'location' },
  ];
  constructor() {}
  ngOnInit() {
  }

}
