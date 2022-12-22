import * as AOS from 'aos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gruasYerovi';



  ngOnInit(){
    AOS.init();
  }
}
