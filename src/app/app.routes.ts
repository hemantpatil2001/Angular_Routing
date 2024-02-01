import { Routes } from '@angular/router';
import { FeaturesComponent } from './admin/features/features.component';
import { PricingComponent } from './admin/pricing/pricing.component';
import { HomeComponent } from './admin/home/home.component';

export const routes: Routes = [{path : 'features', component : FeaturesComponent},
{path : 'home', component : HomeComponent},
{path : 'pricing', component : PricingComponent}];




