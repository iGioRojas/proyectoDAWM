import {Component, OnInit, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Información adicional</h4>
      <button type="button" class=" btn btn-outline-dark" (click)="activeModal.dismiss('Cross click')">
        <span>X</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hola cliente, el mecánico ha dicho lo siguiente:</p>
      <p>{{name}}</p>
      <p><strong>Fecha y hora: </strong>2/11/2021 - 13:00</p>
      <p><strong>Mecánico: </strong>Joel Choez</p>
    </div>
    <div>
      <img  class = "w-100 p-2" src="assets/img/amortiguador.jpg" alt="amortiguador">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ModalComponent implements OnInit {
  @Input() name="";
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'Los amortiguadores estaban muy gastados, patrón.';
  }
}
