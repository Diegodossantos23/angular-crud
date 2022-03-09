
// component
import { Component, OnInit } from "@angular/core";
import { Product } from "./../product-create/product.model";

// api
import { ProductService } from "./../product.service";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.scss"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];

  /** Columns displayed in the table */
  displayedColumns = ["id", "name", "price", "action"];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.warn("products", products);
    });
  }
}
