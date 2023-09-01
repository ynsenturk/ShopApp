import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowBack = (props: SvgProps) => {
  return (
    <Svg width="26" height="24" viewBox="0 0 26 24" fill="none">
      <Path
        d="M12 22L2 12L12 2"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.38889 12H23.6667"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
