import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowMessComponent } from './show-mess/show-mess.component';
import { ShowClientComponent } from './show-client/show-client.component';

const routes: Routes = [
  {path: "message", component: ShowMessComponent},
  {path: "client", component: ShowClientComponent},
  {path: '', redirectTo: "/message", pathMatch: "full"},
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {}
