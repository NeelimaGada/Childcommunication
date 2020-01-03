import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  details: any;
  @Output() Details = new EventEmitter();
  sendData: any;

  constructor(private Data: DataService) { }

  columnDefs = [
    { headerName: 'FullName', field: 'fullname' },
  ];

  get_data() {
    this.Data.Data().subscribe(Response => {
      this.details = Response;
      console.log(this.details)
    });
  }

  onRowClicked(event) {
    this.sendData = event.node.data;
    this.Details.emit(this.sendData);
    console.log(this.sendData);
  }

  ngOnInit() {
    this.get_data();
  }

}
