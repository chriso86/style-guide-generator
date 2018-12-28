import {Component, Host, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {LoginDialogComponentComponent} from '../dialogs/login-dialog-component/login-dialog-component.component';
import {SggComponent} from '../../sgg.component';

@Component({
  selector: 'sgg-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {
  constructor(@Host() public app: SggComponent,
              private toastrService: ToastrService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin() {
    const config = new MatDialogConfig();

    config.data = {
      title: 'Login in to Facebook'
    };
    config.maxWidth = '100%';
    config.minWidth = '250px';

    this.dialog.open(LoginDialogComponentComponent, config);
  }
}
