import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VetPacientesPage } from './vet-pacientes.page';

describe('VetPacientesPage', () => {
  let component: VetPacientesPage;
  let fixture: ComponentFixture<VetPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
