// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gAKbcXWngnVV2asmkth1no
// Component: jI-c4r3rkOtCN
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_demo_rubrica.module.css"; // plasmic-import: gAKbcXWngnVV2asmkth1no/projectcss
import sty from "./PlasmicProduct.module.css"; // plasmic-import: jI-c4r3rkOtCN/css
import neckties2103471920JpgJcky8BqPxlvW4 from "./images/neckties2103471920Jpg.jpg"; // plasmic-import: jcky8bqPxlv-W4/picture

export const PlasmicProduct__VariantProps = new Array();

export const PlasmicProduct__ArgProps = new Array("children", "slot");

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProduct__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__xf1VA)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: neckties2103471920JpgJcky8BqPxlvW4,
              fullWidth: 1920,
              fullHeight: 1280,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.children
      })}
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(projectcss.all, projectcss.h3, sty.h3)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Product title",
            value: args.slot
          })}
        </h3>
      </p.Stack>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h3"],
  freeBox: ["freeBox", "h3"],
  h3: ["h3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProduct__ArgProps,
          internalVariantPropNames: PlasmicProduct__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProduct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProduct";
  } else {
    func.displayName = `PlasmicProduct.${nodeName}`;
  }
  return func;
}

export const PlasmicProduct = Object.assign(
  // Top-level PlasmicProduct renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicProduct
    internalVariantProps: PlasmicProduct__VariantProps,
    internalArgProps: PlasmicProduct__ArgProps
  }
);

export default PlasmicProduct;
/* prettier-ignore-end */
