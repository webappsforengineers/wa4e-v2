/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "vh2m2t",
  "appTitle": "Mudmat UU & CU VH2M2T",
  "appPageTitle": "6 DoF Loading Capacity of Shallow Foundations",
  "appDescription": "Undrained and consolidated undrained 6 DoF undrained capacity of rectangular mudmat",
  "appColour": "#c1476a",
  "appWebComponents": [
    {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Undrained and consolidated undrained 6 DoF capacity of rectangular mudmats with unlimited and zero tension interface for varying aspect ratio and embedment ratio (&alpha; = 1)",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables calculation of consolidated undrained ultimate limit states for rectangular skirted mudmats in a normally consolidated fine grained deposit under loading in six degrees of freedom as a function of magnitude of vertical preload and duration of consolidation. The app considers foundation aspect ratios B/L from 0.33 – 1 (square), embedment ratios d/B from 0 to 0.3, and fully rough skirt-soil roughness and unlimited tension interface. Increases in uniaxial and combined capacity were identified through results from coupled 3D FEA using a Modified Cam Clay constitutive model showing that the consolidated undrained failure envelope could be simply scaled from the (unconsolidated) undrained failure envelope solution. The critical state inspired (CSI) theoretical framework developed by Gourvenec et al. (2014, <a href=\"http://dx.doi.org/10.1680/geot\">http://dx.doi.org/10.1680/geot</a>. 13.P.101) is applied to predict the uniaxial capacities as a function of magnitude of preload and duration of consolidation. \nThe results and interpretation underpinning this app are published in <a href=\"http://dx.doi.org/10.1680/geot./14-P-090\"> “Consolidated undrained load-carrying capacity of mudmats under combined loading in six degrees-of-freedom” by Feng, X. & Gourvenec, S. (2015), Géotechnique, 65(7): 563-575.</a>",
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
            "label": "B/L (0.33 - 1)",
            "unit": null,
            "value": 0.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "doverB": {
            "label": "d/B (0 - 0.3)",
            "unit": null,
            "value": 0.05,
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
            "value": 2,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "c_v": {
            "label": "c<sub>v</sub>",
            "unit": "m<sup>2</sup>/year",
            "value": 10,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "gamma": {
            "label": "&gamma;&#39;",
            "unit": "kN/m<sup>3</sup>",
            "value": 6,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "T_lag": {
            "label": "T<sub>lag</sub>",
            "unit": "months",
            "value": 6,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Characteristic Loads and Eccentricities": {
          "V_c": {
            "label": "V<sub>p</sub>",
            "unit": "kN",
            "value": 700,
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
            "value": 100,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_yHx": {
            "label": "e<sub>zHx</sub>",
            "unit": "m",
            "value": 4,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHx": {
            "label": "e<sub>yHx</sub>",
            "unit": "m",
            "value": 3,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "H_yc": {
            "label": "H<sub>yc</sub>",
            "unit": "kN",
            "value": 120,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_xHy": {
            "label": "e<sub>xHy</sub>",
            "unit": "m",
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "e_zHy": {
            "label": "e<sub>zHy</sub>",
            "unit": "m",
            "value": 3,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "alpha_skirt": {
            "label": "&alpha;<sub>skirt</sub>",
            "unit": null,
            "value": 0.5,
            "visible": "",
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
          "lambda_s": {
            "label": "&lambda;<sub>s</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": []
    },
    {
      "type": "derived-input-tile",
      "title": "Derived Input",
      "fields": {
        "": {
          "fsufsigma_V": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>V</sub></sub>",
            "unit": null,
            "value": 0.439,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "fsufsigma_Hx": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>H<sub>x</sub></sub></sub>",
            "unit": null,
            "value": 0.919,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "fsufsigma_Hy": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>H<sub>y</sub></sub></sub>",
            "unit": null,
            "value": 0.919,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "fsufsigma_Mx": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>M<sub>x</sub></sub></sub>",
            "unit": null,
            "value": 0.354,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "fsufsigma_My": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>M<sub>y</sub></sub></sub>",
            "unit": null,
            "value": 0.538,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "fsufsigma_T": {
            "label": "f<sub>su</sub>f<sub>&sigma;<sub>T</sub></sub>",
            "unit": null,
            "value": 1.071,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "R_": {
            "label": "R",
            "unit": null,
            "value": 0.286,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "T_50": {
            "label": "T<sub>50</sub>",
            "unit": null,
            "value": 0.043,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "m": {
            "label": "m",
            "unit": null,
            "value": 1.05,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Partial Consolidation": {}
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
            "unit": "kNm",
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
          "title": "Using Input",
          "options": {
            "BOption": [
              null,
              "B",
              ""
            ],
            "lambda_sOption": [
              null,
              "&lambda;<sub>s</sub>",
              ""
            ]
          }
        }
      ]
    },
    {
      "type": "output-tile",
      "title": "Output",
      "fields": {
        "": {}
      },
      "subComponents": []
    },
    {
      "type": "output-tile",
      "title": "Output Table",
      "fields": {
        "": {}
      },
      "subComponents": [
        {
          "type": "input-table",
          "index": 0,
          "position": "afterTitle",
          "display": "",
          "title": " ",
          "content": {
            "0": {
              "header": [
                "Uniaxial (CU)",
                "",
                "",
                "Gain"
              ]
            },
            "1": {
              "label": "V<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "2": {
              "label": "H<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "3": {
              "label": "H<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kN",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "4": {
              "label": "M<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "5": {
              "label": "M<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "6": {
              "label": "T<sub>u,cons</sub>",
              "values": [
                [
                  null,
                  "kNm",
                  ""
                ],
                [
                  null,
                  "%",
                  ""
                ]
              ]
            },
            "7": {
              "label": "T<sub>v</sub>",
              "values": [
                [
                  null,
                  null,
                  ""
                ],
                [
                  "N/A",
                  null,
                  ""
                ]
              ]
            },
            "8": {
              "label": "U",
              "values": [
                [
                  null,
                  null,
                  ""
                ],
                [
                  "N/A",
                  null,
                  ""
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "type": "derived-input-tile",
      "title": "Model Coefficients",
      "fields": {
        "": {
          "fsufsigma_V": [
            0.439,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>V</sub></sub>",
            ""
          ],
          "fsufsigma_Hx": [
            0.919,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>H<sub>x</sub></sub></sub>",
            ""
          ],
          "fsufsigma_Hy": [
            0.919,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>H<sub>y</sub></sub></sub>",
            ""
          ],
          "fsufsigma_Mx": [
            0.354,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>M<sub>x</sub></sub></sub>",
            ""
          ],
          "fsufsigma_My": [
            0.538,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>M<sub>y</sub></sub></sub>",
            ""
          ],
          "fsufsigma_T": [
            1.071,
            null,
            "f<sub>su</sub>f<sub>&sigma;<sub>T</sub></sub>",
            ""
          ],
          "R_": [
            0.286,
            null,
            "R",
            ""
          ],
          "T_50": [
            0.043,
            null,
            "T<sub>50</sub>",
            ""
          ],
          "m": [
            1.05,
            null,
            "m",
            ""
          ]
        },
        "Partial Consolidation": {}
      },
      "subComponents": [
        {
          "type": "input-table",
          "index": 1,
          "position": "afterTitle",
          "display": "",
          "title": " ",
          "content": {
            "0": {
              "label": null,
              "values": [
                [
                  1.001,
                  null,
                  "g1<sub>v</sub>",
                  ""
                ],
                [
                  0.671,
                  null,
                  "g2<sub>v</sub>",
                  ""
                ]
              ]
            },
            "1": {
              "label": null,
              "values": [
                [
                  1.021,
                  null,
                  "g1<sub>H<sub>x</sub></sub>",
                  ""
                ],
                [
                  0.709,
                  null,
                  "g2<sub>H<sub>x</sub></sub>",
                  ""
                ]
              ]
            },
            "2": {
              "label": null,
              "values": [
                [
                  1.021,
                  null,
                  "g1<sub>H<sub>y</sub></sub>",
                  ""
                ],
                [
                  0.709,
                  null,
                  "g2<sub>H<sub>y</sub></sub>",
                  ""
                ]
              ]
            },
            "3": {
              "label": null,
              "values": [
                [
                  1.007,
                  null,
                  "g1<sub>M<sub>x</sub></sub>",
                  ""
                ],
                [
                  0.784,
                  null,
                  "g2<sub>M<sub>x</sub></sub>",
                  ""
                ]
              ]
            },
            "4": {
              "label": null,
              "values": [
                [
                  0.998,
                  null,
                  "g1<sub>M<sub>y</sub></sub>",
                  ""
                ],
                [
                  0.788,
                  null,
                  "g2<sub>M<sub>y</sub></sub>",
                  ""
                ]
              ]
            },
            "5": {
              "label": null,
              "values": [
                [
                  1.003,
                  null,
                  "g1<sub>T</sub>",
                  ""
                ],
                [
                  0.673,
                  null,
                  "g2<sub>T</sub>",
                  ""
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "type": "image-tile",
      "img_pth": "../../img/vh2m2t-figure.png",
      "img_w": "600px",
      "img_h": "600px"
    },
    {
      "type": "graph-tile",
      "fields": {
        "t_not_eq_0_H": null,
        "t_not_eq_0_M": null,
        "t_eq_0_H": null,
        "t_eq_0_M": null,
        "H": null,
        "M": null
      },
      "plots": {
        "plotSuKpc": {
          "layout": {
            "title": "",
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
            "showlegend": false,
            "mode": "lines",
            "line": {
              "shape": "spline"
            },
            "show": true
          },
          "args": [
            "t_not_eq_0_H",
            "t_not_eq_0_M",
            "t_eq_0_H",
            "t_eq_0_M",
            "H",
            "M"
          ],
          "addLines": false,
          "data": []
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