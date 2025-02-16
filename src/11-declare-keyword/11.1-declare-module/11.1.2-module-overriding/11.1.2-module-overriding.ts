import axios from 'axios';
import { Product } from '../product.model';

axios.get<Product>('https://fakestoreapi.com/products?limit=4')
  .then((products) => { // ❌ Error
    console.log('product', products.data);
    console.log(products.test);
  });
