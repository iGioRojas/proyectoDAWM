import { Component, OnInit } from '@angular/core';
import { IntrojsService } from 'src/app/services/introjs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private introService: IntrojsService) { }

  ngOnInit(): void {
  }

  empezarGuia(){
    this.introService.featureOne();
  }

}
