import { Component, OnInit } from '@angular/core';
import { PackageService } from './../../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  public packages:Array<any> = [];
  constructor(private packageService:PackageService) { 
  }

  ngOnInit() {
    this.packages = this.packageService.getPackages();
  }

}
