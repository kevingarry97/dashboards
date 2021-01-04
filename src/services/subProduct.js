import http from './httpService';
import { apiUrl } from '../config.json';

export function addSubProduct(subProduct) {
    return http.post(apiUrl + '/createNewSubproduct', subProduct);
}

export function getSubProduct() {
    return http.get(apiUrl + '/viewMySubProducts');
}