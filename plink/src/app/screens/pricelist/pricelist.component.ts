import { Component, OnInit } from '@angular/core';
import { IMoney } from 'src/app/models/IMoney.model';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ConvertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {

  moneys: IMoney[] = [];
  visibleMoney: IMoney[] = [];
  ACTUALSIZE = 20;
  INCREMENT = 20;
  constructor(private cryptoService: CryptoService, private convertService: ConvertService) { }

  ngOnInit() {
    this.cryptoService.getPrices()
    .subscribe(result => {
      this.moneys = result.prices;
      this.visibleMoney = this.moneys.slice(0, this.ACTUALSIZE);
    }
    , error => console.log(error));
  }

  convert(currency: string) {
    this.convertService.changeMessage(currency);
  }

  onScroll() {
    this.visibleMoney = this.visibleMoney.concat(this.moneys.slice(this.ACTUALSIZE, this.ACTUALSIZE + this.INCREMENT));
    this.ACTUALSIZE += this.INCREMENT;
  }
}
