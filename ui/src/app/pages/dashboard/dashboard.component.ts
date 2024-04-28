import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface ChipColor {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
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
