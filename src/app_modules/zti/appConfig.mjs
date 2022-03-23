/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "zti",
  "appTitle": "Mudmat UTI & ZTI VH2M2T",
  "appPageTitle": "6 DoF Undrained Mudmat UTI & ZTI",
  "appColour": "#ed5151",
  "appDescription": "Undrained 6 DoF capacity of rectangular mudmat with unlimited and zero tension interface",
  "appWebComponents": [
    {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Undrained 6 DoF capacity of rectangular mudmats with unlimited and zero tension interface",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables sizing of a rectangular mudmats with either zero or unlimited tension interface for undrained ultimate limit state under loading in six degrees of freedom (V, H2, M2, T) on deposits with linearly increasing strength with depth. Mudmat aspect ratio can range from B/L of 0.33 – 1* and embedment ratio d/B from 0 up to 0.3*. The allowable capacity under the six-degree-of-freedom loading is expressed in terms of a two-dimensional failure envelope for the resultant horizontal and moment loading, after due allowance for the vertical and torsional components of load. The failure envelope framework allows for essentially instantaneous generation of failure envelopes and optimisation of a foundation design as a function of foundation dimension or material factor.\nDetails of the unlimited tension interface (UTI) solution is published in <a href=\"http://dx.doi.org/10.1680/geot.13.P.051\">“Design approach for rectangular mudmats under fully three dimensional loading” by Feng, X., Randolph, M. F., Gourvenec, S. & Wallerand, R. (2014), Géotechnique 64(1): 51-63, and the zero tension interface (ZTI) solution is published in <a href=\"http://dx.doi.org/10.1680/jgeot.16.P.097\">“Effect of interface condition on the undrained capacity of subsea mudmats under six degree-of-freedom loading”, Shen, Z., Feng, X. & Gourvenec, S. (2017), Géotechnique 67(4):338-349</a>\n*Note: The mudmat for the ZTI case is modelled as a surface foundation, such that with embedment is represented by a reduced ground level, capturing higher shear strength where it increases with depth.",
          "format": ""
        }
      }
    },
    {
      "type": "input-tile",
      "title": "Input",
      "fields": {
        "Mudmat Geometry": {
          "B": {
            "label": "B",
            "unit": "m",
            "value": 5,
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
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Characteristic Soil Shear Strength": {
          "s_um": {
            "label": "s<sub>um</sub>",
            "unit": "kPa",
            "value": 5,
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
          "gamma": {
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
            "value": 400,
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
            "value": 80,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_yHx": {
            "label": "e<sub>yHx</sub>",
            "unit": "m",
            "value": 3,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHx": {
            "label": "e<sub>zHx</sub>",
            "unit": "m",
            "value": 6,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_yc": {
            "label": "H<sub>yc</sub>",
            "unit": "kN",
            "value": 100,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_xHy": {
            "label": "e<sub>xHy</sub>",
            "unit": "m",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHy": {
            "label": "e<sub>zHy</sub>",
            "unit": "m",
            "value": 4,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "alpha_skirt": {
            "label": "&alpha;<sub>skirt</sub>",
            "unit": null,
            "value": 1,
            "lb": "",
            "ub": ""
          }
        },
        "Load and Material Factors (&#8805;1)": {
          "lambda_V": {
            "label": "&lambda;<sub>V</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lambda_H": {
            "label": "&lambda;<sub>H</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lambda_s_UTI": {
            "label": "&lambda;<sub>s,UTI</sub>",
            "unit": null,
            "value": 1.25,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lambda_s_ZTI": {
            "label": "&lambda;<sub>s,ZTI</sub>",
            "unit": null,
            "value": 1.25,
            "visible": "none",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": [
        {
          "type": "radio-tile",
          "index": 0,
          "position": "beforeTitle",
          "title": "Interface Condition",
          "options": {
            "UTI": {
              "check_status": true,
              "label": "Unlimited-tension Interface",
              "visible": ""
            },
            "ZTI": {
              "check_status": false,
              "label": "Zero-tension Interface",
              "visible": ""
            }
          },
          "onChange": {
            "UTI": {
              "fields": {
                "Load and Material Factors (&#8805;1)": {
                  "lambda_s_UTI": [
                    1.25,
                    null,
                    "&lambda;<sub>s,UTI</sub>",
                    ""
                  ],
                  "lambda_s_ZTI": [
                    1.25,
                    null,
                    "&lambda;<sub>s,ZTI</sub>",
                    "none"
                  ]
                }
              },
              "subComponents": {
                "0": {
                  "options": {
                    "lambda_sOption": [
                      null,
                      "&lambda;<sub>s,UTI</sub>",
                      ""
                    ]
                  }
                }
              }
            },
            "ZTI": {
              "fields": {
                "Load and Material Factors (&#8805;1)": {
                  "lambda_s_UTI": [
                    1.25,
                    null,
                    "&lambda;<sub>s,UTI</sub>",
                    "none"
                  ],
                  "lambda_s_ZTI": [
                    1.25,
                    null,
                    "&lambda;<sub>s,ZTI</sub>",
                    ""
                  ]
                }
              },
              "subComponents": {
                "0": {
                  "options": {
                    "lambda_sOption": [
                      null,
                      "&lambda;<sub>s,ZTI</sub>",
                      ""
                    ]
                  }
                }
              }
            }
          },
          "modifyOnClick": true
        }
      ]
    },
    {
      "type": "derived-input-tile",
      "title": "Derived Input",
      "fields": {
        "": {
          "L": {
            "label": "L",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "d": {
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
        "Factored Loads": {
          "V": {
            "label": "V",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_x": {
            "label": "H<sub>x</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_y": {
            "label": "H<sub>y</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H": {
            "label": "H",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "theta": {
            "label": "&theta;",
            "unit": "radians",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_y": {
            "label": "M<sub>y</sub>",
            "unit": "kNM",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_x": {
            "label": "M<sub>x</sub>",
            "unit": "kNM",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M": {
            "label": "M",
            "unit": "kNM",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "theta_M": {
            "label": "&theta;<sub>M</sub>",
            "unit": "radians",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "T": {
            "label": "T",
            "unit": "kNM",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": []
    },
    {
      "type": "optimization-tile",
      "title": "Optimization",
      "fields": {
        "": {
          "spareMomentCapacity": {
            "label": "SMC",
            "unit": "kNM",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "threshold": {
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
            "lambda_sOption": {
              "check_status": null,
              "label": "&lambda;<sub>s,UTI</sub>",
              "visible": ""
            }
          },
          "clearOnClick": true
        }
      ]
    },
    {
      "type": "output-tile",
      "title": "Output",
      "fields": {
        "Uniaxial (UU)": {
          "V_ult": {
            "label": "V<sub>ult</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_xult": {
            "label": "H<sub>xult</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_yult": {
            "label": "H<sub>yult</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_xult": {
            "label": "M<sub>xult</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_yult": {
            "label": "M<sub>yult</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "T_ult": {
            "label": "T<sub>ult</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Reduced Values Due to V": {
          "H_xmax": {
            "label": "H<sub>xmax</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_ymax": {
            "label": "H<sub>ymax</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_xmax": {
            "label": "M<sub>xmax</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_ymax": {
            "label": "M<sub>ymax</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "T_max": {
            "label": "T<sub>max</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "In Direction of Loading": {
          "H_max": {
            "label": "H<sub>max</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_max": {
            "label": "M<sub>max</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Further Reduced Values Due to T": {
          "H_max_red_T": {
            "label": "H<sub>max</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M_max_red_T": {
            "label": "M<sub>max</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": []
    },
    {
      "type": "graph-tile",
      "fields": {
        "UTI_H": null,
        "UTI_M": null,
        "UTI_leg": null,
        "ZTI_H": null,
        "ZTI_M": null,
        "ZTI_leg": null,
        "H_point": null,
        "M_point": null
      },
      "plots": {
        "momentLoad": {
          "args": [
            "UTI_H",
            "UTI_M",
            "UTI_leg",
            "ZTI_H",
            "ZTI_M",
            "ZTI_leg",
            "H_point",
            "M_point"
          ],
          "layout": {
            "title": "Design: - kN, - kN",
            "xaxis": {
              "title": "Resultant horizontal load (kN)"
            },
            "yaxis": {
              "title": "Resultant moment (kNm)"
            },
            "titlefont": {
              "family": "Roboto, sans-serif",
              "color": "#01579b",
              "size": 19
            },
            "showlegend": true
          },
          "addLines": false,
          "data": [],
          "display": "block"
        }
      },
      "updateConf": {
        "noNewData": false,
        "clearData": false
      }
    },
    {
      "type": "batch-tile",
      "title": "Batch Calculation"
    }
  ]
}