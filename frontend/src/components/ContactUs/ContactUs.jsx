// import React from "react";
// import contactBgImage from "./bgContactUs.png";
// import { useForm } from "react-hook-form";

// const ContactUs = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center overflow-hidden"
//       style={{ backgroundImage: `url(${contactBgImage})` }}
//     >
//       <div className="mb-4  bg-black bg-opacity-60   rounded-[50px] p-10 h-auto md:h-[62%] w-[90%] md:w-[50%] lg:w-[40%] mx-auto mt-[10%]">
//         <form
//           className="space-y-[17px] md:space-y-4 mx-auto max-w-[100%] md:max-w-[85%] lg:max-w-[78%]"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h3 className="text-2xl md:text-4xl font-bold uppercase text-center mb-10 text-white">
//             Contact Us
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col gap-1 items-center justify-center">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
//               />
//             </div>

//             <div className="flex flex-col gap-1 items-center justify-center">
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col gap-1 items-center justify-center">
//               <input
//                 type="text"
//                 placeholder="organisation"
//                 className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
//               />
//             </div>

//             <div className="flex flex-col gap-1 items-center justify-center">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-1 items-center justify-center">
//             <textarea
//               placeholder="Message/Query"
//               className="p-2 text-sm md:p-4 border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
//               rows={4}
//             ></textarea>
//           </div>

//           <div className="text-center mt-5">
//             <button
//               type="submit"
//               className="bg-[#fe6714] text-white py-2 px-8 rounded-2xl md:rounded-3xl text-sm md:text-lg transition duration-300 hover:bg-gray-700"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";
import contactBgImage from "./bgContactUs.png";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { firstName, lastName, organization, email, message } = data;

    const mailtoLink = `mailto:info@krishlogix.com?subject=Enquiry from ${firstName} ${lastName}&body=Organization: ${organization}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink; // This will open the user's default email client
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${contactBgImage})` }}
    >
      <div className="mb-4 bg-black bg-opacity-60 rounded-[50px] p-10 h-auto md:h-[62%] w-[90%] md:w-[50%] lg:w-[40%] mx-auto mt-[10%]">
        <form
          className="space-y-[17px] md:space-y-4 mx-auto max-w-[100%] md:max-w-[85%] lg:max-w-[78%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-2xl md:text-4xl font-bold uppercase text-center mb-10 text-white">
            Contact Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })} // Register input with react-hook-form
                className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              />
              {errors.firstName && <span className="text-red-500">First name is required</span>}
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
                className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              />
              {errors.lastName && <span className="text-red-500">Last name is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                type="text"
                placeholder="Organization"
                {...register("organization", { required: true })}
                className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              />
              {errors.organization && <span className="text-red-500">Organization is required</span>}
            </div>

            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="p-2 md:p-2 text-sm border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <textarea
              placeholder="Message/Query"
              {...register("message", { required: true })}
              className="p-2 text-sm md:p-4 border rounded-2xl md:rounded-3xl w-full placeholder:text-gray-500 placeholder:text-center focus:outline-none focus:border-[#a6a6a6] transition duration-300"
              rows={4}
            ></textarea>
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-[#fe6714] text-white py-2 px-8 rounded-2xl md:rounded-3xl text-sm md:text-lg transition duration-300 hover:bg-gray-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
