import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import type { GifsResponse, Gif } from '../interfaces/gifs.interfaces';
// Importamos el archivo de entorno
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  private apiKey = environment.giphyApiKey;
  private serviceUrl = environment.giphyUrlApi; 

  private _history = signal<string[]>([]);
  private _gifList = signal<Gif[]>([]);

  public history = this._history.asReadonly();
  public gifList = this._gifList.asReadonly();

  constructor() {
    this.loadLocalStorage();
    
    // effect() para guardar el historial en localStorage cada vez que cambie
    effect(() => {
      localStorage.setItem('history', JSON.stringify(this._history()));
    });
  }

  private loadLocalStorage(): void {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      this._history.set(JSON.parse(storedHistory));
      if (this._history().length > 0) {
        this.searchTag(this._history()[0]);
      }
    }
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase().trim();
    if (this._history().includes(tag)) {
      this._history.update(currentHistory => [tag, ...currentHistory.filter(t => t !== tag)]);
    } else {
      this._history.update(currentHistory => [tag, ...currentHistory]);
    }
    this._history.update(currentHistory => currentHistory.slice(0, 10));
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey) 
      .set('q', tag)
      .set('limit', '12'); 

    this.http.get<GifsResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this._gifList.set(resp.data);
      });
  }

  public fetchDashboardGifs(): void {
    this.searchTag('welcome'); 
  }

  public fetchTrendingGifs(): void {
    const params = new HttpParams()
  
      .set('api_key', this.apiKey) 
      .set('limit', '12');

    this.http.get<GifsResponse>(`${this.serviceUrl}/trending`, { params })
      .subscribe(resp => {
        this._gifList.set(resp.data);
      });
  }
}

