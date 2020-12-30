import http from './httpService';
import { apiUrl } from '../config.json';

export function registerManager(manager) {
    return http.post(apiUrl + '/createNewBranchManager', manager);
}

export function viewManager() {
    return http.get(apiUrl + '/viewAllBranchManagers');
}
  