import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Favorite } from "@mui/icons-material";

interface TrendCards{
  width_sm: number;
  width_lg: number;
  img:string
}



export default function Card({width_sm, width_lg, img}:TrendCards) {
  return (
    <div className={`flex flex-col min-w-[${width_sm}px] rounded-[10px] border lg:min-w-[${width_lg}]`}>
      <div className="p-4">
        {/* <img className={`w-[${width_sm}px] lg:w-[${width_lg}px]`} src={img} alt="" /> */}
        <img className={`w-[${width_sm}px] lg:w-[${width_lg}px] w-[300px]`} src={img} alt="" />

      </div>

      <div className={`flex min-w-[${width_sm}px] lg:min-w-[${width_lg}px] px-[20px] gap-[10px] py-[10px] flex-col`}>
        <div className="flex justify-center">
          <div className="flex w-[100%] flex-col">
            <h3 className="text-gray-700 font-lato text-xs font-semibold leading-5">Mango</h3>
            <p className="text-gray-500 font-lato text-xs font-normal leading-10"> Kimono & Caftan - Black - Regular fit</p>
          </div>
            <Checkbox
            color="error" 
            value="xyz"  
           
            icon={<FavoriteBorderIcon/>}
            checkedIcon={<Favorite/>}
            />
          
             </div>

        <div className="flex gap-[10px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
              fill="#FFC000"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
              fill="#FFC000"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
              fill="#FFC000"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
              fill="#FFC000"
            />
          </svg>
          <p className="text-gray-500 text-center font-lato text-xs font-normal leading-5">(289)</p>
        </div>
        <div className="flex justify-start gap-[20px]">
          <p className="text-red-600 font-lato text-base font-extrabold leading-7">$228</p>
          <p className="text-gray-600 font-lato text-base font-normal leading-5 line-through">$290</p>
          <p className="text-red-600 font-lato text-xs font-normal leading-5">-10%</p>
        </div>
      </div>
    </div>
  );
}
