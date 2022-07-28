import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

// OBSERVABLES TRAINS EXERCICE

// redTrainsCalled = 0;
//   yellowTrainsCalled = 0;

//   ngOnInit() {
//     interval(1000)
//       .pipe(
//         take(3),
//         map((value) => (value % 2 === 0 ? 'rouge' : 'jaune')),
//         tap((color) =>
//           console.log(
//             `La lumière s'allume en %c${color}`,
//             `color: ${this.translateColor(color)}`
//           )
//         ),
//         switchMap((color) => this.getTrainObservable$(color)),
//         tap((train) =>
//           console.log(
//             `Train %c${train.color} ${train.trainIndex} arrivé !`,
//             `font-weight: bold; color: ${this.translateColor(train.color)}`
//           )
//         )
//       )
//       .subscribe();
//   }

//   getTrainObservable$(color: 'rouge' | 'jaune') {
//     const isRedTrain = color === 'rouge';
//     isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
//     const trainIndex = isRedTrain
//       ? this.redTrainsCalled
//       : this.yellowTrainsCalled;
//     console.log(
//       `Train %c${color} ${trainIndex} appelé !`,
//       `text-decoration: underline; color: ${this.translateColor(color)}`
//     );
//     return of({ color, trainIndex }).pipe(delay(isRedTrain ? 3000 : 3000));
//   }

//   translateColor(color: 'rouge' | 'jaune') {
//     return color === 'rouge' ? 'red' : 'yellow';
//   }
