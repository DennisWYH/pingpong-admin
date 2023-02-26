import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: CardViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }