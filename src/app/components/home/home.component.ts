import { Component, OnInit } from '@angular/core';
import { IntrojsService } from 'src/app/services/introjs.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      date: [''],
      origen: [''],
      message: [''],
    })
  }

  ngOnInit() { }

  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name')?.value);
    formData.append("email", this.form.get('email')?.value);
    formData.append("date", this.form.get('date')?.value);
    formData.append("origen", this.form.get('origen')?.value);
    formData.append("message", this.form.get('message')?.value);
    console.log(formData);


    this.http.post('http://localhost:3001/api/formulario', formData).subscribe(
      //(response) => console.log(response),
      (error) => console.log(error)
    )
  }

  //constructor(private introService: IntrojsService) { }
  //ngOnInit(): void {
  //}
  //empezarGuia(){
    //this.introService.featureOne();
  //}

}
