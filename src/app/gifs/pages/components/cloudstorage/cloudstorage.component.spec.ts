import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudstorageComponent } from './cloudstorage.component';

describe('CloudstorageComponent', () => {
  let component: CloudstorageComponent;
  let fixture: ComponentFixture<CloudstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudstorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
