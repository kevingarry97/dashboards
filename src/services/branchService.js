import http from './httpService';
import { apiUrl } from '../config.json';

export function addBranch(branches) {
    return http.post(apiUrl + '/createNewBranch', branches);
}

export function getBranch() {
    return http.get(apiUrl + '/viewAllBranches');
}

export function viewAllBranches() {
    return http.get(apiUrl + '/allBranches');
}

export function getSpecificBranch(id) {
    return http.get(apiUrl + '/viewSpecificBranch/' + id);
}