import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarMedicamentosPage } from './far-medicamentos.page';

describe('FarMedicamentosPage', () => {
  let component: FarMedicamentosPage;
  let fixture: ComponentFixture<FarMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
