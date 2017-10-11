import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiboxComponent } from './sushibox.component';

describe('SushiboxComponent', () => {
  let component: SushiboxComponent;
  let fixture: ComponentFixture<SushiboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
