import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/pages/users/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User, ...args: unknown[]): unknown {

    return `${user.name} ${user.surname}`;
  }

}
