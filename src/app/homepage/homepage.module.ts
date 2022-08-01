import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, FormsModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
