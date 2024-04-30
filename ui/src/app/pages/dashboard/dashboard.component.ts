import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface ChipColor {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public chips = [
    { icon: 'bi-clock', name: 'Recent', selected: true },
    { icon: 'bi-file-earmark-person', name: 'My Forms', selected: false },
    { icon: 'bi-bookmark', name: 'Filled Forms', selected: false },
    { icon: 'bi-star', name: 'Favorites', selected: false },
  ];
  public surveys = [
    {
      title: `Workplace Satisfaction`,
      des: `Evaluate factors affecting job contentment. Examine workplace culture, stressors, and equilibrium. Contribute to enhancing work environments.`,
      start: new Date(`01/01/2024`),
      end: new Date(`01/15/2024`),
      user: `Alice Johnson`,
      modified: new Date(`01/01/2024`),
      img: `survey_img_01.png`,
    },
    {
      title: `Team Dynamics`,
      des: `Investigate teamwork impact on job happiness. Analyze group culture, stress, and work-life balance. Contribute to a harmonious work atmosphere.`,
      start: new Date(`01/03/2024`),
      end: new Date(`01/18/2024`),
      user: `Bob Davis`,
      modified: new Date(`01/03/2024`),
      img: `survey_img_02.png`,
    },
    {
      title: `Career Contentment`,
      des: `Examine factors influencing job satisfaction. Explore work culture, stressors, and work-life balance. Contribute to fostering positive work environments.`,
      start: new Date(`01/05/2024`),
      end: new Date(`01/17/2024`),
      user: `Catherine Miller`,
      modified: new Date(`01/05/2024`),
      img: `survey_img_03.png`,
    },
    {
      title: `Job Happiness Check`,
      des: `Assess elements impacting job satisfaction. Delve into workplace culture, stress levels, and work-life balance. Contribute to creating better workspaces.`,
      start: new Date(`01/07/2024`),
      end: new Date(`01/20/2024`),
      user: `David Wilson`,
      modified: new Date(`01/07/2024`),
      img: `survey_img_01.png`,
    },
    {
      title: `Workplace Wellness`,
      des: `Explore factors affecting job well-being. Investigate office culture, stress, and balance. Contribute to enhancing the overall work experience.`,
      start: new Date(`01/10/2024`),
      end: new Date(`01/19/2024`),
      user: `Eva Brown`,
      modified: new Date(`01/10/2024`),
      img: `survey_img_02.png`,
    },
    {
      title: `Job Satisfaction Check`,
      des: `Evaluate elements influencing job contentment. Examine workplace culture, stress, and work-life balance. Contribute to building positive work atmospheres.`,
      start: new Date(`01/12/2024`),
      end: new Date(`01/16/2024`),
      user: `Frank White`,
      modified: new Date(`01/12/2024`),
      img: `survey_img_03.png`,
    },
    {
      title: `Team Collaboration`,
      des: `Assess teamwork's influence on job happiness. Analyze group culture, stressors, and work-life equilibrium. Contribute to fostering a cohesive work environment.`,
      start: new Date(`01/15/2024`),
      end: new Date(`01/20/2024`),
      user: `Grace Taylor`,
      modified: new Date(`01/15/2024`),
      img: `survey_img_01.png`,
    },
    {
      title: `Job Wellness Check`,
      des: `Investigate factors affecting job well-being. Explore workplace culture, stress levels, and work-life balance. Contribute to creating healthier work environments.`,
      start: new Date(`01/18/2024`),
      end: new Date(`02/01/2024`),
      user: `Harry Smith`,
      modified: new Date(`01/18/2024`),
      img: `survey_img_02.png`,
    },
    {
      title: `Work Satisfaction`,
      des: `Examine elements impacting job contentment. Delve into work culture, stress, and work-life balance. Contribute to fostering positive work environments.`,
      start: new Date(`01/20/2024`),
      end: new Date(`02/10/2024`),
      user: `Ivy Johnson`,
      modified: new Date(`01/20/2024`),
      img: `survey_img_03.png`,
    },
    {
      title: `Balanced Work Life`,
      des: `Evaluate factors influencing job satisfaction. Analyze workplace culture, stressors, and balance. Contribute to creating better work-life integration.`,
      start: new Date(`01/25/2024`),
      end: new Date(`02/15/2024`),
      user: `Jack Davis`,
      modified: new Date(`01/25/2024`),
      img: `survey_img_01.png`,
    },
  ];
}
