import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChoicePCComponent } from './choice-pc/choice-pc.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
        path: 'buypc',
        component: ChoicePCComponent,
        title: 'BuyPC page'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact page'
    }
  ];
  
  export default routeConfig;