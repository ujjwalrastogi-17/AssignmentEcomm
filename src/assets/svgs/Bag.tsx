import { useAppSelector } from "../../redux/hooks";
export default function Bag() {
  const cartArrayLen = useAppSelector(
    (state) => state.CartArray.CartArray.length
  );

  return (
    <div>
      <div className="flex justify-center items-center gap-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-white font-lato">Card</p>
        <div className=" bg-green-500 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center text-white">
          <p>{cartArrayLen}</p>
        </div>
      </div>
    </div>
  );
}
