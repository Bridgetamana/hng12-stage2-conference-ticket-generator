import React, { useEffect, useState } from "react";
import Barcode from "./Barcode";
import TicketPreview from "./TicketPreview";
import { useNavigate } from "react-router-dom";

const ThirdStep = () => {
  const [ticketDetails, setTicketDetails] = useState({});
  const navigate = useNavigate();
  const [attendeeDetails, setAttendeeDetails] = useState({});

  useEffect(() => {
    const savedTicketDetails = JSON.parse(
      localStorage.getItem("ticketDetails")
    );
    const savedAttendeeDetails = JSON.parse(
      localStorage.getItem("attendeeDetails")
    );
    if (savedTicketDetails) {
      setTicketDetails(savedTicketDetails);
    }
    if (savedAttendeeDetails) {
      setAttendeeDetails(savedAttendeeDetails);
    }
  }, []);

  const handleBookAnother = () => {
    localStorage.removeItem("ticketDetails");
    localStorage.removeItem("attendeeDetails");
    navigate("/");
  };

  return (
    <div className="bg-main-color min-h-screen border border-secondary-color rounded-[32px] p-4 md:p-6 lg:p-8 mt-8">
      <header className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl md:text-2xl font-normal font-jejuMyeongjo">
            Ready
          </h2>
          <p className="text-neutral-50 text-base font-normal">Step 3/3</p>
        </div>
        <div className="w-full h-1 bg-secondary-color">
          <div className="h-full w-full bg-accent" />
        </div>
      </header>
      <div className="w-full my-6 md:my-8 space-y-8">
        <div className="">
          <div className="space-y-3">
            <div className="text-center text-white text-[32px] font-normal font-['Alatsi']">
              Your Ticket is Booked!
            </div>
            <div className="text-center text-neutral-50 text-base font-normal leading-normal">
              Check your email for a copy or you can <b>download</b>
            </div>
          </div>
          <div className="my-8 ">
            <div className="w-[300px] h-[600px] mx-auto relative ">
              <TicketPreview />
              <div
                className=" w-[270px] h-[446px] p-3.5 bg-[#031d21]/10 rounded-2xl border border-button-color backdrop-blur-sm justify-center items-center inline-flex m-4"
                aria-label="Event ticket confirmation"
              >
                <div className="w-full space-y-5">
                  <header className="">
                    <h1 className=" text-center text-white text-[34px] font-normal font-roadRage leading-[34px]">
                      Techember Fest &apos;25
                    </h1>
                    <div className="p-1 flex-col justify-center items-center gap-1 flex">
                      <address className="text-white text-[10px] font-normal leading-[15px]">
                        <span aria-hidden="true">📍</span> 04 Rumens road,
                        Ikoyi, Lagos
                      </address>
                      <time
                        dateTime="2025-03-15T19:00"
                        className="text-white text-[10px] font-normal leading-[15px]"
                      >
                        <span aria-hidden="true">📅</span> March 15, 2025 | 7:00
                        PM
                      </time>
                    </div>
                  </header>

                  <img
                  className="w-[140px] h-[140px] rounded-xl border-4 object-cover border-button-color/50 mx-auto"
                  src={attendeeDetails.profileImage}
                  alt="Profile"
                />

                  <div className="h-40 p-1 bg-[#07333c] rounded-lg border border-[#123d43] flex-col justify-center items-center inline-flex">
                    <div className="self-stretch border-b border-[#12464e] justify-start items-center gap-2 inline-flex">
                      <dl className="grow shrink basis-0 p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex">
                        <dt className="opacity-30 text-white text-[10px] font-normal leading-[15px]">
                          Enter your name
                        </dt>
                        <dd className="text-white text-xs font-bold leading-[18px]">
                          {attendeeDetails.name}
                        </dd>
                      </dl>
                      <dl className="grow shrink basis-0 p-1 flex-col justify-center items-start gap-1 inline-flex">
                        <dt className="opacity-30 text-white text-[10px] font-normal leading-[15px]">
                          Enter your email *
                        </dt>
                        <dd className="text-white text-xs font-bold leading-[18px]">
                          {attendeeDetails.email}
                        </dd>
                      </dl>
                    </div>
                    <div className="self-stretch border-b border-[#12464e] justify-start items-center gap-2 inline-flex">
                      <dl className="grow shrink basis-0 p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex">
                        <dt className="opacity-30 text-white text-[10px] font-normal leading-[15px]">
                          Ticket Type:
                        </dt>
                        <dd className="text-white text-[10px] font-normal leading-[15px]">
                          {ticketDetails.ticketType}
                        </dd>
                      </dl>
                      <dl className="grow shrink basis-0 p-1 flex-col justify-center items-start gap-1 inline-flex">
                        <dt className="opacity-30 text-white text-[10px] font-normal leading-[15px]">
                          Ticket for :
                        </dt>
                        <dd className="text-white text-[10px] font-normal leading-[15px]">
                          {ticketDetails.quantity}
                        </dd>
                      </dl>
                    </div>
                    <dl className="self-stretch h-[65px] p-2 flex-col justify-center items-start gap-1 flex">
                      <dt className="self-stretch opacity-30 text-white text-[10px] font-normal leading-[15px]">
                        Special request?
                      </dt>
                      <dd className="self-stretch text-white text-[10px] font-normal leading-[15px]">
                      {attendeeDetails.specialRequest || "No special request"}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <Barcode />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="submit"
                className="h-12 px-6 py-3 bg-button-color rounded-lg text-white font-normal font-jejuMyeongjo hover:bg-[#1b8a9e] transition-colors md:order-2"
              >
                Download Ticket
              </button>
              <button
                type="button"
                className="h-12 px-6 py-3 rounded-lg border border-button-color text-button-color font-normal font-jejuMyeongjo hover:bg-button-color hover:text-white transition-colors md:order-1"
                onClick={handleBookAnother}
              >
                Book another ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
