/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "pinpiles",
  "appTitle": "Mudmat & Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T",
  "appPageTitle": "Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T",
  "appDescription": "Undrained 6 DoF capacity of rectangular skirted mudmat and pinpiled mudmats",
  "appColour": "#698ef1",
  "appWebComponents": [
    {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Undrained 6 DoF capacity of 2:1 rectangular skirted mudmats, pile groups and hybrid piled-mudmats",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables sizing of a skirted* mudmats and hybrid pin-piled mudmats for undrained ultimate limit state under loading in six degrees of freedom (V, H2, M2, T) on deposits with varying linearly increasing strength with depth. Mudmat aspect ratio is fixed at B/L = 0.5 while embedment ratio d/B can range from 0 up to 0.3. An unlimited tension interface is assumed between the underside of the mudmat and the soil while the skirt-soil interface roughness can range from smooth (&alpha; = 0) to fully rough (&alpha; = 1). Load distribution between the mudmat and piles can be explored by considering each part separately or together. The allowable capacity under the six-degree-of-freedom loading is expressed in terms of a two-dimensional failure envelope for the resultant horizontal and moment loading, after due allowance for the vertical and torsional components of load. The failure envelope framework allows for optimization of foundation size through minimum foundation breadth, embedment ratio or material factor. \nThe results and framework for the mudmat solution are described in detail in <a href=\"http://dx.doi.org/10.1680/geot.13.P.051\"> “Design approach for rectangular mudmats under fully three dimensional loading” by Feng, X., Randolph, M. F., Gourvenec, S. & Wallerand, R. (2014), Géotechnique 64(1): 51-63.</a>\n*Note: The skirted mudmat is modelled as a solid rigid plug on the assumption that sufficient internal skirts are provided to ensure structural stability of the skirted foundation and no geotechnical failure mechanism within the skirted compartment. The assumption of the skirted geometry justifies the unlimited tension interface under overturning moment at low vertical loads.\n",
          "format": ""
        }
      }
    },
    {
      "type": "input-tile",
      "title": "Input",
      "fields": {
        "Characteristic Soil Shear Strength": {
          "s_um": {
            "label": "s<sub>um</sub>",
            "unit": "kPa",
            "value": 0.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "k": {
            "label": "k",
            "unit": "kPa/m",
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "gam_dash": {
            "label": "&gamma;&#39;<sub>avg</sub>",
            "unit": "kN/m<sup>3</sup>",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Characteristic Loads and Eccentricities": {
          "V_c": {
            "label": "V<sub>p</sub>",
            "unit": "kN",
            "value": 600,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_xV": {
            "label": "e<sub>xV</sub>",
            "unit": "m",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_yV": {
            "label": "e<sub>yV</sub>",
            "unit": "m",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_xc": {
            "label": "H<sub>xc</sub>",
            "unit": "kN",
            "value": 50,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_yHx": {
            "label": "e<sub>yHx</sub>",
            "unit": "m",
            "value": 2,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHx": {
            "label": "e<sub>zHx</sub>",
            "unit": "m",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_yc": {
            "label": "H<sub>yc</sub>",
            "unit": "kN",
            "value": 90,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_xHy": {
            "label": "e<sub>xHy</sub>",
            "unit": "m",
            "value": 3,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHy": {
            "label": "e<sub>zHy</sub>",
            "unit": "m",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Relative Loads Taken By Piles": {
          "beta_pV": {
            "label": "&beta;<sub>pV</sub>",
            "unit": null,
            "value": "Select Foundation",
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "beta_pH": {
            "label": "&beta;<sub>pH</sub>",
            "unit": null,
            "value": "Select Foundation",
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "beta_pM": {
            "label": "&beta;<sub>pM</sub>",
            "unit": null,
            "value": "Select Foundation",
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Load and Material Factors (&#8805;1)": {
          "lambda_V": {
            "label": "&lambda;<sub>V</sub>",
            "unit": null,
            "value": 1.1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lambda_H": {
            "label": "&lambda;<sub>H</sub>",
            "unit": null,
            "value": 1.35,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lambda_s": {
            "label": "&lambda;<sub>s</sub>",
            "unit": null,
            "value": 1.25,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Mudmat Geometry": {
          "B": {
            "label": "B",
            "unit": "m",
            "value": 7.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "BoverL": {
            "label": "B/L",
            "unit": null,
            "value": 0.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "doverB": {
            "label": "d<sub>skirt</sub>/B (0-0.3)",
            "unit": null,
            "value": 0.081,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Skirt-soil Interaction": {
          "alpha_skirt": {
            "label": "&alpha;<sub>skirt</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Pile Group Geometry": {
          "D_pile": {
            "label": "D<sub>pile</sub>",
            "unit": "m",
            "value": 0.9,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "W_pile": {
            "label": "W<sub>pile</sub>",
            "unit": "kN",
            "value": 40,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "B_piles": {
            "label": "B<sub>piles</sub> (0-9.10)",
            "unit": "m",
            "value": 6,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "L_piles": {
            "label": "L<sub>piles</sub> (0-19.10)",
            "unit": null,
            "value": 13,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "L_embed": {
            "label": "L<sub>embed</sub>",
            "unit": "m",
            "value": 9,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "d_shadow_over_d": {
            "label": "d<sub>shadow</sub>/d<sub>skirt</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Pile-soil Interaction": {
          "alpha_piles": {
            "label": "&alpha;<sub>piles</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Nc_piles": {
            "label": "N<sub>c,piles</sub>",
            "unit": null,
            "value": 9,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "f_end_t": {
            "label": "f<sub>end,t</sub>",
            "unit": null,
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": [
        {
          "type": "radio-tile",
          "index": 4,
          "position": "beforeTitle",
          "display": "",
          "title": "Foundation",
          "options": {
            "mudmatFoundationOnly": {
              "check_status": null,
              "label": "Mudmat Foundation Only",
              "visible": ""
            },
            "pileGroupOnly": {
              "check_status": null,
              "label": "Pile Group Only",
              "visible": ""
            },
            "hybridPiledMudmat": {
              "check_status": null,
              "label": "Hybrid Piled Mudmat",
              "visible": ""
            }
          },
          "onChange": {
            "mudmatFoundationOnly": {
              "fields": {
                "Relative Loads Taken By Piles": {
                  "beta_pV": [
                    0.332,
                    null,
                    "&beta;<sub>pV</sub>",
                    ""
                  ],
                  "beta_pH": [
                    0.776,
                    null,
                    "&beta;<sub>pH</sub>",
                    ""
                  ],
                  "beta_pM": [
                    0.478,
                    null,
                    "&beta;<sub>pM</sub>",
                    ""
                  ]
                }
              }
            },
            "pileGroupOnly": {
              "fields": {
                "Relative Loads Taken By Piles": {
                  "beta_pV": [
                    0.332,
                    null,
                    "&beta;<sub>pV</sub>",
                    ""
                  ],
                  "beta_pH": [
                    0.776,
                    null,
                    "&beta;<sub>pH</sub>",
                    ""
                  ],
                  "beta_pM": [
                    0.478,
                    null,
                    "&beta;<sub>pM</sub>",
                    ""
                  ]
                }
              }
            },
            "hybridPiledMudmat": {
              "fields": {
                "Relative Loads Taken By Piles": {
                  "beta_pV": [
                    0.332,
                    null,
                    "&beta;<sub>pV</sub>",
                    ""
                  ],
                  "beta_pH": [
                    0.747,
                    null,
                    "&beta;<sub>pH</sub>",
                    ""
                  ],
                  "beta_pM": [
                    0.287,
                    null,
                    "&beta;<sub>pM</sub>",
                    ""
                  ]
                }
              }
            }
          },
          "modifyOnClick": true
        }
      ],
      "helpText": "Helpful text!"
    },
    {
      "type": "derived-input-tile",
      "title": "Derived Input",
      "fields": {
        "Mat": {
          "L": {
            "label": "L",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "d_skirt": {
            "label": "d<sub>skirt</sub>",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "A": {
            "label": "A",
            "unit": "m<sup>2</sup>",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "s_u0": {
            "label": "s<sub>u0</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "kappa": {
            "label": "&kappa;(0-10)",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Pile": {
          "L_embed_overB_piles": {
            "label": "L<sub>embed</sub>/B<sub>piles</sub>",
            "unit": null,
            "value": null,
            "lb": "",
            "ub": ""
          },
          "d_shadow": {
            "label": "d<sub>shadow</sub>",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "theta_piles": {
            "label": "&theta;<sub>piles</sub>",
            "unit": "rads",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "theta_piles_degrees": {
            "label": "&theta;<sub>piles</sub>",
            "unit": "rads",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "s_u_pavg": {
            "label": "s<sub>u,pagv</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "s_u_ptip": {
            "label": "s<sub>u,ptip</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": [
        {
          "type": "input-table",
          "index": 1,
          "position": "afterContent",
          "display": "",
          "title": "",
          "content": {
            "0": {
              "header": [
                "Design Loads",
                "",
                "Mudmat Share",
                "Pile Group Share"
              ]
            },
            "1": {
              "label": "V",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ]
              ]
            },
            "2": {
              "label": "H<sub>x</sub>",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ]
              ]
            },
            "3": {
              "label": "H<sub>y</sub>",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ]
              ]
            },
            "4": {
              "label": "H",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "kN",
                  ""
                ]
              ]
            },
            "5": {
              "label": "&theta;",
              "values": [
                [
                  null,
                  "rads",
                  ""
                ],
                [
                  null,
                  "degs",
                  ""
                ]
              ]
            },
            "6": {
              "label": "M<sub>x</sub>",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ]
              ]
            },
            "7": {
              "label": "M<sub>y</sub>",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ]
              ]
            },
            "8": {
              "label": "M",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ]
              ]
            },
            "9": {
              "label": "&theta;<sub>M</sub>",
              "values": [
                [
                  null,
                  "rads",
                  ""
                ],
                [
                  null,
                  "degs",
                  ""
                ]
              ]
            },
            "10": {
              "label": "T",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "kNm",
                  ""
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "type": "graph-tile",
      "fields": {
        "zt_H": null,
        "zt_M": null,
        "T_H": null,
        "T_M": null,
        "H_m": null,
        "M_m": null,
        "t0_H": null,
        "t0_M": null,
        "tn0_H": null,
        "tn0_M": null,
        "H_p": null,
        "M_p": null,
        "mudMatTlabel": 0,
        "pileGroupTlabel": 0
      },
      "plots": {
        "mudmatDesign": {
          "layout": {
            "title": "<b>Mudmat Design</b>",
            "titlefont": {
              "family": "Roboto, sans-serif",
              "color": "#01579b",
              "size": 19
            },
            "xaxis": {
              "title": "Resultant horizontal load, H<sub>mudmat</sub> (kN)"
            },
            "yaxis": {
              "title": "Resultant moment (kNm)"
            },
            "showlegend": true,
            "legend": {
              "yanchor": "top",
              "x": 0,
              "y": 2.1
            }
          },
          "args": [
            "zt_H",
            "zt_M",
            "T_H",
            "T_M",
            "H_m",
            "M_m",
            "mudMatTlabel"
          ],
          "addLines": false,
          "data": [],
          "show": true
        },
        "inSituUndrainedStresses": {
          "layout": {
            "title": "<b>Pile Group Design</b>",
            "titlefont": {
              "family": "Roboto, sans-serif",
              "color": "#01579b",
              "size": 19
            },
            "xaxis": {
              "title": "Resultant horizontal load, H<sub>piles</sub> (kN)"
            },
            "yaxis": {
              "title": "Resultant moment (kNm)"
            },
            "showlegend": true,
            "legend": {
              "yanchor": "top",
              "x": 0,
              "y": 2.1
            }
          },
          "args": [
            "t0_H",
            "t0_M",
            "tn0_H",
            "tn0_M",
            "H_p",
            "M_p",
            "pileGroupTlabel"
          ],
          "addLines": false,
          "data": [],
          "show": true
        }
      },
      "updateConf": {
        "noNewData": false,
        "clearData": false
      }
    },
    {
      "type": "image-tile",
      "img_pth": "../../img/pinpiles-figure.png",
      "img_w": "370px",
      "img_h": "356px"
    },
    {
      "type": "optimization-tile",
      "title": "Optimization",
      "fields": {
        "": {
          "SMClessTotal": {
            "label": "SMC - Total",
            "unit": "kNM",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Threshold": {
            "label": "Threshold",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "solution": {
            "label": "Solution",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "solution_beta_pV": {
            "label": "&beta;<sub>pV</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "solution_beta_pH": {
            "label": "&beta;<sub>pH</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "solution_beta_pM": {
            "label": "&beta;<sub>pM</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": [
        {
          "type": "radio-tile",
          "index": 0,
          "position": "afterTitle",
          "display": "",
          "title": "Using Input",
          "options": {
            "BOption": {
              "check_status": null,
              "label": "B",
              "visible": ""
            },
            "doverBOption": {
              "check_status": null,
              "label": "d<sub>skirt</sub>/B",
              "visible": ""
            },
            "lambda_HOption": {
              "check_status": null,
              "label": "&lambda;<sub>H</sub>",
              "visible": ""
            },
            "lambda_sOption": {
              "check_status": null,
              "label": "&lambda;<sub>s</sub>",
              "visible": ""
            }
          },
          "clearOnClick": true
        }
      ]
    },
    {
      "type": "batch-tile",
      "title": "Batch Calculation"
    }
  ]
}