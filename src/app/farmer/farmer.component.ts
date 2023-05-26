import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { ApiService } from '../services/api.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { AcceptRejectComponent } from '../accept-reject/accept-reject.component';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';




@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css'],
  providers: [ConfirmationService, MessageService]

})
export class FarmerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'farmerName', 'farmerMail', 'productName', 'productCategory', 'productQuantity', 'productBasedPrice', 'productStatus', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns1: string[] = ['farmerName', 'farmerMail', 'productName', 'productCategory', 'productQuantity', 'productBasePrice', 'consumerName', 'consumerMailID', 'biddedPrice', 'action'];
  dataSource1!: MatTableDataSource<any>;
  @ViewChild('paginatorFirst') paginatorFirst!: MatPaginator;
  @ViewChild('historyTb') historyTb = new MatSort();

  displayedColumns2: string[] = ['farmerName', 'farmerMail', 'noOfProducts'];
  dataSource2!: MatTableDataSource<any>;
  @ViewChild('paginatorSecond') paginatorSecond!: MatPaginator;
  @ViewChild('farmerTb') farmerTb = new MatSort();

  constructor(private dialog: MatDialog,
    private api: ApiService,
    private ngxService: NgxUiLoaderService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }


  ngOnInit() {
    this.getProductList();
    this.getHistory();
    this.farmerInfo();
  }
  // functions in tab 1
  // open add dialog to add product
  loader() {
    this.ngxService.start();
    this.ngxService.stop();
  }
  openDialog() {
    console.log("Farmer's portal: add product is cliked & add product dialog is opened");
    this.dialog.open(AddDialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getProductList();
      }
    });
  }

  // api calling for get all product

  getProductList() {
    this.api.getFarmProductList_asp().subscribe({
      next: (response: any) => {
        console.log("farmer's portal: product Table", response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        alert("Error in Farmer's Portal: while fetching Product Table");
      }
    })
  }

  // edit(update) & del product
  editProduct(row: any) {
    console.log("Farmer's Portal: To edit the product, data before editing:", row)
    this.dialog.open(AddDialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      // console.log('product edited:',val)
      if (val === 'update') {
        this.getProductList();
      }
    })
  }

  deleteProduct(id: number) {
    console.log("Farmer's Portal: deleted the row of the selected ID:", id)
    this.api.deleteProductInfoByFarmer_asp(id).subscribe({
      next: (response: any) => {
        alert('deleted succuessfully')
      },
      error: (error: any) => {
        alert('error delecting the product')
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // functions in tab 2

  // get history of products that are bidded

  getHistory() {
    this.api.getFarmBiddedProduct_asp().subscribe({
      next: (response: any) => {
        console.log("Farmer's Portal: Bidded Products List", response);
        this.dataSource1 = new MatTableDataSource(response);
        this.dataSource1.paginator = this.paginatorFirst;
        this.dataSource1.sort = this.historyTb;
      },
      error: (error: any) => {
        alert("Error in Farmer's Portal: while fetching Bidded Product List");
      }
    })
  }

  applyFilter1(event1: Event) {
    const filterValue1 = (event1.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue1.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  // accept/reject the bidding

  confirm1(row: any) {
    console.log('kanthi', row.farmer_id);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  confirm2(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }

  // functions in tab 3

  farmerInfo() {
    this.api.getFarmProfile_asp().subscribe({
      next: (response: any) => {
        console.log("Framer's Portal: Farmer's Profile Table", response); 
        this.dataSource2 = new MatTableDataSource(response);
        this.dataSource2.paginator = this.paginatorSecond;
        this.dataSource2.sort = this.farmerTb;
      },
      error: (error: any) => {
        alert("Error in Farmer's Portal: while fetching Farmer's Profile Table")
      }
    })
  }

  applyFilter2(event1: Event) {
    const filterValue2 = (event1.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue2.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
}