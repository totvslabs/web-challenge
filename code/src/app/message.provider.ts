import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class MessageProvider {

  messagesCount$ = new BehaviorSubject<number>(0);
  postMessage$ = new Subject<Message>();

  constructor() { }

}
