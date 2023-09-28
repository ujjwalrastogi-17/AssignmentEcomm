import { useAppSelector } from "../../redux/hooks";
import ComponentCard from "../ComponentCard/ComponentCard";

export default function ComponentRaw() {
  // const cartArray = useAppSelector((state) => state.CartArray.CartArray);
  const productArray = useAppSelector(
    (state) => state.ProductArray.ProductArray
  );

  const newAray = productArray.filter((item) => item.inCart);
  return (
    <div>
      {
        // cartArray.map((item)=>{
        //   const index = productArray.findIndex((product)=>product.id===item.id);
        //   const product = productArray[index];
        //   return <ComponentCard width_lg={400} width_sm={300} Card={product}/>
        // })

        newAray.map((item) => {
          return <ComponentCard width_lg={400} width_sm={300} Card={item} />;
        })
      }
    </div>
  );
}
