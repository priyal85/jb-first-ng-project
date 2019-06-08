import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() {
  }

  ngOnInit() {
    // this.user = {
    //   name: 'Bob Martin',
    //   title: 'SE',
    //   address: '520, Colombo 03',
    //   phone: ['0112531014', '01137205289']
    // };

  }
  toggleCollapse() {
    console.log('Tosgle was calle. Before value :'+this.isCollapsed );
    this.isCollapsed = !this.isCollapsed;
    console.log('Tosgle was calle. After value :'+this.isCollapsed );
  }
}
