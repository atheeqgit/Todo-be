import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFormComponent } from './insert-form.component';

describe('InsertFormComponent', () => {
  let component: InsertFormComponent;
  let fixture: ComponentFixture<InsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
