import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'task4';
  UserData = [
    { Product: 'Nike Airmax 270', image1: 'assets/x.png', PRICE: '$998', QTY: '', UNITPRICE: '$499', image: 'assets/Product Image (1).png', quantity: 0 },
    { Product: 'Nike Airmax 270', image1: 'assets/x.png', PRICE: '$998', QTY: '', UNITPRICE: '$499', image: 'assets/image Product (5).png', quantity: 0 }
  ];
  
  subtotal: number = 0;
  shippingFee: number = 20;
  total: number = 0;
  
  calculateSubtotal() {
    this.subtotal = this.UserData.reduce((sum, item) => {
      const unitPrice = parseFloat(item.PRICE.replace('$', ''));
      return sum + unitPrice * item.quantity;
    }, 0);
  }
  
  calculateTotal() {
    this.total = this.subtotal + this.shippingFee;
  }
  
  increment(item: any) {
    item.quantity++;
    this.calculateSubtotal();
    this.calculateTotal();
  }
  
  decrement(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.calculateSubtotal();
      this.calculateTotal();
    }
  }
  
  calculateTotalPrice(item: any): string {
    const unitPrice = parseFloat(item.PRICE.replace('$', ''));
    const totalPrice = unitPrice * item.quantity;
    return '$' + totalPrice.toFixed(2);
  }
  
  ngOnInit() {
    this.calculateSubtotal();
    this.calculateTotal();
  }
  
  
  voucherCode: string | undefined;
  isVoucherApplied: boolean = false;
  
  redeemVoucher() {
    
  
    
    if (this.voucherCode === 'EXAMPLECODE') {
    
      this.isVoucherApplied = true;
      console.log('Voucher code applied successfully!');
    } else {
      console.log('Invalid voucher code.');
    }
  }
   totalPrice: number = 0;
  discountedPrice: number = 0;

  applyVoucher() {
    if (this.voucherCode === '1234') {
      const discountPercentage: number = 20;
      const discountAmount: number = (this.totalPrice * discountPercentage) / 100;
      this.discountedPrice = this.totalPrice - discountAmount;
    } else {
      alert('Invalid voucher code');
    }
  }
  
}

    


