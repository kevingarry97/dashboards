import http from './httpService';
import { apiUrl } from '../config.json';

export function addDistribution(distribution) {
    return http.post(apiUrl + '/createDistribution', distribution);
}

export function getDistribution() {
    return http.get(apiUrl + '/viewAllDistributions');
}

export function getSpecificDistribution(id) {
    return http.get(apiUrl + '/viewDistributionsPerBranch/' + id);
}

export function getDistributionSpecificProduct(id) {
    return http.get(apiUrl + '/viewDistributionsPerProduct/' + id);
}