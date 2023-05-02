// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gAKbcXWngnVV2asmkth1no
// Component: G8gULkPO5MPtQ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 8QKExZLj5WBoM/component
import Footer from "../../Footer"; // plasmic-import: LXM0niw76eA/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_demo_rubrica.module.css"; // plasmic-import: gAKbcXWngnVV2asmkth1no/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: G8gULkPO5MPtQ/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHome__RenderFunc(props) {
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
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"defaultSite"}
            data-plasmic-override={overrides.defaultSite}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.defaultSite
            )}
          >
            <nav
              data-plasmic-name={"nav"}
              data-plasmic-override={overrides.nav}
              className={classNames(projectcss.all, sty.nav)}
            >
              {true ? (
                <Header
                  data-plasmic-name={"homepage"}
                  data-plasmic-override={overrides.homepage}
                  className={classNames("__wab_instance", sty.homepage)}
                />
              ) : null}
            </nav>
            {true ? (
              <section
                className={classNames(projectcss.all, sty.section__qqWG)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___8RtRk)}
                >
                  <div
                    data-plasmic-name={"columns"}
                    data-plasmic-override={overrides.columns}
                    className={classNames(projectcss.all, sty.columns)}
                  >
                    <div
                      data-plasmic-name={"column"}
                      data-plasmic-override={overrides.column}
                      className={classNames(projectcss.all, sty.column)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___4DTqj
                        )}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {"Rubrica Telefonica"}
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lnWqQ
                          )}
                        >
                          {"Per gli smemorati"}
                        </div>
                      </p.Stack>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            <section
              className={classNames(projectcss.all, sty.section___7Pcqw)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1RWwz)}
              >
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"Aggiungi tutti i tuoi amici nel modo più facile possibile!"}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__divKy
                  )}
                >
                  {
                    "Potrai aggiungere gli amici solo con un CLICK alla tua rubrica, visualizzare il loro compleanno e vedere tante altre informazioni per non fare brutta figura nel caso ti scordassi qualche loro informazione semplice!!!"
                  }
                </div>
              </p.Stack>
            </section>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__a0QIm)}>
                <div className={classNames(projectcss.all, sty.freeBox__fzihP)}>
                  <Footer
                    data-plasmic-name={"footer"}
                    data-plasmic-override={overrides.footer}
                    className={classNames("__wab_instance", sty.footer)}
                  />
                </div>
              </div>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  defaultSite: [
    "defaultSite",
    "nav",
    "homepage",
    "columns",
    "column",
    "h1",
    "h2",
    "footer"
  ],

  nav: ["nav", "homepage"],
  homepage: ["homepage"],
  columns: ["columns", "column", "h1"],
  column: ["column", "h1"],
  h1: ["h1"],
  h2: ["h2"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "defaultSite") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("defaultSite"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    homepage: makeNodeComponent("homepage"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Rubrica telefonica",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
