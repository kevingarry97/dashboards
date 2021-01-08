import http from './httpService';
import { apiUrl } from '../config.json';

export function getCustomers() {
    return http.get(apiUrl + '/viewAllCustomers');
}