import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteJoueur } from './carte-joueur';

describe('CarteJoueur', () => {
  let component: CarteJoueur;
  let fixture: ComponentFixture<CarteJoueur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteJoueur],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteJoueur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
