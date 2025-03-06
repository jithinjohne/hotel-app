import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    const savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

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
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(r => r.id === id);
    if (index === -1) {
      throw new Error(`Reservation with id ${updatedReservation.id} not found`);
    }
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(r => r.id === id);
    if (index === -1) {
      throw new Error(`Reservation with id ${id} not found`);
    }
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
