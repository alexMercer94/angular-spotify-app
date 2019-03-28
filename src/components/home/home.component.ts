import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newTracks: any[] = [];
  loading: boolean;

  error = false;
  messageError = '';

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newTracks = data;
        this.loading = false;
      },
      errorService => {
        this.loading = false;
        this.error = true;
        this.messageError = errorService.error.error.message;
      }
    );
  }

  ngOnInit() {}
}
