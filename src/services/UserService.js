import axios from 'axios';

export function getTenant() {
    return axios.get('http://localhost:9090/owner/tenant/');
}
export function getOwner() {
    return axios.get('http://localhost:9090/owner/');
}
export function addOwner(owner) {
    return axios.post('http://localhost:9090/owner/', owner);
}
export function deleteOwner(id) {
    return axios.delete(`http://localhost:9090/owner/${id}`);
}
export function updateOwner(owner) {
    return axios.delete(`http://localhost:9090/owner/`, owner);
}