import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligne-chef',
  templateUrl: './ligne-chef.component.html',
  styleUrls: ['./ligne-chef.component.css']
})
export class LigneChefComponent implements OnInit {

  @Input() ligneInput:any;

  constructor() { }

  ngOnInit() {
  }

}
