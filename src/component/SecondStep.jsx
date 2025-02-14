import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SecondStep = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [uploadError, setUploadError] = useState("");
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: JSON.parse(localStorage.getItem("attendeeDetails")) || {
      name: "",
      email: "",
      specialRequest: "",
      profileImage: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("attendeeDetails");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue("name", parsedData.name);
      setValue("email", parsedData.email);
      setValue("specialRequest", parsedData.specialRequest);
      if (parsedData.profileImage) {
        setImage(parsedData.profileImage);
      }
    }
  }, [setValue]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Upload failed:", errorData);
          setUploadError(`Upload failed: ${errorData.error.message}`);
          return;
        }

        const data = await response.json();
        setValue("profileImage", data.secure_url);
        setImage(data.secure_url);
        setUploadError("");
        console.log("Successfully uploaded", data);
      } catch (error) {
        console.error("Upload error:", error);
        setUploadError("An error occurred during the upload.");
      }
    }
  };

  const onSubmitForm = (data) => {
    if (!data.profileImage) {
      setUploadError("Profile image is required.");
      return;
    }
    localStorage.setItem("attendeeDetails", JSON.stringify(data));
    if (onSubmit) {
      onSubmit(data);
    }
    navigate("/third-step");
  };

  return (
    <div className="bg-main-color min-h-screen border border-secondary-color rounded-[32px] p-4 md:p-6 lg:p-8 mt-8">
      <header className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl md:text-2xl font-normal font-jejuMyeongjo">
            Attendee Details
          </h2>
          <p className="text-neutral-50 text-base font-normal">Step 2/3</p>
        </div>
        <div className="w-full h-1 bg-secondary-color">
          <div className="h-full w-2/3 bg-accent" />
        </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full p-6 bg-[#08252b] rounded-[32px] border border-[#0e464e] my-6 md:my-8 space-y-8"
      >
        <div className="w-full px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex flex-col gap-8">
          <div className="text-neutral-50 text-base font-normal">
            Upload Profile Photo
          </div>
          <div className="w-full bg-black/20 flex justify-center items-center">
            <div className="w-full h-60 bg-black/20 rounded-sm flex justify-center items-center">
              <div className="w-60 h-[280px] p-6 bg-[#0e464e] rounded-[32px] border-4 border-button-color/50 flex-col justify-center items-center gap-4 inline-flex relative">
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
                  onChange={handleImageUpload}
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
              className={`outline-none p-3 w-full h-[50px] bg-[#042127] rounded-xl border ${
                errors.name ? "border-red-500" : "border-[#07373F]"
              } text-white`}
              placeholder="Your Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-neutral-50 text-base font-normal"
            >
              Enter your email *
            </label>
            <div
              className={`w-full p-3 flex items-center gap-2 bg-[#042127] rounded-xl border ${
                errors.email ? "border-red-500" : "border-[#07373F]"
              }`}
            >
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
                id="email"
                type="email"
                className="outline-none w-full bg-[#042127] text-white"
                placeholder="hello@avioflagos.io"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
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
              className={`outline-none w-full h-[127px] p-3 rounded-xl border ${
                errors.specialRequest ? "border-red-500" : "border-[#07363e]"
              } bg-[#042127] text-white`}
              placeholder="we wanna hear it..."
              {...register("specialRequest", {
                maxLength: {
                  value: 500,
                  message: "Special request must not exceed 500 characters",
                },
              })}
            />
            {errors.specialRequest && (
              <p className="text-red-500 text-sm mt-1">
                {errors.specialRequest.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="submit"
            className="h-12 px-6 py-3 bg-button-color rounded-lg text-white font-normal font-jejuMyeongjo hover:bg-[#1b8a9e] transition-colors md:order-2"
          >
            Get My Free Ticket
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-12 px-6 py-3 rounded-lg border border-button-color text-button-color font-normal font-jejuMyeongjo hover:bg-button-color hover:text-white transition-colors md:order-1"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
