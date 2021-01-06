import http from './httpService';
import { apiUrl } from '../config.json';

export function getBranchOrders() {
    return http.get(apiUrl + '/myBranchOrders');
}