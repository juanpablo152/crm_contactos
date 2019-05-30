import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisusuarioComponent } from './regisusuario.component';

describe('RegisusuarioComponent', () => {
  let component: RegisusuarioComponent;
  let fixture: ComponentFixture<RegisusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
