import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-area8',
  templateUrl: './area8.component.html',
  styleUrls: ['./area8.component.scss']
})
export class Area8Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      
  }
}
