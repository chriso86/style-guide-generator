import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'sgg-login-dialog-component',
  templateUrl: './login-dialog-component.component.html'
})
export class LoginDialogComponentComponent implements OnInit {
  loading = false;
  form: FormGroup;
  details = {
    username: '',
    password: ''
  };

  constructor(public dialogRef: MatDialogRef<LoginDialogComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string
              },
              private authService: AuthService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginWithFacebook() {
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    const body = JSON.stringify({
      'username': username,
      'password': password
    });

    this.loading = true;
  }
}
