import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findslot',
  templateUrl: './findslot.component.html',
  styleUrls: ['./findslot.component.scss']
})
export class FindslotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert("in progress"); //need to do api call from here
  }

}
