import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.sass']
})
export class VolumeComponent implements OnInit {

  volume: number = 0;

  constructor() { }

  ngOnInit() {
  }

  volumeDown() {
    this.volume === 0 ? this.volume : this.volume--;
  }

  volumeUp() {
    this.volume === 10 ? this.volume : this.volume++;
  }

}
