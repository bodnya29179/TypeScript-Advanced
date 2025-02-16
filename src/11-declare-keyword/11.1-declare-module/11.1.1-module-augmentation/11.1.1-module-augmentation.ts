import axios from 'axios';
import { Product } from '../product.model';

axios.get<Product>('https://fakestoreapi.com/products?limit=4')
  .then((response) => {
    console.log('product', response.data);
    console.log(response.test); // ✅ 'test' property added via augmentation
  });
