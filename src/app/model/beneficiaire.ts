import {CompteBancaire} from "./CompteBancaire";
import {Transaction} from "./transaction";


export interface Beneficiaire {
  beneficiaireId: number;
  beneficiaireName: string;
  numeroCompte: number;
  banque: string;
  compteB: CompteBancaire;
  transactions: Transaction[];
}
