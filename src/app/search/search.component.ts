import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hiddenValue = 'this is hidden value';
  constructor(private route:Router) { }
  @Input()
  passedQuery:string;


  
  searchQuery:string;


  ngOnInit() {
    console.log(this.passedQuery);
    if(this.passedQuery){
      this.searchQuery=this.passedQuery;
    }
  }
  submitQuery(event,formData){
    console.log(event);
    console.log(formData.value);
    let searchQuery = formData.value['searchQuery'];
    if(searchQuery){
        this.route.navigate(['/search',{q:searchQuery}]);
    }
  }
  searchQueryChange(){
    this.hiddenValue='New hidden value';
  }
}
