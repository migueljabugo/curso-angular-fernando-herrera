import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, Route } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './admin-dashboard-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDashboardLayout {

  authService = inject(AuthService);
  router = inject(Router);

  user = computed(() => this.authService.user());


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
