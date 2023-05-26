import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  farmer: string | any[] | null | undefined;

  constructor(private ngxService:NgxUiLoaderService) {

  }

  loader(){
    this.ngxService.start();
    this.ngxService.stop();
  }
  loginAction() { }

  signupAction() { }

  forgetPasswordAction() { }

}
