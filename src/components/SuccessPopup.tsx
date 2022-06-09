import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import success from "../icons/success.svg";

interface SuccessPopupInterface {
  is_show: boolean;
}

export const SuccessPopup = ({ is_show }: SuccessPopupInterface) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShow(is_show);
  }, [is_show]);

  return (
    <div
      className={`relative z-10 ${!show && "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className=" flex flex-col items-center text-center mt-3 font-medium text-gray-900 ">
              <img className="w-1/3 m-5" src={success} alt="" />
              <h3 className="my-5 text-2xl">Booking Successful!</h3>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShow(false);
                  navigate("/", { replace: true });
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
