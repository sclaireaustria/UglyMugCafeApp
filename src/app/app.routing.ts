import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './orders/order/order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ChatComponent } from './chat/chat.app.component';


const routes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'order-list', component: OrderListComponent },
    { path: 'chat', component: ChatComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);