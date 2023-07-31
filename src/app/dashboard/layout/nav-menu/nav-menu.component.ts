import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  constructor(private router : Router) {}

  logout(): void {
    this.router.navigate(['auth', 'login'])
  }

}
