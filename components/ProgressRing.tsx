// components/ProgressRing.tsx

import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

type Props = {
  progress: number; // 0 to 1
  radius?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
};

const ProgressRing = ({
  progress,
  radius = 100,
  strokeWidth = 8,
  color = '#FFD700',
  backgroundColor = '#e3e3e3',
}: Props) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.center}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressRing;
