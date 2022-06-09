import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AvailableDate } from "../components/AvailableDate";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  CircleMarker,
} from "react-leaflet";
import { Car } from "../interfaces/Car";
import { useParams, useNavigate } from "react-router-dom";
import { getCar } from "../service/api";
import { getDistanceFromLatLonInKm, myLocation } from "../utils";

export const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const [selected, setSelected] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      setCar(await getCar(id));
    };

    fetchCar();
  }, [id]);

  return (
    <>
      <Header key="header" title="Car Details" />
      {car && (
        <div className="flex flex-row bg-gray-50 rounded-lg shadow-lg my-10">
          <div className="flex flex-col p-10">
            <img
              key='car-img'
              className="rounded-lg object-cover max-w-xl"
              src={car.images[selected]}
              alt="car.png"
            />
            <div className="flex flex-row justify-evenly mt-10">
              {car.images.map((img: string, i: number) => (
                <img
                  key={`thumbnail-${i}`}
                  className={`rounded-lg object-cover w-32 ${
                    i === selected
                      ? "border-4 border-blue-300"
                      : "opacity-50 hover:opacity-100 hover:cursor-pointer"
                  }`}
                  src={img}
                  alt="car.png"
                  onClick={() => setSelected(i)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between p-10 text-left">
            <div>
              <div className="flex flex-row justify-between shrink-0">
                <p className="text-xl font-bold">{car.make}</p>
                <p className="text-xl font-bold text-green-600">
                  {getDistanceFromLatLonInKm({
                    lat: car.latitude,
                    lng: car.longitude,
                  })}{" "}
                  KM Away
                </p>
              </div>
              <p className="text-lg text-slate-600 font-semibold">
                {car.model}
              </p>
              <p className="text-lg text-slate-700 font-semibold">
                {car.km_traveled} KM
              </p>
            </div>
            <br key='br1' />
            <AvailableDate
              available_from={car.available_from}
              available_until={car.available_until}
            />
            <br key='br2'/>
            <MapContainer
              center={{ lat: car.latitude, lng: car.longitude }}
              zoom={12}
              scrollWheelZoom={false}
              className="w-auto h-72 rounded-lg shadow-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={{ lat: car.latitude, lng: car.longitude }}
                title="The car is here"
              >
                <Popup>Your car is here!</Popup>
              </Marker>
              <CircleMarker center={myLocation}>
                <Popup>Your are here!</Popup>
              </CircleMarker>
            </MapContainer>
            <br key='br3'/>
            <button className="bg-blue-600 p-4 rounded-lg text-white text-lg" onClick={()=>navigate(`/car-booking/${id}`)}>
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
