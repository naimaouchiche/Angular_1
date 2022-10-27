import { Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'developer', component: DeveloperComponent},
];

export { ROUTES };