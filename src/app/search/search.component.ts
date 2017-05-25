import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hiddenValue = 'this is hidden value';
  constructor(private route:Router) { }

  ngOnInit() {
  }
  submitQuery(event,formData){
    console.log(event);
    console.log(formData.value);
    let query = formData.value['searchQuery'];
    if(query){
        this.route.navigate(['/search',{q:query}]);
    }
  }
  searchQueryChange(){
    this.hiddenValue='New hidden value';
  }
}
