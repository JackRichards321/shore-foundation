import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechrequestComponent } from './techrequest.component';

describe('TechrequestComponent', () => {
  let component: TechrequestComponent;
  let fixture: ComponentFixture<TechrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
