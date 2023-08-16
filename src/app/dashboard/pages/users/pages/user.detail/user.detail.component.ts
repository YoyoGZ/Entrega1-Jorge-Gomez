import { Component } from '@angular/core';
import { User } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-user.detail',
  templateUrl: './user.detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent {
  public user: User | null = null;
  public userId? : number;
  
  constructor(
    private activatedRout: ActivatedRoute, 
    private notification: NotifierService, 
    private router: Router,
    private userService: UserService ) {
    if (!Number(this.activatedRout.snapshot.params['id'])) {
      this.notification.showError(`${this.activatedRout.snapshot.params['id']} NO es un ID Válido`)
      this.router.navigate(["dashboard, users"])
    } else {
        this.userId = Number(this.activatedRout.snapshot.params['id']);
        this.loadUserDetail();
    }
  }

    loadUserDetail(): void {
      if(this.userId) {
        this.userService.getUserById(this.userId).subscribe({
          next: (user) => console.log(user),         
        })
      }
    }
}
