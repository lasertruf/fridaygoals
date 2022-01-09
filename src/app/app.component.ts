import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Friday Goals';
  todaymillis = new Date().getTime()
  today  = new Date(this.todaymillis).toLocaleDateString("en-IN")
  day = new Date(this.todaymillis).getDay()
  date = new Date(this.todaymillis).getDate()
  month = new Date(this.todaymillis).getMonth()
  year = new Date(this.todaymillis).getFullYear()
  months = ['JAN','FEB','MAR','APR']
  days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
  GH_Title = ""
  GH_Body : any = []
  showfg: boolean = false;
  task = "- [ ] NA"
  MILLIS_IN_DAY = 86400000
  fridaydate = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDate()
  fridayday = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDay()
  fridaymonth = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getMonth()
  datepicked = new FormControl()
  events: string[] = [];
  clickable: boolean = false;
  name:any = "";
  titletext:any
  titletextend:any
  bodytext:any = []
  dateToPass = new Date()
  selectedDate:any = new Date().getTime()

  constructor(private clipboardService: ClipboardService){

  }

ngOnInit(): void {
  console.log(this.todaymillis);
  
    // console.log(this.day,this.date);
    // console.log(this.today);
    // console.log(this.month);
    // console.log(this.year);
    this.FG_Text()
}

FG_Text(){

  // this.GH_Title = "FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  this.GH_Title =  " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  console.log(this.GH_Title);

  if(this.name=='JAYANT'){
  this.titletext = ":dart FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  this.titletextend = " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
 
}else{
  this.titletext = "FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  this.titletextend = " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
 }

  for (let index = 0; index < 5; index++) {
    let body = this.days[this.day] +" "+ this.date + " " + this.months[this.month] + " :" 
    this.GH_Body.push(body)
    this.todaymillis += this.MILLIS_IN_DAY
    this.date = new Date(this.todaymillis).getDate()
    this.day = new Date(this.todaymillis).getDay()
    this.month = new Date(this.todaymillis).getMonth()
  }
  console.log(this.GH_Body);
  let obj:any="";
  this.bodytext=[]
  if(this.name!='JAYANT'){
    obj = ""
    for (let index = 0; index < this.GH_Body.length; index++) {
      const element = this.GH_Body[index];
      obj += "### " + element + "\n" + this.task + "\n"
    }
    this.bodytext.push(obj)
  }else{
    obj = ""
    for (let index = 0; index < this.GH_Body.length; index++) {
      const element = this.GH_Body[index];
      obj += "### " + element + "\n" + "### Completed:" + "\n" + "![](https://progress-bar.dev/0/)\n" + this.task + "\n"
    }
    this.bodytext.push(obj)
  }

}

showFG(){
//  this.showfg =  this.showfg ? false : true;
this.showfg = true;

}

dateChange(){
  console.log("datechanged");
let val =  this.datepicked.value()
console.log(val);
this.GH_Body=[]
this.FG_Text()
}


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
  this.showfg = true;
  let selected_date : any= (event.value)
  selected_date = new Date(selected_date).getTime()
  this.selectedDate = selected_date
  this.todaymillis = selected_date
  this.clickable = true
  this.day = new Date(this.todaymillis).getDay()
  this.date = new Date(this.todaymillis).getDate()
  this.month = new Date(this.todaymillis).getMonth()
  this.year = new Date(this.todaymillis).getFullYear()
  this.fridaydate = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDate()
  this.fridayday = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDay()
  this.fridaymonth = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getMonth()
  this.GH_Body = []
  this.FG_Text()
  
}

setName(){
this.name = "JAYANT"
this.todaymillis = new Date().getTime()
this.selectedDate = new Date().getTime()
this.dateToPass = new Date()
this.datepicked.setValue(this.todaymillis)
this.clickable = true
this.day = new Date(this.todaymillis).getDay()
this.date = new Date(this.todaymillis).getDate()
this.month = new Date(this.todaymillis).getMonth()
this.year = new Date(this.todaymillis).getFullYear()
this.fridaydate = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDate()
this.fridayday = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDay()
this.fridaymonth = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getMonth()
this.GH_Body = []
this.showfg = true;
this.FG_Text()

}

setothername(){
  this.showfg = true;
  let selected_date : any= this.selectedDate
  selected_date = new Date(selected_date).getTime()
  this.todaymillis = selected_date
  this.clickable = true
  this.day = new Date(this.todaymillis).getDay()
  this.date = new Date(this.todaymillis).getDate()
  this.month = new Date(this.todaymillis).getMonth()
  this.year = new Date(this.todaymillis).getFullYear()
  this.fridaydate = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDate()
  this.fridayday = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getDay()
  this.fridaymonth = new Date(4*this.MILLIS_IN_DAY + this.todaymillis).getMonth()
  this.GH_Body = []
  this.FG_Text()
  
}

copyTitle(event:any){
  let text = event
  // this.titletext1 = "FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  console.log(this.titletext);
  this.clipboardService.copyFromContent(this.titletext)
}

copyBody(event:any){
  let text = event
  // this.titletext1 = "FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  console.log(this.bodytext);
  this.clipboardService.copyFromContent(this.bodytext)  
}

nameInput(){
  this.showfg=true

  let pipe = new UpperCasePipe()
  this.name = pipe.transform(this.name)
  if(this.name=='JAYANT'){
    this.titletext = ":dart FRIDAY GOALS | "+ this.name + this.titletextend
    // this.setName()
  }else{
    this.titletext = "FRIDAY GOALS | "+ this.name + this.titletextend
  }
  this.setothername()

}



}
