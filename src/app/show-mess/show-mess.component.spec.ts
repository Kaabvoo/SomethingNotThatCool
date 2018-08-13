import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessComponent } from './show-mess.component';

describe('ShowMessComponent', () => {
  let component: ShowMessComponent;
  let fixture: ComponentFixture<ShowMessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
