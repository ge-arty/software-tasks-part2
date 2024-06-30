import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';
  private apiKey1 = '3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f';
  private apiKey2 = '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7&#39';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey1,
    });
    const params = {
      title: title,
    };

    return this.http.get(this.apiUrl, { headers, params });
  }

  getAllMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey1,
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
