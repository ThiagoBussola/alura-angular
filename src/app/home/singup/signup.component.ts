import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-note-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignUpService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const fn = this.userNotTakenValidatorService.checkUserNameTaken();
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required, 
                    Validators.email
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(2), 
                    Validators.maxLength(40)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['',
                [
                    Validators.required, 
                    Validators.minLength(2), 
                    Validators.maxLength(30)
                ]
            ],
            password: ['', 
                [
                    Validators.required, 
                    Validators.minLength(8), 
                    Validators.maxLength(14)
                ]
            ]
        })        
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;

        this.signupService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate([``]),
                err => console.log(err)
            );

    }
}