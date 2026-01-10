import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GifsSideMenuHeader } from '../../components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideMenuOptions } from '../../components/gifs-side-menu-options/gifs-side-menu-options';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export default class DashboardPage {


 }
