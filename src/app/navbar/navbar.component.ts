import { Component,OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

 constructor(public auth:AuthService){}

  ngOnInit(): void {
      
  }
  logout()
  {
    this.auth.removeToken();
    this.auth.canAccess();
  }
}
