export interface IProps {
  text: string;
  width: number;
  borderColor: string;
  borderRadius: number;
  keyboardType: string;
  secure: boolean;
  value: string;
  handleChange: (e: string) => void;
  bgColor?: string;
  placeholderTextColor?: string;
  inpPadding?: number;
}
