import {TypeCarte} from "../enum/TypeCarte";
import {Status} from "../enum/Status";
import {CompteBancaire} from "./CompteBancaire";

export interface CarteBancaire {
  carteId: number;
  numero: string;
  dateExpiration: Date;
  type: TypeCarte;
  status: Status;
  raisonBlocage: string;
  compteB: CompteBancaire;
}
