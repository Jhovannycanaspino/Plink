import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CryptoService } from './crypto-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService  implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const cryptoService = this.injector.get(CryptoService);
    const headersReq = req.clone({
        setHeaders : {
          'X-RapidAPI-Key': 'cef438bc76msh24b12a46eca4afap1cf16djsnad620e526fdb',
          'X-RapidAPI-Host': 'bravenewcoin-v1.p.rapidapi.com'
        }
    });
    return next.handle(headersReq);
    }
}
