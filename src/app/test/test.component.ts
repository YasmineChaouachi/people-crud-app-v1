import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  name = 'Ragheb Alema';
  imageUrl = 'assets/images/formalab-logo.png';
  booksList = [];

  myCondition = false;
  constructor() {}

  ngOnInit(): void {}

  hello(myname: string) {
    alert('hello ' + myname);
  }
}
