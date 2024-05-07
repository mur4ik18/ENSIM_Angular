import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChoicePCComponent } from './choice-pc/choice-pc.component';
import { BuyBasicPcComponent } from './buy-basic-pc/buy-basic-pc.component';
import { BuyAdvancedPcComponent } from './buy-advanced-pc/buy-advanced-pc.component';
import { DetailComponent } from './detail/detail.component';

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
        path: 'buypc/buypc_basic',
        component: BuyBasicPcComponent,
        title: 'BuyPC page'
    },
    {
        path: 'buypc/buypc_advanced',
        component: BuyAdvancedPcComponent,
        title: 'BuyPC page'
    },
    {
      path: 'buypc/buypc_basic/detail/:id',
      component: DetailComponent,
      title: 'Detail page'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact page'
    }
  ];
  
  export default routeConfig;