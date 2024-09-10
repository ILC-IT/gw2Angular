import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesteadComponent } from './homestead.component';

describe('HomesteadComponent', () => {
  let component: HomesteadComponent;
  let fixture: ComponentFixture<HomesteadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesteadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesteadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
