export interface IProps {
  color: string;
  weight: string;
  size: number;
  lineHeight?: number;
}

export interface IHeader extends IProps {
  text: string;
}
