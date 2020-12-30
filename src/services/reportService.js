import http from './httpService';
import {apiUrl} from '../config.json';

export function getReports() {
    return http.get(apiUrl + '/branches/Reports')
}