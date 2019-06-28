import { Component, OnInit } from '@angular/core';
import { CryptoService } from './services/crypto-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'plink';

  constructor(private cryptoService: CryptoService) {

  }

  ngOnInit(): void {
    console.log('consultando');
      this.cryptoService.getPrices().subscribe(
        result => { console.log(result)},
        error => console.log(error)
      );

  }

}
