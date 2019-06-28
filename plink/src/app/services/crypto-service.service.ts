import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }
  ROUTE_PRICES = `prices?coin=btc`;
  ROUTE_CONVERT = `convert?qty=`;
  COIN_BTC = `btc`;

  getPrices(): any {
    return this.http.get(`${environment.API_COIN}${this.ROUTE_PRICES}`, {});
  }

  convert(cant: number, coinDest: string): any {
    return this.http.get(`${environment.API_COIN}${this.ROUTE_CONVERT}${cant}${'from='}${this.COIN_BTC}${'to='}${coinDest}`);
  }
}
