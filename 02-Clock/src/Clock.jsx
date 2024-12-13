import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  if (sec === 60) {
    setSec(0);
    setMin(min + 1);
  }

  useEffect(() => {
    window.setTimeout(() => {
        setSec(sec + 1);
    }, 1000);
  });
  return (
    <h1>
        Min: {min} Sec: {sec}
    </h1>
  )
}

export default Clock