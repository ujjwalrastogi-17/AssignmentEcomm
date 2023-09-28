import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({
    hr: 0,
    mn: 0,
    sec: 0,
  });

  useEffect(() => {
    let { hr, mn, sec } = time;
    setInterval(() => {
      sec += 1;
      if (sec > 60) {
        mn += 1;
      }
      if (mn > 60) {
        hr += 1;
      }
      hr %= 24;
      mn %= 60;
      sec %= 60;

      setTime({
        hr,
        mn,
        sec,
      });
    }, 1000);
  });

  return (
    <div>
      <p>
        {time.hr} : {time.mn} : {time.sec}
      </p>
    </div>
  );
}
