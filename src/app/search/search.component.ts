import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hiddenValue = 'this is hidden value';
  constructor() { }

  ngOnInit() {
  }
  submitQuery(event,formData){
    console.log(event);
    console.log(formData.value);
  }
  searchQueryChange(){
    this.hiddenValue='New hidden value';
  }
}
