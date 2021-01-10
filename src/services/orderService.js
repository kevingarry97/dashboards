import http from './httpService';
import { apiUrl } from '../config.json';

export function getBranchOrders() {
    return http.get(apiUrl + '/myBranchOrders');
}

export function viewAllBranchOrders() {
    return http.get(apiUrl + '/viewAllBranchOrders');
}

export function orderingProduct (id, quantityToOrder) {
    return http.post(apiUrl + '/ordering/' + id, quantityToOrder);
}

export function viewOrder() {
    return http.get(apiUrl + '/myOrders');
}