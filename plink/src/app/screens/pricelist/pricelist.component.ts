import { Component, OnInit } from '@angular/core';
import { IMoney } from 'src/app/models/IMoney.model';
import { CryptoService } from 'src/app/services/crypto-service.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {

  moneys: IMoney;
  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getPrices()
    .subscribe(result => {
      this.moneys = result.prices;
    }
    , error => console.log(error));
  }

  convert() {
    console.log('apretado');
  }
}
