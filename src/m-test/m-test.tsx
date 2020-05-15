import React from "react";
import { Props } from "./interface";

const defaultProps = {};

const MTest: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>MTest</>;
};

export default MTest;
