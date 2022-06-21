import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
