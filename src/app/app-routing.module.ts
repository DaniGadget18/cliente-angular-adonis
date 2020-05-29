import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './pages/song/song.component';
import { SongsComponent } from './pages/songs/songs.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'songs', component: SongsComponent },
    { path: 'song/:id', component: SongComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/register', component: RegisterUserComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: '**', pathMatch: 'full', redirectTo: '/'},
    {path: '',   redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes  )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
