import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const StarOutline = (props: SvgProps) => {
  return (
    <Svg width="35" height="32" viewBox="0 0 35 32" fill="none">
      <Path
        d="M33.7618 12.5385H21.358L17.608 1L13.858 12.5385H1.45412L11.5503 19.4615L7.65604 31L17.608 23.7885L27.5599 31L23.6657 19.4615L33.7618 12.5385Z"
        stroke="black"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
