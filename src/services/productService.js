import http from './httpService';
import { apiUrl } from '../config.json';

export function addProduct(products) {
    const data = new FormData();

    data.append('name', products.name);
    data.append('quantity', products.quantity);
    data.append('unitPrice', products.unitPrice);
    data.append('imageUrl', products.imageUrl);

    return http.post(apiUrl + '/createNewProduct', data);
}

export function getProduct() {
    return http.get(apiUrl + '/viewAllProducts');
}

export function viewSpecificProduct(id) {
    return http.get(apiUrl + '/viewSpecificProduct/' + id);
}