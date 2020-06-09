import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

//servicios
import { ApiService } from './services/api.service';
import { SongComponent } from './pages/song/song.component';
import { SongsComponent } from './pages/songs/songs.component';
import { GamesComponent } from './pages/games/games.component';

//rutas
import { AppRoutingModule } from './routes/app.routes';
import { GameComponent } from './pages/game/game.component';
import { GameeditComponent } from './pages/gameedit/gameedit.component';
import { ReadShopComponent } from './pages/shops/read-shop/read-shop.component';
import { UpdateShopComponent } from './pages/shops/update-shop/update-shop.component';
import { CreateShopComponent } from './pages/shops/create-shop/create-shop.component';
import { DeleteShopComponent } from './pages/shops/delete-shop/delete-shop.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterUserComponent,
    HomeComponent,
    SongComponent,
    SongsComponent,
    GamesComponent,
    GameComponent,
    GameeditComponent,
    ReadShopComponent,
    UpdateShopComponent,
    CreateShopComponent,
    DeleteShopComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
