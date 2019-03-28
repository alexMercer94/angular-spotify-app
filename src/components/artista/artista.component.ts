import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  loader: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loader = true;
      this.getArtist(params['id']);
      this.getTopTrack(params['id']);
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    this.loader = true;
    this.spotifyService.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loader = false;
    });
  }

  getTopTrack(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      console.log(tracks);
      this.topTracks = tracks;
    });
  }
}
