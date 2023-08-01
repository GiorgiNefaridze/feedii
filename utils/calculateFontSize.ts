interface IProps {
  (size: number): number;
}

export const calculateFontSize: IProps = (size) => {
  switch (size) {
    case 1:
      return 28;
    case 2:
      return 19;
    case 3:
      return 15;
    case 4:
      return 12;
    default:
      return 16;
  }
};
