import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NumberValidators } from 'src/app/components/number.validatos';
import { IMoney } from 'src/app/models/IMoney.model';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ConvertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  cForm: any;
  amountValue = '0.00';
  from: string;
  to = 'USD';
  quantity = 0;
  moneys: IMoney[] = [];
  constructor(fb: FormBuilder, private cryptoService: CryptoService, private convertService: ConvertService) {
    this.cForm = fb.group({
      amount: [null, Validators.compose([Validators.required, Validators.min(0), NumberValidators.minimum(1)])],
      from: [null, Validators.required],
      to: [null, Validators.required],
      change: [null]
    });

  }

  ngOnInit() {
    this.convertService.customMessage.subscribe(result => {
      this.amountValue = '0';
      this.from = 'BTC';
      this.to = result;
      this.convert(0, this.from, result);
    });

    this.cryptoService.getPrices()
    .subscribe(result => {
      this.moneys = result.prices;
      this.moneys.push(
        {
          id_currency: 'BTC',
          name: 'Bitcoin',
          price: 1,
          crypto: 1
        }
      );
    } );
    this.from =  'BTC';
    this.moneys.sort();
  }

  convert(amount: number, from: string, to: string) {
    this.cryptoService.convert(amount, from, to)
    .subscribe(result => {
      if (result.success) {
        this.quantity = result.to_quantity;
      }
    });
  }

  revert() {
    const from =  this.from;
    const to = this.to;
    const amount = this.cForm.get('amount').value;
    this.cForm.get('from').setValue(to);
    this.cForm.get('to').setValue(from);
    this.convert(amount, this.cForm.get('from').value, this.cForm.get('to').value);
  }

  calculate() {
    const from = this.cForm.get('from').value;
    const to = this.cForm.get('to').value;
    const amount = this.cForm.get('amount').value;
    this.convert(amount, from, to);
  }
}
