import http from './httpService';
import { apiUrl } from '../config.json';

export function addExpenses(expenses) {
    return http.post(apiUrl + '/createNewExpense', expenses);
}

export function viewExpenses() {
    return http.get(apiUrl + '/viewAllBranchExpenses');
}

export function viewBranchExpenses() {
    return http.get(apiUrl + '/viewAllMyExpenses');
}