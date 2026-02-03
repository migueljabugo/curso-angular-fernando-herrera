import { ChangeDetectionStrategy, Component } from '@angular/core';
import Dashboard from '../../dashboard/dashboard';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {

  public menuItems = routes
      .map(route => route.children ?? [])
      .flat()
      .filter(route => route && route.path)
      .filter(route => !route.path?.includes(':'));

 }
