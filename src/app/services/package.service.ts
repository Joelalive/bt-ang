import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private packages:Array<any> = [];
  constructor() { 
    this.packages =[{
      'name':'Black Shark 2',
      'price':'50000',
      'units':70
    },{
      'name':'Iphone X',
      'price':'120000',
      'units':50
    },{
      'name':'Oneplus 7 Pro',
      'price':'58000',
      'units':100
    }];
  }

  /**
   * getPackages
   */
  public getPackages():Array<any> {
    return this.packages;
  }
}
