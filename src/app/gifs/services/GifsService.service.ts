import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import type { GifsResponse, Gif } from '../interfaces/gifs.interfaces';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //inyecta el cliente HTTP.
  private http = inject(HttpClient);

  private GIPHY_API_KEY: string = 'JecLl0Pc5P9OYdMjWvtzDPKusnFCzfUa';
  private GIPHY_API_URL: string = 'https://api.giphy.com/v1/gifs';

  // Signals para manejar el estado de forma reactiva.
  private _history = signal<string[]>([]);
  private _gifList = signal<Gif[]>([]);

  // Signals públicas (de solo lectura) para que los componentes las consuman.
  public history = this._history.asReadonly();
  public gifList = this._gifList.asReadonly();

  constructor() {
    // Carga el historial desde localStorage al iniciar el servicio
    this.loadLocalStorage();

    // effect() para guardar el historial en localStorage cada vez que cambie
    effect(() => {
      localStorage.setItem('history', JSON.stringify(this._history()));
    });
    if (this.history().length === 0) {
      this.fetchTrendingGifs();
    }
  }

  private loadLocalStorage(): void {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      this._history.set(JSON.parse(storedHistory));
      // Si hay historial, busca el último término añadido.
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
    // Limita el historial a 10 elementos.
    this._history.update(currentHistory => currentHistory.slice(0, 10));
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', '12'); 

    this.http.get<GifsResponse>(`${this.GIPHY_API_URL}/search`, { params })
      .subscribe(resp => {
        this._gifList.set(resp.data);
      });
  }
  public fetchTrendingGifs(): void {
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', '12');

    this.http.get<GifsResponse>(`${this.GIPHY_API_URL}/trending`, { params })
      .subscribe(resp => {
        this._gifList.set(resp.data);
      });
  }
}