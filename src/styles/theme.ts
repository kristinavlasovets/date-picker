import { Colors } from '@/constants/styles/colors';

import { ICommonTheme } from './types';

export const commonTheme: ICommonTheme = {
  fontWeights: {
    s: 400,
    m: 600,
    l: 700,
  },
  fontSizes: {
    xxs: 12,
    xs: 13,
    s: 14,
    m: 15,
  },
  colors: {
    DARK_GRAY: Colors.DARK_GRAY,
    GRAY: Colors.GRAY,
    LIGHT_GRAY: Colors.LIGHT_GRAY,
    BORDER_GRAY: Colors.BORDER_GRAY,
    DATE_BORDER_GRAY: Colors.DATE_BORDER_GRAY,
    DATE_TEXT_GRAY: Colors.DATE_TEXT_GRAY,
    DARK_BLUE: Colors.DARK_BLUE,
    BLUE: Colors.BLUE,
    LIGHT_BLUE: Colors.LIGHT_BLUE,
    WHITE: Colors.WHITE,
    BLACK: Colors.BLACK,
  },
  borderRadiuses: {
    s: 0,
    m: 8,
  },
  paddings: {
    xxs: 0,
    xs: 5,
    s: 10,
  },
  margins: {
    xxs: 0,
    xs: 8,
    s: 15,
  },
  width: {
    s: 16,
    m: 32,
    l: 36,
    xl: 100,
    xll: 172,
    xxl: 230,
    xxxl: 250,
    xxxxl: 530,
  },
  height: {
    s: 16,
    ss: 20,
    m: 29,
    l: 32,
    ll: 42,
    xl: 100,
    xxl: 241,
    xxxl: 319,
  },
};
