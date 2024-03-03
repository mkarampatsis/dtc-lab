import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  images = [
    'assets/images/research/ai-3-1.png', 
    'assets/images/research/ai-4-1.jpg'
  ]
}
