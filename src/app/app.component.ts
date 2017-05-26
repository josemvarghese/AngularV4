import { Component ,OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'app works!';
  paragarapgh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  private routeSub:any;
  query:string;
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params.q);
      this.query = params.q
    })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
