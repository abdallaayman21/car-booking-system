import { Cordinate } from "../interfaces/Cordinate";

export const myLocation = {
    lat: 21.714288273885053,
    lng: 39.10147926818303
}

export const getDistanceFromLatLonInKm = (cord2: Cordinate) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(cord2.lat - myLocation.lat); // deg2rad below
    var dLon = deg2rad(cord2.lng - myLocation.lng);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(myLocation.lat)) *
        Math.cos(deg2rad(cord2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return Math.round(d);
};

const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
};