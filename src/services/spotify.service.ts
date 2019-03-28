import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDdrfmW_LP_9UPQCRLtF6DpQ-qBtaN6HPrFihuthlIiHvihd7HYAyS30AEogRYvNVYK7ET-39YLKf3AUPw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
    /* return this.http.get('browse/new-releases?limit=20', { headers }).pipe(map(data => data['albums'].items)); */
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => data['artists'].items));
    /* return this.http
      .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers })
      .pipe(map(data => data['artists'].items)); */
  }

  // Get an artist
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artists'].items));
  }

  /**
   * Get top track of an artist
   * @param id artist id
   */
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
