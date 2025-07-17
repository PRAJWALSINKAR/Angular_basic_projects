import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfirObj } from './ngfir-obj';

describe('NgfirObj', () => {
  let component: NgfirObj;
  let fixture: ComponentFixture<NgfirObj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgfirObj]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgfirObj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
