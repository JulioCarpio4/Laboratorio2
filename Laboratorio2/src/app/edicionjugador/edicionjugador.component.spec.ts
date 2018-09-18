import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionjugadorComponent } from './edicionjugador.component';

describe('EdicionjugadorComponent', () => {
  let component: EdicionjugadorComponent;
  let fixture: ComponentFixture<EdicionjugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionjugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
