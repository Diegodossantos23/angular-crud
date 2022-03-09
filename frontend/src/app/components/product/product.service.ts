import { map, catchError } from "rxjs/operators";
import { Product } from "./product-create/product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { apiUrl } from "../../constants/apiuRL";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  // set snack bar message
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  // ! http methods

  // * post product
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  // * read product
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  // * read by id product
  readById(id: string): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  // * update product
  update(product: Product): Observable<Product> {
    const url = `${apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  // * delete product
  delete(id: string): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  // ! Server error message
  errorHandler(error: any): Observable<any> {
    console.warn(`Server Error >> ${error}`);
    this.showMessage("Error has occurred!", true);
    return EMPTY;
  }
}
