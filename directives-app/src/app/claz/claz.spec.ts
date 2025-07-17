import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Claz } from './claz';

describe('Claz', () => {
  let component: Claz;
  let fixture: ComponentFixture<Claz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Claz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Claz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
