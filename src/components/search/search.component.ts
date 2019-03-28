import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  search(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotifyService.getArtists(termino).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
