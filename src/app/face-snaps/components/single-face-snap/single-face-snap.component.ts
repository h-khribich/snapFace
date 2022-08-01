import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap-model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

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

  onSnap(event: Event, faceSnapId: number) {
    let btn = event.target as HTMLButtonElement;

    if (this.hasSnapped == true) {
      this.faceSnap$ = this.faceSnapService
        .snapUnsnapById(faceSnapId, 'unsnap')
        .pipe(
          tap(() => {
            this.hasSnapped = false;
            btn!.textContent = 'Oh Snap!';
          })
        );
    } else {
      this.faceSnap$ = this.faceSnapService
        .snapUnsnapById(faceSnapId, 'snap')
        .pipe(
          tap(() => {
            this.hasSnapped = true;
            btn!.textContent = 'Unsnap!';
          })
        );
    }
  }
}
