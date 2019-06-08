import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  user: User = {
    name: 'Bob Martin',
    designation: 'Software Engineer',
    address: '520, Colombo 03',
    phone: ['0112531014', '01137205289']
  };
  inputText: string = "Initial Value";
}
