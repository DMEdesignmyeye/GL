import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-area7',
  templateUrl: './area7.component.html',
  styleUrls: ['./area7.component.scss']
})
export class Area7Component implements OnInit {
    data : Date = new Date();

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-page');
    navbar.classList.add('narvar-transparent');
  }
  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-page');
    navbar.classList.remove('navbar-transparent');
  }
}
