// import React from "react";
import { useRef } from "react";

export default function SignUp() {
  const name = useRef<HTMLInputElement>(null);

  const email = useRef<HTMLInputElement>(null);

  const password = useRef<HTMLInputElement>(null);

  const handleClick=()=>{
        console.log(name,email,password);

        if(name.current?.value){
            localStorage.setItem('name',name.current.value);
            console.log(name.current.value);
        }
  }


  return (
    <div>
      <div className="input_space">
        <input type="text" placeholder="name" ref={name} />
      </div>
      <div className="input_space">
        <input type="text" placeholder="name" ref={email} />
      </div>
      <div className="input_space">
        <input type="text" placeholder="name" ref={password} />
      </div>
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
}
