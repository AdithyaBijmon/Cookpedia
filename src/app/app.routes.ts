import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { SavedRecipes } from './saved-recipes/saved-recipes';
import { ViewRecipe } from './view-recipe/view-recipe';
import { Pnf } from './pnf/pnf';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const routes: Routes = [
    {path:'',component:Home,title:'Cookpedia - Home'},
    {path:'about',component:About,title:'Cookpedia - About'},
    {path:'contact',component:Contact,title:'Cookpedia - Contact'},
    {path:'login',component:Login,title:'Cookpedia - Login'},
    {path:'register',component:Register,title:'Cookpedia - Register'},
    {path:'profile',component:Profile,title:'Cookpedia - Profile'},
    {path:'recipies',component:Recipes,title:'Cookpedia - Recipies'},
    {path:'saved-recipe',component:SavedRecipes,title:'Cookpedia - User Recipe'},
    {path:'recipe/:id/view',component:ViewRecipe,title:'Cookpedia - Recipe'},
    {path:'**',component:Pnf,title:'Page Not Found'},
];
