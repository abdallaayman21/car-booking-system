import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';


interface AvailableDateInterface{
    available_from: string
    available_until: string
}

export const AvailableDate = ({available_from, available_until}: AvailableDateInterface) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col shrink-1 items-center">
        <span className="w-5 h-5 bg-green-700 rounded-full" />
        <span className="border-l-4 border-solid h-6" />
        <span className="w-5 h-5 bg-red-700 rounded-full" />
      </div>
      <span className="w-5" />
      <div className="flex flex-col shrink-1 items-center">
        <p className="font-medium"> <Moment format="DD-MM-YY @hh:mm A">{available_from}</Moment></p>
        <span className="h-4" />
        <p className="font-medium"> <Moment format="DD-MM-YY @hh:mm A">{available_until}</Moment></p>
      </div>
    </div>
  );
};
