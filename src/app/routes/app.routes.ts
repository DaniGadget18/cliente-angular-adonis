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
import { ReadShopComponent } from '../pages/shops/read-shop/read-shop.component';
import { DeleteShopComponent } from '../pages/shops/delete-shop/delete-shop.component';
import { CreateShopComponent } from '../pages/shops/create-shop/create-shop.component';
import { UpdateShopComponent } from '../pages/shops/update-shop/update-shop.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login/register', component: RegisterUserComponent },
    { path: 'songs', component: SongsComponent, canActivate: [AuthGuard] },
    { path: 'song/:id', component: SongComponent, canActivate: [AuthGuard] },
    { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
    { path: 'games/register', component: GameComponent, canActivate: [AuthGuard] },
    { path: 'games/edit/:id', component: GameeditComponent, canActivate: [AuthGuard] },
    { path: 'shops', component: ReadShopComponent, canActivate: [AuthGuard] },
    { path: 'shops/dele', component: DeleteShopComponent, canActivate: [AuthGuard] },
    { path: 'shops/create', component: CreateShopComponent, canActivate: [AuthGuard] },
    { path: 'shops/update', component: UpdateShopComponent, canActivate: [AuthGuard] },

    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: '**', pathMatch: 'full', redirectTo: '/home', canActivate: [AuthGuard]},
    {path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]}
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
