import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  newsblog: any=[
    {date:"26/01/203",title:"Food1",Description:"Wellcome To Foods1",image:"assets/img/blog/blog_1.png"},
    {date:"27/01/203",title:"Food2",Description:"Wellcome To Foods2",image:"assets/img/blog/blog_2.png"},
    {date:"28/01/203",title:"Food3",Description:"Wellcome To Foods3",image:"assets/img/blog/blog_3.png"},
    {date:"30/01/203",title:"Food4",Description:"Wellcome To Foods4",image:"assets/img/blog/blog_3.png"},
    {date:"31/01/203",title:"Food5",Description:"Wellcome To Foods5",image:"assets/img/blog/blog_1.png"},
    {date:"01/02/203",title:"Food6",Description:"Wellcome To Foods6",image:"assets/img/blog/blog_2.png"}

  ];

  constructor() { }

  ngOnInit() {
  }

}
