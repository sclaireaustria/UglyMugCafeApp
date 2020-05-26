import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './orders/order/order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ChatComponent } from './chat/chat.app.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { OrderQueueComponent } from './orders/order-queue/order-queue.component';


const routes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'order-list', component: OrderListComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'order-form', component: OrderFormComponent },
    { path: 'order-queue', component: OrderQueueComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);