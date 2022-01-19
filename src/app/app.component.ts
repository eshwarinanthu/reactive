import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rf';
  submitted: any ;
  registerForm: any;

  register=new FormGroup({
    title:new FormControl ('', Validators.required),//form validation
    username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.required])
  })
  
  get f() { return this.register.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value, null, 4));
}
 
  onReset() {
    this.submitted = false;
    this.register.reset();
}
}

