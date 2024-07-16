import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficaireUpdateFormComponent } from './beneficaire-update-form.component';

describe('BeneficaireUpdateFormComponent', () => {
  let component: BeneficaireUpdateFormComponent;
  let fixture: ComponentFixture<BeneficaireUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficaireUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficaireUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
