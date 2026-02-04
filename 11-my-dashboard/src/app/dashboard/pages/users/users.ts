import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@services/user.service';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-users',
  imports: [
    Title,
    RouterLink
],
  templateUrl: './users.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Users {

  public userService = inject(UserService);


}
