import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Users {

  public userService = inject(UserService);

}
