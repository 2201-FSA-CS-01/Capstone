import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [mentalValue, setMentalValue] = useState(0);
  let [physicalValue, setPhysicalValue] = useState(0);
  let [emotionalValue, setEmotionalValue] = useState(0);

  useEffect(() => {
    const mentalXP = async () => {
      const res = await fetch("/api/experience/mentalxp");
      const data = await res.json();
      setMentalValue(data);
    };
    mentalXP();
  }, []);
  useEffect(() => {
    const emotionalXP = async () => {
      const res = await fetch("/api/experience/emotionalxp");
      const data = await res.json();
      setEmotionalValue(data);
    };
    emotionalXP();
  }, []);
  useEffect(() => {
    const physicalXP = async () => {
      const res = await fetch("/api/experience/physicalxp");
      const data = await res.json();
      setPhysicalValue(data);
    };
    physicalXP();
  }, []);

  function submitMental() {
    if (mentalValue >= 100) return;
    setMentalValue((prev) => prev + 5);
  }

  // function decreaseMentalMeter() {
  //   console.log(mentalValue);
  //   if (mentalValue <= 0) return;
  //   return setMentalValue(mentalValue - 10);
  // }

  function submitPhysical() {
    setPhysicalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 5;
    });
  }
  function submitEmotional() {
    setEmotionalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 5;
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
