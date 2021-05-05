import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-todo-app';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Changed in the setTimeout';
    // }, 2000);
  }
}
