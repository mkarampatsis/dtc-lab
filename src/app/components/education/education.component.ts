import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgramComponent } from './program/program.component';
import { GeneralComponent } from './general/general.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, NgbNavModule, NgbCarouselModule, ProgramComponent, GeneralComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  images = [
    'assets/images/education/ai-1-1.png', 
    'assets/images/education/ai-2-1.jpg'
  ]
  active = 1;
}
