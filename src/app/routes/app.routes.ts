import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { HomeComponent } from '../pages/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { SongsComponent } from '../pages/songs/songs.component';
import { SongComponent } from '../pages/song/song.component';
import { GamesComponent } from '../pages/games/games.component';
import { GameComponent } from '../pages/game/game.component';
import { GameeditComponent } from '../pages/gameedit/gameedit.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login/register', component: RegisterUserComponent },
    { path: 'songs', component: SongsComponent },
    { path: 'song/:id', component: SongComponent },
    { path: 'games', component: GamesComponent },
    { path: 'games/register', component: GameComponent },
    { path: 'games/edit/:id', component: GameeditComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: '**', pathMatch: 'full', redirectTo: '/home'},
    {path: '',   redirectTo: '/home', pathMatch: 'full'}
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
