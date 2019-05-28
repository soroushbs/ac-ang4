import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { IComment } from '../icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('cminput') commntvalue : ElementRef;

  commentitem:string;
  nmcomment : IComment[] = [];
  nor:number = 0;
  @Output() starvalue = new EventEmitter;
  ratingcountnum = 0;
  constructor() { }

  ngOnInit() {
  }

  submitcmnt(){
    let i : IComment={
      comment:this.commntvalue.nativeElement.value,
      like:0,
      dislike:0,
      star:0,
      numberOfReviews:0
    }
    this.nmcomment.push(i);
    this.nor = this.nor+1;
    this.starvalue.emit();
    console.log();

  }
  ratingcount(i: IComment,rcv:HTMLInputElement){
      i.numberOfReviews++;
      this.ratingcountnum =parseInt(rcv.value);
  }
}
