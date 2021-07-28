import {Lignecommandeproduit} from './lignecommandeproduit';
import {Lignecommandemenu} from './lignecommandemenu';

export class Commande{
  id: number;
  datecommande: Date;
  remise: number;
  statut: string;
  lignecommandemenu: Lignecommandemenu [];
  lignecommandeproduit: Lignecommandeproduit[];

}
