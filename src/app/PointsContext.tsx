import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context value
interface PointsContextType {
  points: number;
  addPoints: (amount: number) => void;
  resetPoints: () => void;
}

// Create the context with a default value
const PointsContext = createContext<PointsContextType | undefined>(undefined);

// Create the provider component
interface PointsProviderProps {
  children: ReactNode;
}

const PointsProvider: React.FC<PointsProviderProps> = ({ children }) => {
  const [points, setPoints] = useState<number>(0);

  const addPoints = (amount: number) => {
    setPoints((prevPoints) => prevPoints + amount);
  };

  const resetPoints = () => {
    setPoints(0);
  };

  return (
    <PointsContext.Provider value={{ points, addPoints, resetPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

// Custom hook to use the PointsContext
const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
};

export { PointsProvider, usePoints, PointsContext };
