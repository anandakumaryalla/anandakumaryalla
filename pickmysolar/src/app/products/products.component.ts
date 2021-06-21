import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sizeValue: any = 50;
  productsList: any;
  selectedProducts: any;
  modalVisible = false;
  singleProductData: any;

  constructor(private readonly dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    var obj = {};
    this.dataService.getProducts(obj).subscribe((res: any) => {
      if (res && res.success) {
        if (res.data && res.data.quotes && res.data.quotes.product_quotes && res.data.quotes.product_quotes.length > 0) {
          this.productsList = res.data.quotes.product_quotes;
          this.selectedProducts = this.productsList.filter(product => this.sizeValue === product.volume);
        }
      }
    })
  }

  onAfterChange(value: number): void {
    this.selectedProducts = this.productsList.filter(product => value === product.volume);
  }

  showModal(data): void {
    this.modalVisible = true;
    this.singleProductData = data;
  }

  okClicked(): void {
    this.modalVisible = false;
  }

  cancelModal(): void {
    this.modalVisible = false;
  }

  nextProduct() {
    // Here need to show next product
  }

  prevProduct() {
    // Here need to show previous product
  }

}
