import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  // Exporting variables to the HTML page.
  messageClass;
  message;
  newReservation = false;
  loadingReservations = false;

  constructor() { }

  newReservationForm() {
    this.newReservation = true;
  }

  reloadReservations() {
    this.loadingReservations = true;

    // Retrieves all reservations.
    setTimeout(() => {
      this.loadingReservations = false;
    }, 4000);
  }

  draftComment() {

  }

  ngOnInit() {
  }

}
