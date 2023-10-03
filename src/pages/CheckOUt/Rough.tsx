import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { DevTool } from "@hookform/devtools";
import { useAppDispatch } from "../../redux/hooks";
import { setCustomInfo } from "../../redux/slices/FormSlice";

type FormValue = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
};

const schema = yup.object({
  firstName: yup.string().required("Username id required"),
  lastName: yup.string().required("Username id required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().required("Email id required"),
});

export default function Rough() {
  const dispatch = useAppDispatch();

  const form = useForm<FormValue>({
    defaultValues: {
      email: "abc@example.com",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, formState, handleSubmit } = form;

  const onSubmit = (data: FormValue) => {
    dispatch(
      setCustomInfo({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
      })
    );
  };
  const { errors } = formState;

  return (
    <div className="w-[100%]">
      <form
        className="flex p-5 flex-col gap-[40px] w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="field email  flex-col lg:flex-row gap-[20px] lg:gap-[100px] flex gap-[100px] ">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border h-[50px] w-[80%]"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="name flex flex-col gap-[20px]">
          <div className="field flex  flex-col lg:flex-row gap-[20px] lg:gap-[100px]gap-[100px] firstName">
            <label
              className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border h-[50px] w-[80%]"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </div>
          <div className="field flex  flex-col lg:flex-row gap-[20px] lg:gap-[100px] lastName">
            <label
              className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border h-[50px] w-[80%]"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="countries  flex-col lg:flex-row gap-[20px] lg:gap-[100px] flex">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="country"
          >
            Country
          </label>

        </div>

        <div className="field flex flex-col lg:flex-row gap-[20px] lg:gap-[100px] lastName">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="border h-[50px] w-[80%]"
            type="text"
            id="address"
            {...register("address")}
          />
        </div>

        <div className="field flex  flex-col lg:flex-row gap-[20px] lg:gap-[100px] lastName">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="border h-[50px] w-[80%]"
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
        </div>

        <button className="bg-blue-600 hover:bg-blue-800 rounded-2 text-white uppercase m-auto w-[200px] h-[50px] " type="submit">
          submit
        </button>
    
      </form>
      <DevTool control={control} />
    </div>
  );
}
