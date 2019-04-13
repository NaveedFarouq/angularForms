import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyPressed = false;
  key = '';
  
  counter = 0;

  increment() {
    this.counter++
  }

  decrement() {
    // ifcounter is less than or equal to zero then let it be zero
    // else decrement the value
    this.counter <= 0 ? (this.counter = 0) : this.counter--;
  }
  showKey($event) {
    this.keyPressed = true;
    this.key = $event.key.toUpperCase();
    setTimeout(() => {
      this.keyPressed = false;
    }, 500)
    console.log(this.key)
  }
  
}
