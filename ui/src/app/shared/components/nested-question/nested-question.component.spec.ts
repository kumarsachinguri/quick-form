import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedQuestionComponent } from './nested-question.component';

describe('NestedQuestionComponent', () => {
  let component: NestedQuestionComponent;
  let fixture: ComponentFixture<NestedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
