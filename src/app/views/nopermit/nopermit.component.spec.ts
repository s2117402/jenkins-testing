import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopermitComponent } from './nopermit.component';

describe('NopermitComponent', () => {
  let component: NopermitComponent;
  let fixture: ComponentFixture<NopermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
