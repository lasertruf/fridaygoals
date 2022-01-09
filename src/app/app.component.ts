import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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

ngOnInit(): void {
  console.log(this.todaymillis);
  
    // console.log(this.day,this.date);
    // console.log(this.today);
    // console.log(this.month);
    // console.log(this.year);
}

FG_Text(){

  // this.GH_Title = "FRIDAY GOALS | " + this.name + " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  this.GH_Title =  " : " + this.date +" " + this.months[this.month] + " - " + (this.fridaydate) + " " + this.months[this.fridaymonth] + " " + this.year.toString().slice(2,4)
  console.log(this.GH_Title);

  for (let index = 0; index < 5; index++) {
    let body = this.days[this.day] +" "+ this.date + " " + this.months[this.month] + " :" 
    this.GH_Body.push(body)
    this.todaymillis += this.MILLIS_IN_DAY
    this.date = new Date(this.todaymillis).getDate()
    this.day = new Date(this.todaymillis).getDay()
    this.month = new Date(this.todaymillis).getMonth()
  }
  console.log(this.GH_Body);
}

showFG(){

//  this.showfg =  this.showfg ? false : true;
this.showfg = true;

}

dateChange(){
  console.log("datechanged");
let val =  this.datepicked.value()
console.log(val);
this.FG_Text()


}


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${type}: ${event.value}`);
  this.showfg = true;
  let selected_date : any= (event.value)
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

setName(){
this.name = "JAYANT"
this.todaymillis = new Date().getTime()
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

}
