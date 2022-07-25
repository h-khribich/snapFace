import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: Boolean;

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

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

  onView(): void {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
