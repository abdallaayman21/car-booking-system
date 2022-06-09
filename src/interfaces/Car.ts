export interface Car {
    id: number;
    make: string;
    model: string;
    km_traveled: number;
    latitude: number;
    longitude: number;
    images: [string];
    available_from: string;
    available_until: string;
}