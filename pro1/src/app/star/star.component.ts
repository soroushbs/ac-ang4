import { Component, OnInit ,Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating : number;
  numstar : Array<number> = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.numstar.push(this.rating);
    console.log("numstar:"+ this.numstar);
  }

}
