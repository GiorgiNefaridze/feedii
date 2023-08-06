import { Dispatch, SetStateAction } from "react";

export interface IPros {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setToggle: Dispatch<SetStateAction<boolean>>;
  label: string;
  children?: JSX.Element;
}
