import {useRef, useCallback} from 'react';
import {Animated} from 'react-native';

const useSlideAnimation = (initialValue: number, duration = 300) => {
  const slideAnim = useRef(new Animated.Value(initialValue)).current;

  const animate = useCallback(
    (toValue: number) => {
      Animated.timing(slideAnim, {
        toValue,
        duration,
        useNativeDriver: false,
      }).start();
    },
    [slideAnim, duration],
  );

  return {slideAnim, animate};
};

export default useSlideAnimation;
