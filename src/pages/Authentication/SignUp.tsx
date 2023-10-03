import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { DevTool } from "@hookform/devtools";
import { useAppDispatch } from "../../redux/hooks";
import { setData } from "../../redux/slices/UserData";
import { google } from "../../assets/images";

type FormValue = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email id required"),
  password: yup.string().required("Password"),
});

export default function SignUp() {
  const dispatch = useAppDispatch();

  const form = useForm<FormValue>({
    defaultValues: {
      name: "",
      email: "abc@example.com",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, formState, handleSubmit } = form;

  const onSubmit = (data: FormValue) => {
    dispatch(
      setData({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    localStorage.setItem(data.email, data.password);
  };
  const { errors } = formState;

  return (
    <div className="w-[100%] lg:w-[50%]">
      <form
        className="flex p-5 flex-col gap-[40px] w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="field email  flex-col gap-[20px]  flex  ">
          <label
            className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border h-[50px] w-[100%]"
            type="text"
            id="email"
            {...register("name")}
          />
        </div>

        <div className="field email  flex-col gap-[20px]  flex ">
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
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="name flex flex-col gap-[20px]">
          <div className="field flex  flex-col gap-[20px]  firstName">
            <label
              className="w-[20%] text-light-secondary-text font-lato text-14 font-semibold leading-20"
              htmlFor="firstName"
            >
              Password
            </label>
            <input
              className="border h-[50px] w-[100%]"
              type="text"
              id="password"
              {...register("password")}
            />
          </div>
        </div>

        <div className="w-[80%] m-auto">
          <p className="text-light-primary-text font-Lato text-xs font-normal">
            Terms and conditions agreement should start with an introduction
            that lets users know they’re reading a terms and conditions
            agreement
          </p>
        </div>

        <div className="flex items-center gap-[10px]">
          <input type="checkbox" /> 
          <label className="text-sm" htmlFor="remember">Remember for 30 days</label>
        </div>

        <button
          className="bg-gray-400 hover:bg-gray-200 rounded-2 text-white uppercase m-auto w-[100%] h-[50px] "
          type="submit"
        >
          submit
        </button>

        <div className="flex gap-[10px] justify-between items-center w-[100%]">
          <div className="w-[45%] border h-0"></div>
          <p>OR</p>
          <div className="w-[45%] border h-0"></div>
        </div>

       

        <button className="flex w-[100%] rounded-2 bg-gray-800 h-[50px] items-center justify-center gap-[10px]">
          <img src={google} alt="" />
          <p className="font-lato text-white ">Sign in with Google</p>
        </button>

      </form>
      <DevTool control={control} />
    </div>
  );
}
