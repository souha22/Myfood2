import {Offre} from './offre';
import {Lignecommandemenu} from './lignecommandemenu';

export class Menu {
  id: number;
  nom: string;
  details: string;
  type: string;
  prix: number;
  lignecommandemenu: Lignecommandemenu;
  offer: Offre[];
}
