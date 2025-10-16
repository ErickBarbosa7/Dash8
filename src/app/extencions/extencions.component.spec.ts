import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtencionsComponent } from './extencions.component';

describe('ExtencionsComponent', () => {
  let component: ExtencionsComponent;
  let fixture: ComponentFixture<ExtencionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtencionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtencionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
