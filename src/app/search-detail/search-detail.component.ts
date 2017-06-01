import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[VideoService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub:any;
  private request:any;
  query:string;
  videoList:[any];
  constructor(private route:ActivatedRoute,private _vedio:VideoService) { }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params.q);
      this.query = params.q
      this.request = this._vedio.searchVideos(this.query).subscribe(data=>{
        console.log(Object.keys(data).length);
        if(Object.keys(data).length>0){
          console.log("data");
          console.log(data);

            this.videoList = data as [any];
        }

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
