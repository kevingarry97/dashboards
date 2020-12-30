import http from './httpService';
import { apiUrl } from '../config.json';

export function addImport(imports) {
    return http.post(apiUrl + '/createImport', imports);
}

export function viewImport() {
    return http.get(apiUrl + '/viewAllImports');
}

export function viewSpecific(id) {
    return http.get(apiUrl + '/viewSpecificProductImport/' + id);
}