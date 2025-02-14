import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FirstStep = ({ onSubmit }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("ticketDetails")) || {
      ticketType: "",
      quantity: "1",
    },
  });

  const tickets = [
    { id: "regular", type: "Regular Access", price: 0 },
    { id: "vip", type: "VIP Access", price: 50 },
    { id: "vvip", type: "VVIP Access", price: 150 },
  ];

  const onSubmitForm = (data) => {
    localStorage.setItem('ticketDetails', JSON.stringify(data));
    if (onSubmit) {
      onSubmit(data);
    }
    navigate('/second-step');
  };

    useEffect(() => {
      const savedData = localStorage.getItem("ticketDetails");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setValue("ticketType", parsedData.ticketType);
        setValue("quantity", parsedData.quantity);
      }
    }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <section className="bg-main-color min-h-screen border border-secondary-color rounded-[32px] p-4 md:p-6 lg:p-8 mt-8">
        <header className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-xl md:text-2xl font-normal font-jejuMyeongjo">
              Ticket Selection
            </h2>
            <p className="text-neutral-50 text-base font-normal">Step 1/3</p>
          </div>
          <div className="w-full h-1 bg-secondary-border-secondary-color">
            <div className="h-full w-1/3 bg-[#24A0B5]" />
          </div>
        </header>

        <section
          className="px-4 md:px-6 py-4 bg-[#23a0b5] rounded-3xl border-l-2 border-r-2 border-b-2 border-[#07363e] backdrop-blur-[14px] my-6 md:my-8"
          style={{
            background:
              "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
          }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-neutral-50 text-3xl md:text-5xl font-normal font-roadRage">
              Techember Fest '25
            </h3>
            <p className="text-neutral-50 text-sm md:text-base font-normal">
              Join us for an unforgettable experience! Secure your spot now.
            </p>
          </div>
          <div className="text-neutral-50 text-sm md:text-base font-normal mt-4 text-center">
            <p>📍 Somewhere</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </section>

        <div className="w-full h-1 bg-[#0E464F]"></div>

        <div className="w-full p-6 bg-[#08252b] rounded-[32px] border border-main-color my-6 md:my-8 space-y-8">
          <section
            className="my-6 md:my-8"
            role="radiogroup"
            aria-label="Ticket Type Selection"
          >
            <label className="block text-neutral-50 text-base font-normal mb-2">
              Select Ticket Type:
            </label>
            <div className="p-4 bg-[#042127] rounded-3xl border border-[#07363e] grid grid-cols-1 md:grid-cols-3 gap-3">
              {tickets.map((ticket) => (
                <label
                  key={ticket.id}
                  className={`p-2 rounded-xl border-2 flex flex-col gap-3 hover:cursor-pointer transition-colors ${
                    watch("ticketType") === ticket.id
                      ? "border bg-[#197686] border-[#197686]"
                      : "border border-[#07363e] hover:border-[#197686] hover:bg-[#2b545a]"
                  }`}
                >
                  <input
                    type="radio"
                    {...register("ticketType", {
                      required: "Please select a ticket type",
                    })}
                    value={ticket.id}
                    className="sr-only"
                    aria-label={`${ticket.type} - $${ticket.price}`}
                  />
                  <h4 className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                    {ticket.price === 0 ? "Free" : `$${ticket.price}`}
                  </h4>
                  <div>
                    <p className="text-neutral-50 text-base font-normal uppercase leading-normal">
                      {ticket.type}
                    </p>
                    <p className="text-[#d9d9d9] leading-[21px] text-sm font-normal">
                      20/52
                    </p>
                  </div>
                </label>
              ))}
            </div>
            {errors.ticketType && (
              <p className="text-red-500 mt-2 text-sm" role="alert">
                {errors.ticketType.message}
              </p>
            )}
          </section>

          <section className="my-6">
            <label
              className="block text-neutral-50 text-base font-normal mb-2"
              htmlFor="quantity"
            >
              Number of Tickets
            </label>
            <select
              id="quantity"
              {...register("quantity", {
                required: "Please select number of tickets",
                min: {
                  value: 1,
                  message: "You must select at least 1 ticket"
                },
                max: {
                  value: 5,
                  message: "Maximum 5 tickets allowed per order"
                }
              })}
              className="w-full p-3 bg-[#042127] text-white rounded-xl border border-[#07363e] focus:outline-none"
            >
              <option value="">Select quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.quantity && (
              <p className="text-red-500 mt-2 text-sm" role="alert">
                {errors.quantity.message}
              </p>
            )}
          </section>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="submit"
              className="h-12 px-6 py-3 bg-button-color rounded-lg text-white font-normal font-jejuMyeongjo hover:bg-[#1b8a9e] transition-colors md:order-2"
            >
              Next
            </button>
            <button
              type="button"
              className="h-12 px-6 py-3 rounded-lg border border-button-color text-button-color font-normal font-jejuMyeongjo hover:bg-button-color hover:text-white transition-colors md:order-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default FirstStep;