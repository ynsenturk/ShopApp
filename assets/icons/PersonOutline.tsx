import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const PersonOutline = (props: SvgProps) => {
  return (
    <Svg width="31" height="32" viewBox="0 0 31 32" fill="none">
      <Path
        d="M21.9543 7.92308C21.6716 11.7358 18.7812 14.8462 15.6081 14.8462C12.4351 14.8462 9.53964 11.7365 9.26199 7.92308C8.97353 3.95673 11.786 1 15.6081 1C19.4303 1 22.2428 4.02885 21.9543 7.92308Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.6081 19.4615C9.3341 19.4615 2.96631 22.9231 1.78795 29.4567C1.64588 30.2442 2.09155 31 2.91583 31H28.3004C29.1254 31 29.5711 30.2442 29.4291 29.4567C28.25 22.9231 21.8822 19.4615 15.6081 19.4615V19.4615Z"
        stroke="black"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </Svg>
  );
};
