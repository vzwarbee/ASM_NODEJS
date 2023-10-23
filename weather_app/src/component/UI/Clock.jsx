import  { useEffect, useState } from 'react';
import React from "react";
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const [hour, minute, second] = formattedTime.split(':');

  return (
    <div>
      <h1 className='white'>
        {hour}:{minute}<span className='second'>{second}</span>
      </h1>
    </div>
  );
}

export default Clock;
