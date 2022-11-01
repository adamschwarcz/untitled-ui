import { createContext, useContext } from "react";

const SelectContext = createContext<{
  value?: string;
  changeValue: (value: string) => void;
}>({
  value: "",
  changeValue: (value: string) => {},
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useSelectContext, SelectContext };
