import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaxexpedienteComponent } from './listaxexpediente.component';

describe('ListaxexpedienteComponent', () => {
  let component: ListaxexpedienteComponent;
  let fixture: ComponentFixture<ListaxexpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaxexpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaxexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
