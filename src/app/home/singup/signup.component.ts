import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

}