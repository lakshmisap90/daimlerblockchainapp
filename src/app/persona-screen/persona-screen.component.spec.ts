import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaScreenComponent } from './persona-screen.component';

describe('PersonaScreenComponent', () => {
  let component: PersonaScreenComponent;
  let fixture: ComponentFixture<PersonaScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
