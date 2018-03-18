import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieHomeComponent } from './movie-home.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MovieHomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: ':id', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [MovieHomeComponent, MovieDetailsComponent, FavoritesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MovieModule {}
