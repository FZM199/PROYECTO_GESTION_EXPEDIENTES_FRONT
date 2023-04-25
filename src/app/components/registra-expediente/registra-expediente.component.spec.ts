import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraExpedienteComponent } from './registra-expediente.component';

describe('RegistraExpedienteComponent', () => {
  let component: RegistraExpedienteComponent;
  let fixture: ComponentFixture<RegistraExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraExpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
