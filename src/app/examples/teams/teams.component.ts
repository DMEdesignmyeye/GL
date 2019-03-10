import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare const $: any;
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

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
@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './teams.component.html'
})
export class NgbdModalBasic {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content, type) {
      if (type === 'sm') {
          console.log('aici');
          this.modalService.open(content, { size: 'sm' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }
}
