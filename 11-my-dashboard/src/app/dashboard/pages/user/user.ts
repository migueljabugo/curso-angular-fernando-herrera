import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from "@shared/title/title";
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [Title],
  templateUrl: './user.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  //public user = signal<User | undefined>(undefined)
  public user = toSignal(
    this.route.params.pipe(
      switchMap(params => this.userService.getUserById(params['id']))
    )
  );

  //constructor(){
  //  this.route.params.subscribe(params => console.log(params))
  //}

}
