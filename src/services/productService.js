import http from './httpService';
import { apiUrl } from '../config.json';

export function addProduct(products) {
    const fd = new FormData();

    fd.append('name', products.name);
    fd.append('quantity', products.quantity);
    fd.append('unitPrice', products.unitPrice);
    fd.append('imageUrl', products.imageUrl);

    return http.post(apiUrl + '/createNewProduct', fd);
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