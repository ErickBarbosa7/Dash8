import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsListComponent } from '../../../components/gifs-list/gifs-list.component';

@Component({
  selector: 'app-search-pge',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { }
