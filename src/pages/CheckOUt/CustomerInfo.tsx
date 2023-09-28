import React from "react";
import { useForm } from "react-hook-form";

type FormValue = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  region: string;
  address: string;
  phoneNumber: string;
};

export default function CustomerInfo() {
  const form = useForm<FormValue>({
    defaultValues: {
      email: "abc@example.com",
    },
  });

  const { register, handleSubmit, formState } = form;

  const {errors} = formState;
  
  return <div></div>;
}
