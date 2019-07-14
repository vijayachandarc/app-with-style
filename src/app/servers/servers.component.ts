import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  serverStatus= "No server was created";
  serverName = "";

  constructor() {
    setTimeout(() => {this.addNewServer = true}, 2000);
   }

  ngOnInit() {
  }

  onClick() {
    this.serverStatus = "New Server is created with name " + this.serverName;
  }

  onUpdate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
