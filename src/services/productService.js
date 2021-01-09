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

export function getAllProducts() {
    return http.get(apiUrl + '/getAllProducts');
}

export function viewBranchProduct() {
    return http.get(apiUrl + '/viewAllMainProducts');
}

export function getProductToOrder(id) {
    return http.get(apiUrl + '/productToOrder/' + id);
}