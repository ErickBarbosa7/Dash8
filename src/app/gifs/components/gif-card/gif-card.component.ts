import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required.');
  }
}