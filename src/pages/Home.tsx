import React, { useEffect, useState } from "react";
import { CarCard } from "../components/CarCard";
import { Header } from "../components/Header";
import { Car } from "../interfaces/Car";
import { getCars } from "../service/api";
import { getDistanceFromLatLonInKm } from "../utils";

export const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      var cars = await getCars();

      if (cars?.length > 0) {
        setCars(cars);
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      <Header key="header" title="Available Nearby Cars" />
      {cars?.length ? (
        cars.map((car: Car) => {
          const distance = getDistanceFromLatLonInKm({
            lat: car.latitude,
            lng: car.longitude,
          });

          if (distance <= 50) {
            return (
              <CarCard
                key={`car-${car.id}`}
                id={car.id}
                image={car.images[0]}
                title={car.make}
                subtitle={car.model}
                second_subtitle={`${car.km_traveled} KM`}
                trailing={`${distance} KM Away`}
                available_from={car.available_from}
                available_until={car.available_until}
              />
            );
          } else return <></>;
        })
      ) : (
        <div className="flex justify-center">
          Loading...
        </div>
      )}
    </>
  );
};
