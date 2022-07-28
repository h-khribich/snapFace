import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss'],
})
export class NewFaceSnapComponent implements OnInit {
  faceSnapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegExp!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegExp =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.faceSnapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [
        null,
        [Validators.required, Validators.pattern(this.urlRegExp)],
      ],
      location: [null],
    });

    this.faceSnapPreview$ = this.faceSnapForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        id: 0,
        snaps: 0,
        createdDate: new Date(),
      }))
    );
  }

  onFormSubmit(formValue: FormGroup): void {
    this.faceSnapService.addNewSnapFace(formValue.value);

    this.router.navigateByUrl('/facesnaps');
  }
}
