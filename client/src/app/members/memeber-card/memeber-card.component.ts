import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-memeber-card',
  templateUrl: './memeber-card.component.html',
  styleUrls: ['./memeber-card.component.css']
})
export class MemeberCardComponent implements OnInit {
  @Input() member: Member;
  
  constructor() { }

  ngOnInit(): void {
  }

}
