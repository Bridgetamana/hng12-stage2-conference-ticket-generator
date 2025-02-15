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
    reset
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

  const handleCancel = () => {
    reset({
      ticketType: "",
      quantity: "",
    });
    localStorage.removeItem("ticketDetails");
    navigate('/');
  };

  useEffect(() => {
    const savedData = localStorage.getItem("ticketDetails");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue("ticketType", parsedData.ticketType);
      setValue("quantity", parsedData.quantity);
    }
  }, [setValue]);

    useEffect(() => {
      const subscription = watch((value) => {
        localStorage.setItem("ticketDetails", JSON.stringify(value));
      });
      return () => subscription.unsubscribe();
    }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
      <section className="bg-main-color min-h-screen border border-secondary-color rounded-[32px] p-4 md:p-6 lg:p-8 mt-8">
        <header className="space-y-3">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl md:text-2xl font-normal font-jejuMyeongjo">
              Ticket Selection
            </h1>
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
            <p><span aria-label="Location">📍 Somewhere</span></p>
            <p><time datetime="2025-03-15T19:00">March 15, 2025 | 7:00 PM</time></p>
          </div>
        </section>

        <div className="w-full h-1 bg-[#0E464F]"></div>

        <div className="w-full p-6 bg-[#08252b] rounded-[32px] border border-main-color my-6 md:my-8 space-y-8">
          <section className="my-6 md:my-8">
            <fieldset>
              <legend className="text-neutral-50 text-base font-normal mb-2">
                Select Ticket Type:
              </legend>
              <div className="p-4 bg-[#042127] rounded-3xl border border-[#07363e] grid grid-cols-1 md:grid-cols-3 gap-3">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`p-2 rounded-xl border-2 flex flex-col gap-3 ${
                      watch("ticketType") === ticket.id
                        ? "border bg-[#197686] border-[#197686]"
                        : "border border-[#07363e] hover:border-[#197686] hover:bg-[#2b545a]"
                    }`}
                  >
                    <label
                      htmlFor={`ticket-${ticket.id}`}
                      className="hover:cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        id={`ticket-${ticket.id}`}
                        {...register("ticketType", {
                          required: "Please select a ticket type",
                        })}
                        value={ticket.id}
                        className="sr-only"
                      />
                      <h4 className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                        {ticket.price === 0 ? "Free" : `$${ticket.price}`}
                      </h4>
                      <div>
                        <p className="text-neutral-50 text-base font-normal uppercase leading-normal">
                          {ticket.type}
                        </p>
                        <p className="text-[#d9d9d9] leading-[21px] text-sm font-normal">
                          <span aria-label="Available tickets">20/52</span>
                        </p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
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
              className="w-full p-3 bg-[#042127] text-white rounded-xl border border-[#07363e] focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
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
              className="h-12 px-6 py-3 bg-button-color rounded-lg text-white font-normal font-jejuMyeongjo hover:bg-[#1b8a9e] transition-colors md:order-2 focus:ring-2 focus:ring-offset-2 focus:ring-button-color focus:outline-none"
            >
              Next
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="h-12 px-6 py-3 rounded-lg border border-button-color text-button-color font-normal font-jejuMyeongjo hover:bg-button-color hover:text-white transition-colors md:order-1 focus:ring-2 focus:ring-offset-2 focus:ring-button-color focus:outline-none"
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