import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = [
    'assets/images/carousel/image1.png', 
    'assets/images/carousel/image3.jpg',
    'assets/images/carousel/image4.png',
    'assets/images/carousel/image2.png' 
  ]

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
