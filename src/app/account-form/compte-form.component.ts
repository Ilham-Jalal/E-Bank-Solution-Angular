import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CompteBancaire } from '../model/CompteBancaire';
import { FormsModule } from "@angular/forms";
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { TypeC } from "../enum/TypeC";
import { CompteService } from "../service/compte-service.service";

@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    RouterOutlet,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./compte-form.component.scss']
})
export class CompteFormComponent implements OnInit {
  compteBancaire: CompteBancaire = {} as CompteBancaire; // Initialisation de l'objet CompteBancaire
  typesC: TypeC[] = Object.values(TypeC); // Liste des valeurs de l'enum TypeC
  userId!: number; // Ajout du champ userId

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compteService: CompteService
  ) {}

  ngOnInit(): void {
    const compteId = this.route.snapshot.params['id'];
    if (compteId) {
      this.compteService.getCompteById(compteId).subscribe(
        (compte: CompteBancaire) => {
          this.compteBancaire = compte;
        },
        (error: any) => {
          console.error('Erreur lors du chargement du compte : ', error);
        }
      );
    }
  }

  saveCompte() {
    this.compteService.saveAccount(this.userId, this.compteBancaire).subscribe(
      (savedCompte: any) => {
        console.log('Compte sauvegardé avec succès : ', savedCompte);
        this.gotoComptesList();
      },
      (error: any) => {
        console.error('Erreur lors de la sauvegarde du compte : ', error);
      }
    );
  }

  gotoComptesList() {
    this.router.navigate(['/comptes']);
  }

  onSubmit() {
    console.log(this.compteBancaire);
    if (this.compteBancaire.compteId) {
      this.compteService.updateCompte(this.compteBancaire.compteId, this.compteBancaire).subscribe(
        (updatedCompte: CompteBancaire) => {
          console.log('Compte mis à jour avec succès : ', updatedCompte);
          this.gotoComptesList();
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour du compte : ', error);
        }
      );
    } else {
      this.saveCompte();
    }
  }
}
