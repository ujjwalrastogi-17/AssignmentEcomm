import { useAppSelector } from "../../redux/hooks";

export default function FavIcon() {
  const favCount = useAppSelector((state) => state.ProductArray.favCount);

  return (
    <div className="flex justify-center items-center gap-[3px]">
      {favCount > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-suit-heart-fill text-red-500"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
            fill="currentColor"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.765 4.70229L12 5.52422L11.2349 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.3149 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <p className="text-white font-lato">Favorites</p>
    </div>
  );
}
