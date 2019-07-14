import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-with-style';
  serverId = "101";
  status = "UP";

  getServerid() {
    return this.serverId;
  }

  getserverstatus() {
    return this.status;
  }
}
