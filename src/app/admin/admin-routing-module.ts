import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminDownloadlist } from './admin-downloadlist/admin-downloadlist';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';
import { AdminAddRecipe } from './admin-add-recipe/admin-add-recipe';

const routes: Routes = [
  {path:'',component:AdminDashboard,title:'Admin Dashboard'},
  {path:'recipe-list',component:AdminRecipelist,title:'Admin - Recipes'},
  {path:'download-list',component:AdminDownloadlist,title:'Admin - Downloads'},
  {path:'user-list',component:AdminUserlist,title:'Admin - Users'},
  {path:'feedback-list',component:AdminFeedbacklist,title:'Admin - Feedbacks'},
  {path:'recipe/add',component:AdminAddRecipe,title:'Admin - Add Recipe'},
  {path:'recipe/:id/edit',component:AdminAddRecipe,title:'Admin - Edit Recipe'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
