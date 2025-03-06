import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  
  reservationForm: FormGroup = this.fromBuilder.group({
    checkInDate: ['', Validators.required],
    checkOutDate: ['', Validators.required],
    guestName: ['', Validators.required],
    guestEmail: ['', Validators.required],
    roomNumber: ['', Validators.required]
  });

  constructor(private fromBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.reservationForm = this.fromBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', Validators.required],
      roomNumber: ['', Validators.required],
    });
  }



  onSubmit() {
    if(this.reservationForm.valid) {
      console.warn(this.reservationForm.value);
    }
  }

}
