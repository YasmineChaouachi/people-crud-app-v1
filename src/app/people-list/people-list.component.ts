import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  /* peopleList = [
    {
      id: 1,
      name: 'Ragheb',
      username: 'Alema',
      phone: '00 2166 8894',
    },
    {
      id: 2,
      name: 'Jihen',
      username: 'Alema',
      phone: '00 2166 8894',
    },
    {
      id: 3,
      name: 'Khaled',
      username: 'Alema',
      phone: '00 2166 8894',
    },
    {
      id: 4,
      name: 'Louay',
      username: 'Alema',
      phone: '00 2166 8894',
    },
    {
      id: 4,
      name: 'Yasmine',
      username: 'Chaouachi',
      phone: '00 2166 8894',
    },
  ];
*/

  peopleList: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.peopleList = result;
      },
      (error) => {
        console.log('error');
      }
    );
  }
  delete(person: any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);
  }
}
