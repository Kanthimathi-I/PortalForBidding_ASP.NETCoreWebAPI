import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { ApiService } from '../services/api.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BidNowDialogComponent } from '../bid-now-dialog/bid-now-dialog.component';
import{NgxUiLoaderService}from 'ngx-ui-loader'


@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'farmerName', 'farmerMail', 'productName', 'productCategory', 'productQuantity', 'productBasedPrice', 'totalPrice', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns1: string[] = ['farmerName', 'farmerMail', 'productName', 'productCategory', 'productQuantity', 'productBasePrice', 'consumerName', 'consumerMailID', 'biddedPrice', 'action'];
  dataSource1!: MatTableDataSource<any>;
  @ViewChild('paginatorFirst') paginatorFirst!: MatPaginator;
  @ViewChild('historyTb') historyTb = new MatSort();

  displayedColumns2: string[] = ['consumerName','consumerMail','noOfProductsBidded'];
  dataSource2!: MatTableDataSource<any>;
  @ViewChild('paginatorSecond') paginatorSecond!: MatPaginator;
  @ViewChild('profileTb') profileTb = new MatSort();

  constructor(private dialog: MatDialog,
    private api: ApiService,
    // @Inject(MAT_DIALOG_DATA) ,
    private ngxService:NgxUiLoaderService
    ) { }

  ngOnInit() {
    this.getProductList();
    this.getHistory();
    this.consumerInfo(); 
  }

  // functions in tab 1
  loader(){
    this.ngxService.start();
    this.ngxService.stop();
  }
  getProductList() {
    this.api.getConsumerProductShow_asp().subscribe({
      next: (response: any) => {
        console.log("Consumer's Portal: Products for Bidding is shown",response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        alert("Error in consumer's Portal: while fetching products for bidding")
      }
    })
  }

  // bid for the product
  bidNow(row: any) {
    this.dialog.open(BidNowDialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val=>{
      if (val==='bidded') {
        this.getHistory();
      }
    })
    console.log('row value in consumer comp:', row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // functions in tab 2
  getHistory(){
    this.api.getConsumerHistory_asp().subscribe({
      next: (response: any) => {
        console.log("Consumer's Portal: Consumer's Bidding History",response);
        this.dataSource1 = new MatTableDataSource(response);
        this.dataSource1.paginator = this.paginatorFirst;
        this.dataSource1.sort = this.historyTb;
      },
      error: (error: any) => {
        alert("Error in Consumer portal: while fetching consumer's bidded history")
      }
    })
  }

  applyFilter1(event1: Event){
    const filterValue1 = (event1.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue1.trim().toLowerCase();
 
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  // functions tab 3

  consumerInfo(){
    this.api.getConsumerProfile_asp().subscribe({
      next: (response: any) => {
        console.log("Consumer's Portal: Consumer's Profile Table", response);
        this.dataSource2 = new MatTableDataSource(response);
        this.dataSource2.paginator = this.paginatorSecond;
        this.dataSource2.sort = this.profileTb;
      },
      error: (error: any) => {
        alert("Error in Consumer's POrtal: while fetching consumer's profile")
      }
    })
  }

  applyFilter2(event1: Event){
    const filterValue2 = (event1.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue2.trim().toLowerCase();
 
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
}
