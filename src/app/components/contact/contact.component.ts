import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  images = [
    'assets/images/contact/contact-1.png', 
    'assets/images/contact/contact-2.png'
  ]
}
