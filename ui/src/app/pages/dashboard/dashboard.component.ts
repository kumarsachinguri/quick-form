import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
export interface ChipColor {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  availableColors: ChipColor[] = [
    { name: 'none', selected: true },
    { name: 'Primary', selected: false },
    { name: 'Accent', selected: false },
    { name: 'Warn', selected: false },
  ];
}
