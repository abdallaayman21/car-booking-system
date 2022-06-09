import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Stack, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DateTimePicker } from "@mui/lab";
import { Car } from "../interfaces/Car";
import { getCar } from "../service/api";
import { SuccessPopup } from "../components/SuccessPopup";

export const Booking = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const [isShowPopup, setShowPopup] = useState<boolean>(false);
  const [isFromError, setFromError] = useState<boolean>(false);
  const [isUntilError, setUntilError] = useState<boolean>(false);
  const [from, setFromValue] = useState<string | Date | null>(new Date());
  const [until, setUntilValue] = useState<string | Date | null>(new Date());

  useEffect(() => {
    const fetchCar = async () => {
      setCar(await getCar(id));
    };

    fetchCar();
  }, [id]);

  return (
    <>
      <Header title="Booking Details" />
      {car && (
        <div className="flex flex-row bg-gray-50 rounded-lg shadow-lg my-10">
          <div className="flex flex-col p-10">
            <div className="flex flex-row justify-evenly mt-10"></div>
          </div>
          <div className="flex flex-1 flex-col justify-between items-center p-10 text-left">
            <p className="text-xl font-medium">
              Please select the desired date and time
            </p>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={4}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  inputFormat="dd/MM/yy hh:mm a"
                  label="From"
                  value={from}
                  onChange={(newValue) => {
                    setFromValue(newValue);
                  }}
                  disablePast={true}
                  minDateTime={new Date(car.available_from)}
                  maxDateTime={new Date(car.available_until)}
                  onError={() => {
                    setFromError(true);
                  }}
                  onAccept={() => {
                    setFromError(false);
                  }}
                />
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  inputFormat="dd/MM/yy hh:mm a"
                  label="To"
                  value={until}
                  onChange={(newValue) => {
                    setUntilValue(newValue);
                  }}
                  disablePast={true}
                  minDateTime={from}
                  maxDateTime={new Date(car.available_until)}
                  onError={() => {
                    setUntilError(true);
                  }}
                  onAccept={() => {
                    setUntilError(false);
                  }}
                />
              </Stack>
            </LocalizationProvider>
            <br />
            <button
              disabled={isFromError || isUntilError}
              className="bg-blue-600 p-4 rounded-lg w-1/4 text-white text-lg disabled:bg-neutral-300 disabled:text-gray-700"
              onClick={() => {
                setShowPopup(true);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
      <SuccessPopup is_show={isShowPopup} />
    </>
  );
};
