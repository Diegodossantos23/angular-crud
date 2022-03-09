import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.scss"],
})
export class ProductCrudComponent implements OnInit {
  isProductCrud: boolean = true;
  // component constructor
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Register Products",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  // navigate to the product create 
  navigateToProductCreate(): void {
    console.warn("Navigating...");
    this.router.navigate(["/products/create"]);
  }
}
