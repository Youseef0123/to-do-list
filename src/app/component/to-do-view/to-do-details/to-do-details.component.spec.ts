import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailsComponent } from './to-do-details.component';

describe('ToDoDetailsComponent', () => {
  let component: ToDoDetailsComponent;
  let fixture: ComponentFixture<ToDoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoDetailsComponent]
    });
    fixture = TestBed.createComponent(ToDoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
