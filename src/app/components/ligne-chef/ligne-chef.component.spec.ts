import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneChefComponent } from './ligne-chef.component';

describe('LigneChefComponent', () => {
  let component: LigneChefComponent;
  let fixture: ComponentFixture<LigneChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
