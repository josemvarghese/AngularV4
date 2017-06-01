import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'assets/json/videos.json' // http://www.yourdomain.com/api/videos/
@Injectable()
export class VideoService {
  constructor(private http: Http) { }

    list(){
        return this.http.get(endpoint)
                .map(response=>response.json())
                .catch(this.handleError)
    }
    getInfo(id){
      return this.http.get(endpoint)
              .map(response=>{
                let data = response.json().vlist.filter(item=>{
                  // console.log(item);
                  if(item.id == id){
                    return item;
                  }
                })
                console.log("service");
                console.log(data);
                return data[0];
              })
              .catch(this.handleError)
    }
    searchVideos(query){
      let data = [];

      return this.http.get(endpoint)
              .map(response=>{
                console.log(query);
                let req = response.json().vlist.filter(item=>{
                // console.log("query");
                // console.log(query);
                console.log('title--'+item.title.indexOf(query));
                  if(item.title.indexOf(query)>=0){
                    console.log("inside query");
                    console.log(query);
                      data.push(item)
                  }
                })
                console.log("service");
                console.log(data);
                return data;
              })
              .catch(this.handleError)
    }
    private handleError(error:any, caught:any): any{
      console.log(error, caught)
    }
}
