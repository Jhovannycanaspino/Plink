import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  private message = new Subject<string>();
  public customMessage = this.message.asObservable();
  constructor() { }

  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
}
