import { useAppSelector } from "../../redux/hooks";
import Card from "./Card";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Rough from "./Rough";
import OrderSummary from "./OrderSummary";
import ShippingAndPayment from "./ShippingAndPayment";
import ProductInfoFInal from "./ProductInfoFInal";
export default function CheckOut() {

  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    console.log(e);
    setValue(newValue);
  };
  const cardArr = useAppSelector((state) => state.CartArray.CartArray);
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  return (
    <div className="flex flex-col mt-[100px] w-[90%] m-auto gap-[100px]">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            className=""
            aria-label="Tabs example"
            onChange={handleChange}
            centered
          >
            <Tab
              className=""
              label="Cards"
              value="1"
            />
            <Tab label="Customer Info" value="2" />
            <Tab label="Shipping & Payment" value="3" />
            <Tab label="Product confirmation" value="4" />
          </TabList>

          <div className="flex flex-col items-center lg:flex-row w-[100%] justify-center gap-[50px]">
            <div className="w-[100%] md:w-[70%]">
              <TabPanel value="1">
                <div className="cards flex flex-col gap-[20px]">
                  <h3 className="font-lato">Cards</h3>
                  {cardArr.length ? (
                    cardArr.map((item) => {
                      const { id, quantity } = item;
                      const index = productArr.findIndex(
                        (card) => card.id === id
                      );
                      const product = productArr[index];
                      return (
                        <Card
                          Card={product}
                          quantity={quantity}
                        />
                      );
                    })
                  ) : (
                    <div className="h-[300px] flex justify-between items-center">
                      <h1 className="font-bold font-lato ">
                        NO ITEMS IN THE CART YET !
                      </h1>
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className=" w-[100%]">
                  <Rough />
                </div>
              </TabPanel>
              <TabPanel value="3">
                <ShippingAndPayment />
              </TabPanel>
              <TabPanel value="4">
                <ProductInfoFInal />
              </TabPanel>
            </div>

            <div className="w-[100%] lg:w-[25%] h-[600px] flex items-center">
              <OrderSummary />
            </div>
          </div>
        </Box>
      </TabContext>
    </div>
  );
}
