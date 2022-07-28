import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  hasSnapped!: Boolean;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(event: Event) {
    let btn = event.target as HTMLButtonElement;

    if (this.hasSnapped == true) {
      this.faceSnapService.snapUnsnapById(this.faceSnap.id, 'unsnap');
      this.hasSnapped = false;
      btn!.textContent = 'Oh Snap!';
    } else {
      this.faceSnapService.snapUnsnapById(this.faceSnap.id, 'snap');
      this.hasSnapped = true;
      btn!.textContent = 'Unsnap!';
    }
  }
}
