import {Component, Host, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {SggComponent} from '../../sgg.component';

@Component({
  selector: 'sgg-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {
  constructor(@Host() public app: SggComponent) { }

  ngOnInit() {
  }
}
