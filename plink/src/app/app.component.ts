import { Component, OnInit } from '@angular/core';
import { CryptoService } from './services/crypto-service.service';
import { IMoney } from './models/IMoney.model';
import { IConvert } from './models/IConvert.model';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConvertService } from './services/convert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tabIndex = new FormControl();
  constructor(private translate: TranslateService, private convertService: ConvertService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.convertService.customMessage.subscribe(
      result=> {
        this.tabIndex.setValue(0);
      }
    );
  }

}
