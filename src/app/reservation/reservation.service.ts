import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];
  
  //CRUD operations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation {
    const reservation = this.reservations.find(reservation => reservation.id === id);
    if (!reservation) {
      throw new Error(`Reservation with id ${id} not found`);
    }
    return reservation;
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    if (index === -1) {
      throw new Error(`Reservation with id ${reservation.id} not found`);
    }
    this.reservations[index] = reservation;
  }

  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(r => r.id === id);
    if (index === -1) {
      throw new Error(`Reservation with id ${id} not found`);
    }
    this.reservations.splice(index, 1);
  }
}
