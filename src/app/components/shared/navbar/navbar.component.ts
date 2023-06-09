import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../login/login.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, LoginComponent, CarrouselComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  active = 1;
}
