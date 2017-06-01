import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {Http } from '@angular/http'
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers:[VideoService]
})
export class VideoDetailComponent implements OnInit,OnDestroy {
  private routeSub:any;
  id:number;
  private request:any;
  videoObj:VideoItem;
  title:string;
  text:string;

  constructor(private route:ActivatedRoute,private _vedio:VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(params.id);
      console.log(this.id);
      console.log(window);
      this.request = this._vedio.getInfo(this.id).subscribe(data=>{
        console.log("details");
        console.log(data);
        this.videoObj = data as VideoItem;

        // data.vlist.filter(item=>{
        //   // console.log(item);
        //   if(item.id == this.id){
        //     this.videoObj = item;
        //   }
        // })
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
