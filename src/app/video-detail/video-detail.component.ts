import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http } from '@angular/http'

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit,OnDestroy {
  private routeSub:any;
  id:number;
  private request:any;
  videoObj:any;
  title:string;
  text:string;

  constructor(private route:ActivatedRoute,private http:Http) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(params.id);
      console.log(this.id);
      console.log(window);
      this.request = this.http.get('assets/json/videos.json').subscribe(data=>{
        data.json().vlist.filter(item=>{
          // console.log(item);
          if(item.id == this.id){
            this.videoObj = item;
          }
        })
      })

    })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.request.unsubscribe();
  }
  getEmbedUrl(item){
    return  'https://www.youtube.com/embed/'+item.embed;
  }
}
