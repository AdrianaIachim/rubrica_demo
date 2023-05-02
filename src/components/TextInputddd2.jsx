import * as React from "react";
import { PlasmicTextInputddd2 } from "./plasmic/copy_of_demo_rubrica/PlasmicTextInputddd2";

function TextInputddd2_(props, ref) {
  const { plasmicProps } = PlasmicTextInputddd2.useBehavior(props, ref);
  return <PlasmicTextInputddd2 {...plasmicProps} />;
}

const TextInputddd2 = React.forwardRef(TextInputddd2_);

export default Object.assign(TextInputddd2, {
  __plumeType: "text-input"
});
