import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap-model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<Boolean>;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<Boolean>();

    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
