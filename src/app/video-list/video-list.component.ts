import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http } from '@angular/http'
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
    titleName = "videolist";
    someItem1 = "<div> inner HTML</div>";
    someItem2 = "binding text in angular v4";
    todayDate;
    private request:any;
    videoList:[any];

    // videoList = [
    //   {
    //     userId: 1,
    //     id: 1,
    //     title: "sadADS",
    //     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    //     embed:null
    //   },
    //   {
    //     userId: 1,
    //     id: 2,
    //     title: "ADSAdADS",
    //     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    //     embed:`CU4qv7cSnmA`
    //   },
    //   {
    //     userId: 1,
    //     id: 3,
    //     title: "sdafasdfasdfasd",
    //     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    //     embed:`CU1woo3MVgE`
    //
    //   },
    //   {
    //     userId: 1,
    //     id: 4,
    //     title: "jose",
    //     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    //     embed:`CU1woo3MVgE`
    //
    //   },
    //
    // ];
  constructor(private http:Http) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.request = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data.json());
      this.videoList = data.json().vlist;

    })
  }
  ngOnDestroy(){
    this.request.unsubscribe();
  }
  getEmbedUrl(item){
    return  'https://www.youtube.com/embed/'+item.embed;
  }

}
