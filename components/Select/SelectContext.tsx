import { createContext, useContext } from "react";

export const SelectContext = createContext<{
  value: string;
  changeValue: (value: string) => void;
}>({
  value: "",
  changeValue: (value: string) => {},
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};
