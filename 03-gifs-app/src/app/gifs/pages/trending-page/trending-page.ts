import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiftList } from '../../components/gift-list/gift-list/gift-list';

@Component({
  selector: 'app-trending-page',
  imports: [GiftList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage { }
