export interface IProps {
  color: string;
  weight: string;
  size: number;
  isContent?: boolean;
  lineHeight?: number;
}

export interface IHeader extends IProps {
  text: string;
}
