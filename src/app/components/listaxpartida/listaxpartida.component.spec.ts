import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaxpartidaComponent } from './listaxpartida.component';

describe('ListaxpartidaComponent', () => {
  let component: ListaxpartidaComponent;
  let fixture: ComponentFixture<ListaxpartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaxpartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaxpartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
