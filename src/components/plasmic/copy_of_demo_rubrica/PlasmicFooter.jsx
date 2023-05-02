// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gAKbcXWngnVV2asmkth1no
// Component: LXM0niw76eA
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
import sty from "./PlasmicFooter.module.css"; // plasmic-import: LXM0niw76eA/css
import UsersvgIcon from "./icons/PlasmicIcon__Usersvg"; // plasmic-import: UGSBNQax32uSC1/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: Nfvb0kir8BzhFA/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 78kseT_i641NRo/icon
import animalpngMxQlfAubQ5KjX8 from "./images/animalpng.png"; // plasmic-import: MxQLFAubQ5kjX8/picture

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooter__RenderFunc(props) {
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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__iSgX3)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.columns___0JwVi)}>
              <div className={classNames(projectcss.all, sty.column__enWwk)}>
                <div className={classNames(projectcss.all, sty.freeBox__v9Hxc)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__iicdU)}
                    >
                      <UsersvgIcon
                        className={classNames(projectcss.all, sty.svg___0U9Ui)}
                        role={"img"}
                      />

                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__qoy1B
                        )}
                        href={"https://www.plasmic.app/"}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#000000" }}
                          >
                            {"Accedi"}
                          </span>
                        </React.Fragment>
                      </a>
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__fa0Ci
                        )}
                        href={"https://www.plasmic.app/"}
                      >
                        {"Some link text"}
                      </a>
                    </div>
                  ) : null}
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__p3Vh)}
                />
              </div>
              {true ? (
                <div className={classNames(projectcss.all, sty.column__qzZAi)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__onsT0)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__thId)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"130px"}
                      loading={"lazy"}
                      src={{
                        src: animalpngMxQlfAubQ5KjX8,
                        fullWidth: 512,
                        fullHeight: 512,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              ) : null}
              <div className={classNames(projectcss.all, sty.column___4KPO)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___1GroM)}
                >
                  <SearchsvgIcon
                    className={classNames(projectcss.all, sty.svg___75Og3)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.columns__o6VrZ)}>
            <div className={classNames(projectcss.all, sty.column__xa87)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jJkBd)}
              >
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__lNvGx
                  )}
                  href={`/Login`}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__lWib)}
                      role={"img"}
                    />
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__q3Vt)}
                    >
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link___4JkJt
                        )}
                        href={`/privacyPolicy`}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jkC5
                          )}
                          onClick={async event => {
                            const $steps = {};
                            $steps["goToLogin"] = true
                              ? (() => {
                                  const actionArgs = {
                                    destination: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "navigation",
                                        interactionUuid: "uR4tru2WMKc",
                                        componentUuid: "LXM0niw76eA",
                                        argName: "destination"
                                      },
                                      () => `/privacyPolicy`
                                    )
                                  };
                                  return __wrapUserFunction(
                                    {
                                      type: "InteractionLoc",
                                      actionName: "navigation",
                                      interactionUuid: "uR4tru2WMKc",
                                      componentUuid: "LXM0niw76eA"
                                    },
                                    () =>
                                      (({ destination }) => {
                                        location.assign(destination);
                                      })?.apply(null, [actionArgs]),
                                    actionArgs
                                  );
                                })()
                              : undefined;
                            if (
                              typeof $steps["goToLogin"] === "object" &&
                              typeof $steps["goToLogin"].then === "function"
                            ) {
                              $steps["goToLogin"] = await __wrapUserPromise(
                                {
                                  type: "InteractionLoc",
                                  actionName: "navigation",
                                  interactionUuid: "uR4tru2WMKc",
                                  componentUuid: "LXM0niw76eA"
                                },
                                $steps["goToLogin"]
                              );
                            }
                          }}
                        >
                          {"Privacy Policy"}
                        </div>
                      </a>
                    </div>
                  ) : null}
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__sh8Pt)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__yl2Mo
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__dAzlC)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qr4E
                    )}
                  >
                    {""}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___6Pku)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>
            </div>
            <div className={classNames(projectcss.all, sty.column__unsmL)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rIpfm)}
                displayHeight={"100%"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"130px"}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToHome"] = true
                    ? (() => {
                        const actionArgs = {};
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "huW0QD6TiR7",
                            componentUuid: "LXM0niw76eA"
                          },
                          () =>
                            (({ destination }) => {
                              location.assign(destination);
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["goToHome"] === "object" &&
                    typeof $steps["goToHome"].then === "function"
                  ) {
                    $steps["goToHome"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "navigation",
                        interactionUuid: "huW0QD6TiR7",
                        componentUuid: "LXM0niw76eA"
                      },
                      $steps["goToHome"]
                    );
                  }
                }}
                src={{
                  src: animalpngMxQlfAubQ5KjX8,
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__rzBc)}>
              <div className={classNames(projectcss.all, sty.freeBox__jiB60)}>
                {true ? (
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___06TR4
                    )}
                    href={`/termini&condizioni`}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5VlE
                      )}
                      onClick={async event => {
                        const $steps = {};
                        $steps["goToTerminiECondizioni"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: __wrapUserFunction(
                                  {
                                    type: "InteractionArgLoc",
                                    actionName: "navigation",
                                    interactionUuid: "V7kKQCRA8",
                                    componentUuid: "LXM0niw76eA",
                                    argName: "destination"
                                  },
                                  () => `/termini&condizioni`
                                )
                              };
                              return __wrapUserFunction(
                                {
                                  type: "InteractionLoc",
                                  actionName: "navigation",
                                  interactionUuid: "V7kKQCRA8",
                                  componentUuid: "LXM0niw76eA"
                                },
                                () =>
                                  (({ destination }) => {
                                    location.assign(destination);
                                  })?.apply(null, [actionArgs]),
                                actionArgs
                              );
                            })()
                          : undefined;
                        if (
                          typeof $steps["goToTerminiECondizioni"] ===
                            "object" &&
                          typeof $steps["goToTerminiECondizioni"].then ===
                            "function"
                        ) {
                          $steps["goToTerminiECondizioni"] =
                            await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "V7kKQCRA8",
                                componentUuid: "LXM0niw76eA"
                              },
                              $steps["goToTerminiECondizioni"]
                            );
                        }
                      }}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#000000" }}
                        >
                          {"Termini e Condizioni"}
                        </span>
                      </React.Fragment>
                    </div>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
