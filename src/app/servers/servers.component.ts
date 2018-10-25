import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  newButtonServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'twoway binding tutorial';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.newButtonServer = true;
      
    }, 2000)
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
  // this.serverName = (<HTMLInputElement>event.target).value; ----a way you can use to make the method get pulled to the page--
    this.serverName = event.target.value;
    console.log(this.serverName)
  }
}
