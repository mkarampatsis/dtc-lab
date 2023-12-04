import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { HistoryComponent } from './history/history.component';
import { LawComponent } from './law/law.component';
import { RegulationComponent } from './regulation/regulation.component';
import { HardwareComponent } from './hardware/hardware.component';
import { StaffComponent } from './staff/staff.component';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [
    CommonModule, 
    NgbNavModule, 
    HistoryComponent, 
    LawComponent, 
    RegulationComponent, 
    HardwareComponent, 
    StaffComponent 
  ],
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  active = 1;
}