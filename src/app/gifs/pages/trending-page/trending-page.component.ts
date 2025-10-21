import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsService } from '../../services/GifsService.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent { 
  private gifsService = inject(GifsService);

  ngOnInit(): void {
    this.gifsService.fetchTrendingGifs();
  }
}
