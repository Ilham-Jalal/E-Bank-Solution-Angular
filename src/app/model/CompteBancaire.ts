


import {TypeC} from "../enum/TypeC";
import {Beneficiaire} from "./beneficiaire";
import {CarteBancaire} from "./carte-bancaire";
import {Transaction} from "./transaction";
import {User} from "./user";



export interface CompteBancaire {
  compteId: number;
  type: TypeC;
  solde: number;
  dateCreation: Date;
  accountClossed: boolean;
  raisonClosing: string;
  numeroCompte: string;
  user: User;
  beneficiaire: Beneficiaire[];
  carteBancaires: CarteBancaire[];
  transactions: Transaction[];
}
