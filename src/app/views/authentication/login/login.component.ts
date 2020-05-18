import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@kt/services/config.service';
import { myAnimations } from '@kt/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: myAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private jwtAuth: JwtAuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['sakthivel.m@rumango.com', [Validators.required, Validators.email]],
            password: ['123456', Validators.required]
        });
    }

    login() {
        console.log("Logging in..");
        const loginData = this.loginForm.value;
        console.log(loginData);
        // this.router.navigateByUrl('/dashbaord');
        this.jwtAuth.signin(loginData.username, loginData.password)
            .subscribe(response => {
                this.router.navigateByUrl('/dashboard');
            }, err => {
                console.log(err);
            })
    }
}
