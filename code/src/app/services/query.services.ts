import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageProvider } from '../message.provider';
import { Message } from '../model/message';

@Injectable({ providedIn: 'root' })
export class QueryServices {

  constructor(
    private httpClient: HttpClient,
    private messageProvider: MessageProvider
  ) {}

  getMessages() {
    return this.httpClient.get('/api/messages').pipe(map(
      (messages: []) => {
        this.messageProvider.messagesCount$.next(messages?.length);
        return messages;
      }
    ));
  }

  saveMessage(message: Message) {
    return this.httpClient.post('/api/message', message);
  }

  getUsers() {
    return this.httpClient.get('/api/users');
  }

}
