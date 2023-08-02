export interface IProps {
  width: number;
  padding: number;
  bgColor: string;
  borderColor: string;
  borderRadius: number;
}

export interface IButton extends IProps {
  text: string;
  color: string;
  handlePress: () => void;
}
