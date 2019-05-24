import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  
  constructor() {}

  ngOnInit() {
    // here we would call a service that gets us the data
    this.title = 'My First Angular App'
  }
}
