declare module 'react-native-sfsymbols' {
  import React from 'react';
  import {ViewStyle, StyleProp} from 'react-native';

  interface SFSymbolProps {
    name: string;
    weight?:
      | 'ultralight'
      | 'light'
      | 'regular'
      | 'medium'
      | 'semibold'
      | 'bold'
      | 'heavy'
      | 'black';
    scale?: 'small' | 'medium' | 'large';
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  const SFSymbol: React.FC<SFSymbolProps>;
  export default SFSymbol;
}
