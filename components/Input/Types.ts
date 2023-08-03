export interface IProps {
  text: string;
  width: number;
  borderColor: string;
  borderRadius: number;
  keyboardType: string;
  secure: boolean;
  value: string;
  handleChange: () => void;
  bgColor?: string;
}
