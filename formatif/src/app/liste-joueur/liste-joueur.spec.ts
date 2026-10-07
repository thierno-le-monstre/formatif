import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeJoueur } from './liste-joueur';

describe('ListeJoueur', () => {
  let component: ListeJoueur;
  let fixture: ComponentFixture<ListeJoueur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeJoueur],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeJoueur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
