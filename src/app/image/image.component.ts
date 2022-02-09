import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  text : any = "88%"
  perc : any = "88"
  urlend:any
  imageSection:any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private httpClient: HttpClient){

      // this.router.events.subscribe(
      //   (event: any) => {
      //     if(event instanceof NavigationEnd) {
      //        this.urlend = event.url
      //       console.log(this.urlend);

      //       if(this.urlend.includes('/?id=')){
      //         this.imageSection = true;
      //         let id = this.urlend.split('=')[1]
      //         this.router.navigate(['image',id])
      //       }
      //     }
      //   });
        

        let id = this.activatedRoute.snapshot.params
        console.log(id);
        
  }
  ngOnInit(): void {
  }

}
