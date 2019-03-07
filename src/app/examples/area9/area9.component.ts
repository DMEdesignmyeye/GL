import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-area9',
  templateUrl: './area9.component.html',
  styleUrls: ['./area9.component.scss']
})
export class Area9Component implements OnInit, OnDestroy {

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
