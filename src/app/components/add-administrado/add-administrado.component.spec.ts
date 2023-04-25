import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministradoComponent } from './add-administrado.component';

describe('AddAdministradoComponent', () => {
  let component: AddAdministradoComponent;
  let fixture: ComponentFixture<AddAdministradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdministradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdministradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
