import { createContext, useContext } from "react";

const SelectContext = createContext<{
  value: string;
  onChange: (option: string) => void;
}>({
  value: "",
  onChange: (option: string) => {},
});

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useSelectContext, SelectContext };
