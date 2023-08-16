import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface FirstNotification{
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  showError(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private notifier$ = new Subject<FirstNotification>

  constructor() {
    this.notifier$.subscribe({
      next: (myNotification) => {
        Swal.fire(myNotification.title, myNotification.message, myNotification.type)
      }
    })
   }

   showSuccess(message: string, title = 'Realizado'): void {
    this.notifier$.next({
      type: 'success',
      message,
      title
    });
  }
}
