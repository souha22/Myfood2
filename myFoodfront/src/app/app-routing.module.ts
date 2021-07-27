import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {ListUserComponent} from './list-user/list-user.component';
import {DetailUserComponent} from './detail-user/detail-user.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {HomeActiviteComponent} from './home-activite/home-activite.component';
import {FormActiviteComponent} from './form-activite/form-activite.component';
import {AccueilComponent} from './accueil/accueil.component';


const ROUTES: Routes = [
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'reclamation', component: ReclamationComponent
  },
  {
    path: 'listUsers', component: ListUserComponent
  },
  {
    path: 'detailUser/:id', component: DetailUserComponent
  },
  {
    path: 'registration/:id', component: RegistrationComponent
  },
  {
    path: 'homeActivite', component: HomeActiviteComponent
  },
  {
    path: 'addActivity', component: FormActiviteComponent
  },
  {
    path: 'accueil', component: AccueilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
