import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {};
  items = [];


  ngOnInit() {
  }

  save() {
    if (this.model.text!== '') {
      this.items.unshift({ 'text': this.model['text'], 'complete': false });
      this.model['text'] = '';
    }
  }

  clearComplete() {
    this.items = [];
  }
}
