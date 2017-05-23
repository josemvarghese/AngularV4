import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
   preventNormal(event:any,image:any){
     if(!image.prevented){
         event.preventDefault();
         console.log(event);
         console.log(image.prevented);
         console.log(window);
        //  window.location="image.href";
         console.log(image.children[0].src  );
        //  image.setAttribute('href','/videos')
          // alert("working ");
          image.prevented=true;
          this.router.navigate(['./videos']);
    }
  }
}
