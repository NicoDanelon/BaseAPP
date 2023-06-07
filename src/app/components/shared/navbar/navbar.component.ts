import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  active = 2;
}
