import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  userEmail!: String;

  ngOnInit(): void {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onFormSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
