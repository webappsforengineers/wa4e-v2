/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "vhm",
  "appTitle": "Shallow Foundation VHM",
  "appPageTitle": "Undrained VHM Capacity",
  "appDescription": "Undrained combined load capacity of circular skirted foundations",
  "appColour": "#75dff4",
  "appWebComponents": {
    "0": {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Undrained planar VHM capacity for circular foundations for varying embedment ratio & soil strength heterogeneity.",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables calculation of minimum diameter, embedment depth or material factor to ensure undrained ultimate limit state is not reached for circular skirted* foundations under planar VHM loading and soil profiles of varying strength heterogeneity. The approximating expressions for the uniaxial capacities and failure envelopes are derived from finite element analysis results adopting a Tresca constitutive model. The results are published in <a href=\"http://dx.doi.org/10.1680/geolett.14.00010\">“A generalized failure envelope for undrained capacity of circular shallow foundations under general loading“ by Vulpe, C., Gourvenec, S. & Power, M. (2014),  Géotechnique Letters</a> \n *Note: The skirted foundation is modelled as a solid rigid plug on the assumption that sufficient internal skirts are provided in practice to ensure structural stability of the skirted foundation and no geotechnical failure mechanism within the skirted compartment. The assumption of the skirted geometry justifies the unlimited tension interface under overturning moment at low vertical loads. ",
          "format": ""
        }
      }
    },
    "1": {
      "type": "input-tile",
      "title": "Input",
      "fields": {
        "Foundation Properties": {
          "D": {
            "label": "D",
            "unit": "m",
            "value": 10,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "d": {
            "label": "d",
            "unit": "m",
            "value": 4,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Soil Properties": {
          "sum": {
            "label": "s<sub>um</sub>",
            "unit": "kPa",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "K": {
            "label": "k<sub>su</sub>(0-50)",
            "unit": "kPa/m",
            "value": 2,
            "lb": "",
            "ub": ""
          }
        },
        "Loads": {
          "Vd": {
            "label": "V<sub>d</sub>",
            "unit": "kN",
            "value": 4000,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Hd": {
            "label": "H<sub>d</sub>",
            "unit": "kN",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Md": {
            "label": "M<sub>d</sub>",
            "unit": "kNm",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Vl": {
            "label": "V<sub>l</sub>",
            "unit": "kN",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Hl": {
            "label": "H<sub>l</sub>",
            "unit": "kN",
            "value": 2000,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Ml": {
            "label": "M<sub>l</sub>",
            "unit": "kNm",
            "value": 7000,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Partial Factors": {
          "lam_d": {
            "label": "&lambda;<sub>d</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lam_l": {
            "label": "&lambda;<sub>l</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lam_mt": {
            "label": "&lambda;<sub>m</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": [
        {
          "type": "radio-tile",
          "index": 3,
          "position": "afterContent",
          "title": "Plot Type",
          "options": {
            "0": {
              "check_status": true,
              "label": "N/A",
              "visible": ""
            },
            "1": {
              "check_status": null,
              "label": "D",
              "visible": ""
            },
            "2": {
              "check_status": null,
              "label": "d",
              "visible": ""
            },
            "3": {
              "check_status": null,
              "label": "s<sub>um,f</sub>",
              "visible": ""
            },
            "4": {
              "check_status": null,
              "label": "k<sub>su,f</sub>",
              "visible": ""
            },
            "5": {
              "check_status": null,
              "label": "&lambda;<sub>m</sub>",
              "visible": ""
            }
          },
          "onChange": {
            "hhmm_opt": {
              "plots": {
                "hhmm": {
                  "display": "flex"
                },
                "HfMf": {
                  "display": "none"
                }
              }
            },
            "HfMf_opt": {
              "plots": {
                "hhmm": {
                  "display": "none"
                },
                "HfMf": {
                  "display": "flex"
                }
              }
            }
          },
          "modifyOnClick": true
        },
        {
          "type": "radio-tile",
          "index": 3,
          "position": "afterContent",
          "title": "Optimize",
          "options": {
            "0": [
              true,
              "N/A",
              ""
            ],
            "1": [
              null,
              "D",
              ""
            ],
            "2": [
              null,
              "d",
              ""
            ],
            "3": [
              null,
              "s<sub>um,f</sub>",
              ""
            ],
            "4": [
              null,
              "k<sub>su,f</sub>",
              ""
            ],
            "5": [
              null,
              "&lambda;<sub>m</sub>",
              ""
            ]
          }
        }
      ]
    },
    "2": {
      "type": "derived-input-tile",
      "title": "Derived Input",
      "fields": {
        "": {
          "dD": {
            "label": "d/D (0-0.5)",
            "unit": null,
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
          "k": {
            "label": "&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;100)",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "su0": {
            "label": "s<sub>u0</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "su0f": {
            "label": "s<sub>u0,f</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Vf": {
            "label": "V<sub>f</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Hf": {
            "label": "H<sub>f</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Mf": {
            "label": "M<sub>f</sub>",
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
    "3": {
      "type": "output-tile",
      "title": "Output",
      "fields": {
        "": {
          "NcV": {
            "label": "N<sub>cV</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "NcH": {
            "label": "N<sub>cH</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "NcM": {
            "label": "N<sub>cM</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Vult": {
            "label": "V<sub>ult</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Hult": {
            "label": "H<sub>ult</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Mult": {
            "label": "M<sub>ult</sub>",
            "unit": "kNm",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "v": {
            "label": "v = V<sub>f</sub>/V<sub>ult</sub>",
            "unit": null,
            "value": null,
            "lb": "",
            "ub": ""
          },
          "h": {
            "label": "h = V<sub>f</sub>/H<sub>ult</sub>",
            "unit": null,
            "value": null,
            "lb": "",
            "ub": ""
          },
          "m": {
            "label": "m = M<sub>f</sub>/M<sub>ult</sub>",
            "unit": null,
            "value": null,
            "lb": "",
            "ub": ""
          },
          "hh_star": {
            "label": "h/h*",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "mm_star": {
            "label": "m/m*",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Optimized": {
          "sum_opt": {
            "label": "s<sub>um</sub>(opt)",
            "unit": "kPa",
            "value": "N/A",
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "function_opt": {
            "label": "function<sub>opt</sub>",
            "unit": null,
            "value": "N/A",
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": []
    },
    "4": {
      "type": "graph-tile",
      "fields": {
        "hh_star": null,
        "mm_star": null,
        "Hf": null,
        "Mf": null,
        "hh": null,
        "mm": null,
        "Hultvec": null,
        "Multvec": null,
        "f1": null
      },
      "plots": {
        "hhmm": {
          "layout": {
            "title": "<b>Failure envelope & factored load in terms of normalised (h/h*, m/m*)</b>",
            "xaxis": {
              "title": "h/h*"
            },
            "yaxis": {
              "title": "m/m*"
            },
            "titlefont": {
              "family": "Roboto, sans-serif",
              "color": "#01579b",
              "size": 19
            }
          },
          "args": [
            "hh",
            "mm",
            "hh_star",
            "mm_star",
            "f1"
          ],
          "addLines": false,
          "data": [],
          "display": "block"
        },
        "HfMf": {
          "layout": {
            "title": "<b>Failure envelope & factored load in terms of factored (H<sub>f</sub>, M<sub>f</sub>)</b>",
            "xaxis": {
              "title": "H<sub>f</sub> (kN)"
            },
            "yaxis": {
              "title": "M<sub>f</sub> (kNm)"
            },
            "titlefont": {
              "family": "Roboto, sans-serif",
              "color": "#01579b",
              "size": 19
            }
          },
          "args": [
            "Hultvec",
            "Multvec",
            "Hf",
            "Mf",
            "f1"
          ],
          "addLines": false,
          "data": [],
          "display": "none"
        }
      },
      "updateConf": {
        "noNewData": false,
        "clearData": false
      }
    },
    "5": {
      "type": "image-tile",
      "img_pth": "../../img/vhm-figure.png",
      "img_w": "650px",
      "img_h": "340px"
    },
    "6": {
      "type": "batch-tile",
      "title": "Batch Calculation"
    }
  }
}