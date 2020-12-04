import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageProvider } from 'src/app/message.provider';
import { QueryServices } from 'src/app/services/query.services';

@Component({
  selector: 'app-post-message',
  templateUrl: 'post-message.component.html',
  styleUrls: ['post-message.component.scss']
})
export class PostMessageComponent implements OnInit {

  isOpen: boolean;
  message: Message;

  private subscriptions = new Subscription();

  constructor(
    private messageProvider: MessageProvider,
    private queryServices: QueryServices
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.messageProvider.postMessage$.subscribe(message => {
        this.message = message;
        this.isOpen = true;
      })
    );
  }
}
