import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../global-constants';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{NgxUiLoaderService} from'ngx-ui-loader';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  farmerForm!: FormGroup;
  actionBtn: string = "Save"
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.farmerForm = this.formBuilder.group({
      farmerName: ['', [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      farmerMail: ['', [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      productName: ['', [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      productCategory: ['', [Validators.required]],
      productQuantity: ['', [Validators.required]],
      productBasePrice: ['', [Validators.required]],
      productStatus: []
    });
    // console.log("edit:",this.editData);
    if (this.editData) {
      this.actionBtn = "Update";
      this.farmerForm.controls['farmerName'].setValue(this.editData.farmerName);
      this.farmerForm.controls['farmerMail'].setValue(this.editData.farmerMailId);
      this.farmerForm.controls['productName'].setValue(this.editData.productName);
      this.farmerForm.controls['productCategory'].setValue(this.editData.productCategory);
      this.farmerForm.controls['productQuantity'].setValue(this.editData.productQuantity);
      this.farmerForm.controls['productBasePrice'].setValue(this.editData.productBasePrice);
    }
  }

  addProduct() {
    if (!this.editData) {
      this.ngxService.start();
      console.log('add product save is clicked');
      console.log('form values', this.farmerForm.value);
      var formData = this.farmerForm.value;
      var data = {
        farmerName: formData.farmerName,
        farmerMailId: formData.farmerMail,
        productName: formData.productName,
        productCategory: formData.productCategory,
        productQuantity: formData.productQuantity,
        productBasePrice: formData.productBasePrice,
        status: formData.productStatus
      }
      if (this.farmerForm.valid) {
        this.api.addProductInfoByFarmer_asp(data).subscribe({
          next: (response: any) => {
            this.ngxService.stop();
            alert("product added successfully");
            this.farmerForm.reset();
            this.dialogRef.close('save');
          },
          error: (error: any) => {
            alert("error in adding product");
          }
        })
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    // console.log("edit here");
    var formData = this.farmerForm.value;
    var data = {
      id: this.editData.id,
      farmerName: formData.farmerName,
      farmerMailId: formData.farmerMail,
      productName: formData.productName,
      productCategory: formData.productCategory,
      productQuantity: formData.productQuantity,
      productBasePrice: formData.productBasePrice,
      status: formData.productStatus
    }
    console.log("Edited Product Details:",data);
    this.api.updateProductInfoByFarmer_asp(data,this.editData.id).subscribe({
      next: (response: any) => {
        alert("product updated successfully");
        this.farmerForm.reset(); 
        this.dialogRef.close('update');
      },
      error: (error: any) => { 
        alert("error in updating product");
      }
    })
  }

}
