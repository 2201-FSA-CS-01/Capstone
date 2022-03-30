import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [mentalValue, setMentalValue] = useState(0);
  let [physicalValue, setPhysicalValue] = useState(0);
  let [emotionalValue, setEmotionalValue] = useState(0);
  let [countdown, setCountdown] = useState();

  useEffect(() => {
    const mentalXP = async () => {
      const res = await fetch('/api/experience/mentalxp');
      const data = await res.json();
      setMentalValue(data);
    };
    mentalXP();
  }, []);
  useEffect(() => {
    const emotionalXP = async () => {
      const res = await fetch('/api/experience/emotionalxp');
      const data = await res.json();
      setEmotionalValue(data);
    };
    emotionalXP();
  }, []);
  useEffect(() => {
    const physicalXP = async () => {
      const res = await fetch('/api/experience/physicalxp');
      const data = await res.json();
      setPhysicalValue(data);
    };
    physicalXP();
  }, []);

  function submitMental() {
    if (mentalValue >= 100) {
      setMentalValue(100);
    } else {
      setMentalValue((prev) => prev + 20);
    }
  }

  function submitPhysical() {
    if (physicalValue >= 100) {
      setPhysicalValue(100);
    } else {
      setPhysicalValue((prev) => prev + 20);
    }
  }
  function submitEmotional() {
    if (emotionalValue >= 100) {
      setEmotionalValue(100);
    } else {
      setEmotionalValue((prev) => prev + 20);
    }
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
