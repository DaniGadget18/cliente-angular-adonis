import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { HomeComponent } from '../pages/home/home.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login/register', component: RegisterUserComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: '**', pathMatch: 'full', redirectTo: '/'},
    {path: '',   redirectTo: '/', pathMatch: 'full'}
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
