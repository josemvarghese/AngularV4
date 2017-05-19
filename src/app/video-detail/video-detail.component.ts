import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  private routeSub:any;
  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(params.id);
      console.log(this.id);
      console.log(window);


    })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

}
