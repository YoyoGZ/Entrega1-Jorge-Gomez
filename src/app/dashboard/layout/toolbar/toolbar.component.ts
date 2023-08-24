import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from '../../pages/users/models';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
@Input()
public drawer?: MatDrawer;

public authUser$ : Observable<User | null>;

constructor( private authservice: AuthService) {
  this.authUser$ = this.authservice.authUser$;
  }
}
