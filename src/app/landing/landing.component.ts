import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public donorCount: number = 0;

  public maxDonation: number = 1000;

  public amountDonated: number = 0;

  public donationForm: FormGroup;

  constructor(
    public _fb: FormBuilder
  ) { }

  ngOnInit() {

    this.donationForm = this.createDonationForm();

    this.amountDonated += this.donationForm.controls.amount.value;

  }

  createDonationForm() {
    return this._fb.group({
      amount: new FormControl(0, [<any>Validators.required, <any>Validators.pattern(/^[0-9]*$/)])
    });
  }

  onSubmit() {

    this.donorCount++;

    this.amountDonated += parseInt(this.donationForm.controls.amount.value, 10);

    this.donationForm.controls.amount.setValue(0);

    console.log(this.amountDonated, this.donorCount);

  }


  /**
   * Calculate percentage of donation done
   *
   * @param {number} amount
   */
  calculateDonationPercent(amount: number, totalAmount: number) {

    return (amount * 100) / totalAmount;

  }

}
