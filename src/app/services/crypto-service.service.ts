import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IConvert } from '../models/IConvert.model';

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

  convert(cant: number, coinFrom: string, coinDest: string): any {
    return this.http.get<IConvert>(`${environment.API_COIN}${this.ROUTE_CONVERT}${cant}&from=${coinFrom}&to=${coinDest}`);
  }
}
