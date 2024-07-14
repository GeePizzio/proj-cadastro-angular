import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileListComponent } from "./pages/profiles/profile-list/profile-list.component";
import { ProfileCreateUpdateComponent } from "./pages/profiles/profile-create-update/profile-create-update.component";

const routes: Routes = [
    {
    path: 'home', component: HomeComponent
    },
    {
    path: 'profile', component: ProfileListComponent
    },
    {
    path: 'profile/create', component: ProfileCreateUpdateComponent
    }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}