// router
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

// component
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product-create/product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent implements OnInit {
  productId: any;

  product: Product = {
    name: "",
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get registered products data
    this.productId = this.route.snapshot.paramMap.get("id");
    this.productService.readById(this.productId).subscribe((product) => {
      this.product = product;
    });
  }

  // update product
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Product successfully updated!');
      this.router.navigate(["/products"]);
    });
  }

  // cancel changes
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
