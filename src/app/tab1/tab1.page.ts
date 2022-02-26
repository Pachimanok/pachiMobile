import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private places = [{
    id:"1",
    title:"WhatsApp",
    img:"https://anthoncode.com/wp-content/uploads/2019/01/whatsapp-2.png",
  }]

  constructor() {}

  ngOnInit() {}
}
