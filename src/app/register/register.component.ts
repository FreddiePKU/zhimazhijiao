import { Component, ViewEncapsulation } from '@angular/core';
import { AlertService, UserService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  styleUrls: [ './register.style.scss' ],
  templateUrl: './register.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'register-page app'
  }
})
export class Register {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
