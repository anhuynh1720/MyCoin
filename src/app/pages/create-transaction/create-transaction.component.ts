import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'simple-blockchain-implement';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  public newTx;
  public walletKey;

  constructor(private blockChainService: BlockchainService) {
    this.walletKey = this.blockChainService.walletKeys[0];

  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);
    this.blockChainService.addTransaction(this.newTx);
    this.newTx = new Transaction();
  }

}
