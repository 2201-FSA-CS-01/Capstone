import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [mentalValue, setMentalValue] = useState(100);
  let [physicalValue, setPhysicalValue] = useState(100);
  let [emotionalValue, setEmotionalValue] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mentalValue <= 0) return;
      return setMentalValue((prev) => prev - 5);
    }, 10000);
    return () => clearInterval(interval);
  }, [mentalValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (physicalValue <= 0) return;
      return setPhysicalValue((prev) => prev - 5);
    }, 10000);
    return () => clearInterval(interval);
  }, [physicalValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emotionalValue <= 0) return;
      return setEmotionalValue((prev) => prev - 5);
    }, 10000);
    return () => clearInterval(interval);
  }, [emotionalValue]);

  function submitMental() {
    if (mentalValue >= 100) return;
    setMentalValue(mentalValue + 10);
  }

  // function decreaseMentalMeter() {
  //   console.log(mentalValue);
  //   if (mentalValue <= 0) return;
  //   return setMentalValue(mentalValue - 10);
  // }

  function submitPhysical() {
    setPhysicalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
  function submitEmotional() {
    setEmotionalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }

  let sharedState = {
    mentalValue: mentalValue,
    physicalValue: physicalValue,
    emotionalValue: emotionalValue,

    submitMental: submitMental,
    submitPhysical: submitPhysical,
    submitEmotional: submitEmotional,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
