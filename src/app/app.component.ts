import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-demo';
  players=["virat","sachin"];
  message:string="Good morining";
  inputValue:string="Initial value";
}
