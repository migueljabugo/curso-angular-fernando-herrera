import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
  styleUrl: './gifs-side-menu-options.css'
})
export class GifsSideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Most popular gifs',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Search for gifs',
      route: '/dashboard/search'
    },
  ];


 }
