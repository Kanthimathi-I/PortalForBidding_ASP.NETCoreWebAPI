import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '../../assets/urls/urls';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  // api urls using node.js
  addProductUrl = urls.addProductUrl;
  getProductUrl = urls.getProductUrl;
  updateProductUrl = urls.updateProductUrl;
  deleteProductUrl = urls.deleteProductUrl;
  farmerProfileUrl = urls.farmerProfileUrl;
  consumerAddUrl = urls.consumerAddUrl;
  consumerHistoryUrl = urls.consumerHistoryUrl;
  consumerProfileUrl = urls.consumerProfileUrl;

  // product
  add(data: any) {
    return this.httpClient.post(this.addProductUrl, data);
  }

  update(data: any, id: number) {
    return this.httpClient.patch(this.updateProductUrl, data);
  }

  getProducts() {
    return this.httpClient.get(this.getProductUrl);
  }

  delete(id: any) {
    return this.httpClient.delete(this.deleteProductUrl + id)
  }

  // farmer
  farmerProfile() {
    return this.httpClient.get(this.farmerProfileUrl);
  }

  // consumer
  consumerAdd(data: any) {
    return this.httpClient.post(this.consumerAddUrl, data);
  }

  consumerHistory() {
    return this.httpClient.get(this.consumerHistoryUrl);
  }

  consumerProfile() {
    return this.httpClient.get(this.consumerProfileUrl);
  }

  // api urls using asp.net
  // for farmers
  farmerProductList_ASPUrl = urls.farmerProductList_ASPUrl;
  farmerBiddedProduct_ASPUrl = urls.farmerBiddedProduct_ASPUrl;
  farmerProfile_ASPUrl = urls.farmerProfile_ASPUrl;

  // for consumers
  consumerProductShow_ASPUrl = urls.consumerProductShow_ASPUrl;
  consumerBiddedHistory_ASPUrl = urls.consumerBiddedHistory_ASPUrl;
  consumerProfile_ASPUrl = urls.consumerProfile_ASPUrl;

  // for products
  addProductByFarmer_ASPUrl = urls.addProductByFarmer_ASPUrl;
  updateProductByFarmer_ASPUrl = urls.updateProductByFarmer_ASPUrl;
  deleteProductByFarmer_ASPUrl = urls.deleteProductByFarmer_ASPUrl;

  // farmer's methods using asp.net
  getFarmProductList_asp() {
    return this.httpClient.get(this.farmerProductList_ASPUrl);
  }
  getFarmBiddedProduct_asp() {
    return this.httpClient.get(this.farmerBiddedProduct_ASPUrl);
  }
  getFarmProfile_asp() {
    return this.httpClient.get(this.farmerProfile_ASPUrl);
  }
  // consumer's methods using asp.net
  getConsumerProductShow_asp() {
    return this.httpClient.get(this.consumerProductShow_ASPUrl);
  }
  getConsumerHistory_asp() {
    return this.httpClient.get(this.consumerBiddedHistory_ASPUrl);
  }
  getConsumerProfile_asp() {
    return this.httpClient.get(this.consumerProfile_ASPUrl);
  }

  // product methods using asp.net

  addProductInfoByFarmer_asp(data: any){
    return this.httpClient.post(this.addProductByFarmer_ASPUrl, data);
  }
  updateProductInfoByFarmer_asp(data: any, id:number){
    return this.httpClient.put(this.updateProductByFarmer_ASPUrl + id, data);
  }
  deleteProductInfoByFarmer_asp( id: number){
    return this.httpClient.delete(this.deleteProductByFarmer_ASPUrl + id);
  }

}
