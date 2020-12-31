import http from './httpService';
import { apiUrl } from '../config.json';

export function getSubProduct() {
    return http.get(apiUrl + '/viewMySubProducts');
}