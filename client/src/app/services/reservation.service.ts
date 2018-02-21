import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ReservationService {

  options;
  domain = this.authService.domain;

  constructor( private authService: AuthService, private http: Http) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();

    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type' : 'application/json',
        'authorization' : this.authService.authToken,
      })
    });
  }

  newReservation(reservation) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + '/reservations/newReservation', reservation, this.options).map(res => res.json());
  }

}
