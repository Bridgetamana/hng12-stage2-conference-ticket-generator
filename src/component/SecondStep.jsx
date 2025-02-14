import React, { useState } from "react";

const SecondStep = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-[#041e22] min-h-screen border border-[#0e464f] rounded-[32px] p-4 md:p-6 lg:p-8 mt-8">
      <header className="space-y-3">
        <h2 className="text-white text-xl md:text-2xl font-normal font-jejuMyeongjo">
          Attendee Details
        </h2>
        <p className="text-neutral-50 text-base font-normal">Step 2/3</p>
        <div className="w-full h-1 bg-[#0E464F]">
          <div className="h-full w-2/3 bg-[#24A0B5]" />
        </div>
      </header>

      <form className="w-full p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] my-6 md:my-8 space-y-8">
        <div className="w-full px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex flex-col gap-8">
          <div className=" text-neutral-50 text-base font-normal">
            Upload Profile Photo
          </div>
          <div className="w-full bg-black/20 flex justify-center items-center">
            <div className="w-full h-60 bg-black/20 rounded-sm flex justify-center items-center">
              <div className="w-60 h-[280px] p-6 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50 flex-col justify-center items-center gap-4 inline-flex relative">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-[28px] absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-[32px] opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center">
                      <label
                        htmlFor="profile-photo-upload"
                        className="flex flex-col justify-center items-center cursor-pointer"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.2639 14.8158C24.6812 10.2265 20.7505 6.6665 16.0052 6.6665C12.3305 6.6665 9.13854 8.8145 7.68121 12.1998C4.81721 13.0558 2.67188 15.7598 2.67188 18.6665C2.67188 22.3425 5.66254 25.3332 9.33854 25.3332H10.6719V22.6665H9.33854C7.13321 22.6665 5.33854 20.8718 5.33854 18.6665C5.33854 16.7945 6.93721 14.9905 8.90254 14.6452L9.67721 14.5092L9.93321 13.7652C10.8705 11.0305 13.1972 9.33317 16.0052 9.33317C19.6812 9.33317 22.6719 12.3238 22.6719 15.9998V17.3332H24.0052C25.4759 17.3332 26.6719 18.5292 26.6719 19.9998C26.6719 21.4705 25.4759 22.6665 24.0052 22.6665H21.3385V25.3332H24.0052C26.9465 25.3332 29.3385 22.9412 29.3385 19.9998C29.337 18.8045 28.9347 17.6443 28.196 16.7045C27.4574 15.7647 26.425 15.0998 25.2639 14.8158Z"
                            fill="#FAFAFA"
                          />
                          <path
                            d="M17.3385 18.6665V13.3332H14.6719V18.6665H10.6719L16.0052 25.3332L21.3385 18.6665H17.3385Z"
                            fill="#FAFAFA"
                          />
                        </svg>
                        <div className="text-center text-neutral-50 text-base font-normal">
                          Drag & drop or click to upload
                        </div>
                      </label>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/30 rounded-[32px] flex justify-center items-center">
                    <label
                      htmlFor="profile-photo-upload"
                      className="flex flex-col justify-center items-center cursor-pointer"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.2639 14.8158C24.6812 10.2265 20.7505 6.6665 16.0052 6.6665C12.3305 6.6665 9.13854 8.8145 7.68121 12.1998C4.81721 13.0558 2.67188 15.7598 2.67188 18.6665C2.67188 22.3425 5.66254 25.3332 9.33854 25.3332H10.6719V22.6665H9.33854C7.13321 22.6665 5.33854 20.8718 5.33854 18.6665C5.33854 16.7945 6.93721 14.9905 8.90254 14.6452L9.67721 14.5092L9.93321 13.7652C10.8705 11.0305 13.1972 9.33317 16.0052 9.33317C19.6812 9.33317 22.6719 12.3238 22.6719 15.9998V17.3332H24.0052C25.4759 17.3332 26.6719 18.5292 26.6719 19.9998C26.6719 21.4705 25.4759 22.6665 24.0052 22.6665H21.3385V25.3332H24.0052C26.9465 25.3332 29.3385 22.9412 29.3385 19.9998C29.337 18.8045 28.9347 17.6443 28.196 16.7045C27.4574 15.7647 26.425 15.0998 25.2639 14.8158Z"
                          fill="#FAFAFA"
                        />
                        <path
                          d="M17.3385 18.6665V13.3332H14.6719V18.6665H10.6719L16.0052 25.3332L21.3385 18.6665H17.3385Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      <div className="text-center text-neutral-50 text-base font-normal">
                        Drag & drop or click to upload
                      </div>
                    </label>
                  </div>
                )}
                <input
                  type="file"
                  id="profile-photo-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-[#07373F]"></div>

        <div className="w-full space-y-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-neutral-50 text-base font-normal"
            >
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              className="p-3 w-full h-[50px] bg-[#042127] rounded-xl border border-[#07373F]"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-neutral-50 text-base font-normal"
            >
              Enter your email *
            </label>
            <div className="w-full p-3 flex items-center gap-2 bg-[#042127] rounded-xl border border-[#07373F]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                  fill="white"
                />
              </svg>
              <input
                id="name"
                type="text"
                className="w-full bg-[#042127]"
                placeholder="hello@avioflagos.io"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="specialRequest"
              className="text-neutral-50 text-base font-normal"
            >
              Special request?
            </label>
            <textarea
              id="specialRequest"
              className="w-full h-[127px] p-3 rounded-xl border border-[#07363e] bg-[#042127] flex text-[#aaaaaa] text-base font-normal"
              placeholder="we wanna hear it..."
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="submit"
            className="h-12 px-6 py-3 bg-[#23a0b5] rounded-lg text-white font-normal font-jejuMyeongjo hover:bg-[#1b8a9e] transition-colors md:order-2"
          >
            Get My Free Ticket
          </button>
          <button
            type="button"
            className="h-12 px-6 py-3 rounded-lg border border-[#23a0b5] text-[#23a0b5] font-normal font-jejuMyeongjo hover:bg-[#23a0b5] hover:text-white transition-colors md:order-1"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
