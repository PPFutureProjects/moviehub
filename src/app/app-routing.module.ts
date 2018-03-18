

//modules
import {Routes , RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
//components
import { LoginComponent } from './auth/login/login.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
//guards
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'movies' , loadChildren: './movie-home/movie.module#MovieModule', canLoad: [AuthGuard]  },
  { path: 'login' , component: LoginComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {

}
