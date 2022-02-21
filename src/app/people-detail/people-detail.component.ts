import { Component, OnInit } from '@angular/core';
import { PEOPLES } from '../mock-people';
import { People } from '../people';



@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  peoples = PEOPLES;
  selectedpeople?: People;
//name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(people: People): void {
    this.selectedpeople = people;
  //this.name = people.name;
  }

  
 
}
