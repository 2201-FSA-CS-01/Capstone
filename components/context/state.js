import { createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [mentalValue, setMentalValue] = useState(10);
  let [physicalValue, setPhysicalValue] = useState(10);
  let [emotionalValue, setEmotionalValue] = useState(10);

  function submitMental() {
    setMentalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
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
