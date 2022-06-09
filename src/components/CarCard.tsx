import React from "react";
import { Link } from "react-router-dom";
import { AvailableDate } from "./AvailableDate";

interface CarCardInterface {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  second_subtitle: string;
  trailing: string;
  available_from: string;
  available_until: string;
}

export const CarCard = ({
  id,
  image,
  title,
  subtitle,
  second_subtitle,
  trailing,
  available_from,
  available_until,
}: CarCardInterface) => {
  return (
    <>
      <Link key={`car-card-${id}`} to={`/car-details/${id}`}>
        <div className="flex flex-row items-stretch bg-gray-50 rounded-lg h-72 shadow-lg hover:cursor-pointer hover:bg-slate-200 my-10">
          <img
            className="rounded-l-lg object-cover max-w-sm"
            src={image}
            alt="car.png"
          />
          <div className="flex flex-1 flex-col justify-between p-10 text-left">
            <div>
              <div className="flex flex-row justify-between shrink-0">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-xl font-bold text-green-600">{trailing}</p>
              </div>
              <p className="text-lg text-slate-600 font-semibold">{subtitle}</p>
              <p className="text-lg text-slate-700 font-semibold">{second_subtitle}</p>
            </div>
            <AvailableDate
              key={`available-${id}`}
              available_from={available_from}
              available_until={available_until}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
