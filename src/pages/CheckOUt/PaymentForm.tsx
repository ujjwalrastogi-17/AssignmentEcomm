import { PayCardProps } from "../../utils/dummyData/dummyData";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAppDispatch } from "../../redux/hooks";
import { setPaymentMethod } from "../../redux/slices/FormSlice";

interface Props {
  arr: PayCardProps[];
}

type FormValues = {
  shipment: string;
};

export default function PaymentForm({ arr }: Props) {
  const dispatch = useAppDispatch();
  const form = useForm<FormValues>({
    defaultValues: {
      shipment: "",
    },
  });

  const { register, control, handleSubmit, formState, setValue } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("onsub", data);
    dispatch(setPaymentMethod({ id: data.shipment }));
  };

  const handleRadioChange = (value: string) => {
    // Set the selected value to the form field
    setValue("shipment", value);
    // Trigger form submission
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="w-[100%]">
      <form
        className="w-[100%] flex flex-col  gap-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {arr.map((item) => {
          return (
            <div className="w-[100%] rounded-[15px] h-[200px] md:h-[200px] xl:h-[200px]  bg-slate-200 p-3 flex justify-start items-start gap-[10px] border">
              <div className=" flex justify-center items-center p-1">
                <input
                  className="w-[20px] h-[20px]  focus:bg-white"
                  type="radio"
                  id={item.title}
                  value={item.id_p}
                  {...register("shipment")}
                  onChange={() =>
                    handleRadioChange(item.id_p ? item.id_p.toString() : "")
                  }
                />
                <p>{errors.shipment?.message}</p>
              </div>
              <label className="w-[100%]" htmlFor={item.title}>
                <div className="flex flex-col gap-[10px] w-[100%] p-2">
                  <div className="flex w-[100%] justify-between">
                    <h4 className=" font-lato text-base font-semibold text-gray-700 leading-5">
                      {item.title}
                    </h4>
                    <div className="p-2 w-[70px] h-[40px] xl:w-[100px] bg-white">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  {!item.isList && (
                    <p className="w-[80%] h-[100px] overflow-clip text-ellipsis xl:overflow-visible font-lato text-s font-normal text-gray-500 leading-6">
                      {item.desc}
                    </p>
                  )}
                  {item.isList && (
                    <div className="w-[100%] h-[100px] overflow-clip text-ellipsis xl:overflow-visible font-lato text-s font-normal text-gray-500 leading-6">
                      <p className="w-[100%]">
                        Delivery Time: {item.list?.delType}
                      </p>
                      <p className="w-[100%]">
                        Shipping Cost: {item.list?.shipCost}
                      </p>
                      <p>
                        Insurance:{" "}
                        {item.list?.insurance ? (
                          <span className=" text-green-600">Available</span>
                        ) : (
                          <span className=" text-red-700">Unavailable</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>
          );
        })}{" "}
      </form>
      <DevTool control={control} />
    </div>
  );
}
