import { Component, OnInit } from '@angular/core';
import { QueryServices } from '../../services/query.services';
import {Message, MessageUser} from '../../model/message';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  users: MessageUser[];

  constructor(
    private queryServices: QueryServices
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.queryServices.getMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });

    this.queryServices.getUsers().subscribe((users: MessageUser[]) => {
      this.users = users;
    });
  }
}
