import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../global-constants';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component'

@Component({
  selector: 'app-bid-now-dialog',
  templateUrl: './bid-now-dialog.component.html',
  styleUrls: ['./bid-now-dialog.component.css']
})
export class BidNowDialogComponent {

  consumerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public item:any,
    private dialogRef: MatDialogRef<BidNowDialogComponent>) { }

  ngOnInit() {
    let bidPrice = this.item.product_base_price; //100
    this.consumerForm = this.formBuilder.group({
      id:this.item.id,
      consumerName:['',[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      consumerMail:['',[Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      consumerBidPrice:['',[Validators.required,Validators.min(bidPrice)]]
    });

    // console.log('row value details in bid now comp:',this.item);
    // console.log('id',this.item.id,'base price',this.item.product_base_price)
  }

  confirmBid() {
    var consumerData = this.consumerForm.value;
    var data = {
      consumer_name: consumerData.consumerName,
      consumer_mail_id: consumerData.consumerMail,
      farmer_id: this.item.id,
      bidded_price: consumerData.consumerBidPrice
    }
    // console.log('bidprice',data.bidded_price);

    if (this.consumerForm.valid) {
      this.api.consumerAdd(data).subscribe({
        next: (response: any) => {
          console.log('subcribed');
          alert("consumer bidded successfully");
          this.consumerForm.reset();
          this.dialogRef.close('bidded');
        },
        error: (error: any) => {
          alert("error in bidding the product");
        }
      })
    }
  }

}
