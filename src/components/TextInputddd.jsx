import * as React from "react";
import { PlasmicTextInputddd } from "./plasmic/copy_of_demo_rubrica/PlasmicTextInputddd";

function TextInputddd_(props, ref) {
  const { plasmicProps } = PlasmicTextInputddd.useBehavior(props, ref);
  return <PlasmicTextInputddd {...plasmicProps} />;
}

const TextInputddd = React.forwardRef(TextInputddd_);

export default Object.assign(TextInputddd, {
  __plumeType: "text-input"
});
