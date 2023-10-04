import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
// import { DevTool } from "@hookform/devtools";
import { useAppDispatch } from "../../redux/hooks";
import { setCustomInfo, setCustomValid } from "../../redux/slices/FormSlice";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type FormValue = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  region: string;
  country: string;
  phoneNumber: string; // Change the phoneNumber type to string
};

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  region: yup.string().required("Region is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "Phone Number must contain only digits")
    .min(10, "Phone Number must be at least 10 digits")
    .max(12, "Phone Number must not exceed 12 digits"),
});

export default function Rough() {
  const dispatch = useAppDispatch();

  const form = useForm<FormValue>({
    defaultValues: {
      email: "abc@example.com",
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      region: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, formState, handleSubmit } = form;

  const onSubmit = (data: FormValue) => {
    dispatch(
      setCustomInfo({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        region: data.region,
        phoneNumber: data.phoneNumber,
        country: data.country,
      })
    );

    dispatch(setCustomValid());
  };

  const { errors } = formState;

  return (
    <div className="w-[100%]">
      <form
        className="flex p-5 flex-col gap-[20px] w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="field  email  flex-col  gap-[20px]  flex">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border h-[50px] w-[100%]"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="error text-red-800">{errors.email.message}</p>
          )}
        </div>

        <div className="name  flex flex-col md:flex-row justify-between gap-[20px]">
          <div className="field flex w-[100%] md:w-[50%] flex-col gap-[10px] -[100px] firstName">
            <label
              className=" text-light-secondary-text font-lato text-14 font-semibold leading-20"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border h-[50px] w-[100%]"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="error text-red-800">{errors.firstName.message}</p>
            )}
          </div>
          <div className="field flex w-[100%] md:w-[50%]  flex-col gap-[10px] lastName">
            <label
              className=" text-light-secondary-text font-lato text-14 font-semibold leading-20"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border h-[50px] w-[100%]"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="error text-red-800">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="countries w-[100%] flex-col gap-[10px] flex">
          <label
            className="text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="country"
          >
            Country
          </label>

          <FormControl style={{ width: "100%" }}>
            <InputLabel id="country">Country</InputLabel>
            <Select
              label="Country"
              id="Country"
              {...register("country", { required: "Country is required" })}
            >
              <MenuItem value={"india"}>India</MenuItem>
              <MenuItem value={"usa"}>USA</MenuItem>
              <MenuItem className="w-full hover:bg-slate-300" value={"russia"}>
                russia
              </MenuItem>
            </Select>
          </FormControl>
          {errors.country && (
            <p className="error text-red-800">{errors.country.message}</p>
          )}
        </div>

        <div className="field flex flex-col gap-[10px]  lastName">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="region"
          >
            Region
          </label>
          <input
            className="border h-[50px] w-[100%]"
            type="text"
            id="region"
            {...register("region")}
          />
          {/* {err} */}
        </div>
        {errors.region && (
          <p className="error  text-red-800">{errors.region.message}</p>
        )}

        <div className="field flex flex-col gap-[10px]  lastName">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="border h-[50px] w-[100%]"
            type="text"
            id="address"
            {...register("address")}
          />
          {errors.address && (
            <p className="error  text-red-800">{errors.address.message}</p>
          )}
          {/* {err} */}
        </div>

        <div className="field flex  flex-col gap-[10px]  lastName">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="border h-[50px] w-[100%]"
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="error  text-red-800">{errors.phoneNumber.message}</p>
          )}
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-800 rounded-2 text-white uppercase m-auto w-[200px] h-[50px] "
          type="submit"
        >
          submit
        </button>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}
