import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Exporting the form of the form group type. Allows us to access it in register.components.html.
  form: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    // Calls the create form method when the component is constructed.
    this.createForm()
  }

  //Function that creates the form.
  createForm() {

    this.form = this.formBuilder.group({
      // Validators.required adds the required under the field.
      username: ['', Validators.required],
      email: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      role: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  }

  onRegisterSubmit() {
    console.log(this.form);
  }

  ngOnInit() {
  }

}
