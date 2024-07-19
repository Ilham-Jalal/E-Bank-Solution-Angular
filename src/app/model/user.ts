import {CompteBancaire} from "./CompteBancaire";

export class User {
  userId!: number;
  username!: string;
  email!: string;
  password!: string;
  compteBancaire!: CompteBancaire[];
}
