export interface ICommonTheme {
  fontWeights: {
    s: number;
    m: number;
    l: number;
  };
  fontSizes: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
  };
  colors: {
    DARK_GRAY: string;
    GRAY: string;
    LIGHT_GRAY: string;
    BORDER_GRAY: string;
    DATE_BORDER_GRAY: string;
    DATE_TEXT_GRAY: string;
    DARK_BLUE: string;
    BLUE: string;
    LIGHT_BLUE: string;
    WHITE: string;
    BLACK: string;
  };
  borderRadiuses: {
    s: number;
    m: number;
  };
  paddings: {
    xxs: number;
    xs: number;
    s: number;
  };
  margins: {
    xxs: number;
    xs: number;
    s: number;
  };
  width: {
    s: number;
    m: number;
    l: number;
    xl: number;
    xll: number;
    xxl: number;
    xxxl: number;
    xxxxl: number;
  };
  height: {
    s: number;
    ss: number;
    m: number;
    l: number;
    ll: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
}
