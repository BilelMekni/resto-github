import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFoodsComponent } from './about-foods.component';

describe('AboutFoodsComponent', () => {
  let component: AboutFoodsComponent;
  let fixture: ComponentFixture<AboutFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
