import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iff } from './iff';

describe('Iff', () => {
  let component: Iff;
  let fixture: ComponentFixture<Iff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
