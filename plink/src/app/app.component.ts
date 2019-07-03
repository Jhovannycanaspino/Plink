import { Component, OnInit } from '@angular/core';
import { CryptoService } from './services/crypto-service.service';
import { IMoney } from './models/IMoney.model';
import { IConvert } from './models/IConvert.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'plink';
  prices: IMoney [];
  convert: IConvert;
  tabIndex = new FormControl();
  constructor(private cryptoService: CryptoService) {

  }

  ngOnInit(): void {
    console.log(this.tabIndex);
  }

}
