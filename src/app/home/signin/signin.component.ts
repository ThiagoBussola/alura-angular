import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}