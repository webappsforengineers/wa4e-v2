/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "sliding-plet",
  "appTitle": "Sliding PLET",
  "appPageTitle": "Sliding PLET",
  "appColour": "#FF27DF",
  "appDescription": "Script to calculate sliding PLET settlement",
  "appWebComponents": {
    "0": {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Evolution of resistance and settlement of a tolerably mobile mudmat from episodic sliding and intervening consolidation",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables prediction of the evolution of undrained sliding resistance and settlement of a tolerably mobile mudmat foundation on a normally consolidated fine grained deposit due to episodes of monotonic sliding with intervening consolidation.  Changes in soil strength profile with depth below the sliding foundation can also be predicted. The app enables exploration of the sensitivity of geotechnical properties on the performance of the foundation over the whole life of the structure. The predictions are based on a critical state inspired (CSI) framework, that has been validated against centrifuge model tests, and is shown to capture the essential elements of the soil–structure interaction, which include: (a) the changing soil strength from cycles of sliding and pore pressure generation; (b) the regain in strength due to dissipation of excess pore pressure (consolidation); and (c) the soil contraction and consequent settlement of the foundation caused by the consolidation process. \nDetails of the centrifuge model tests underpinning the theoretical framework are published in <a href=\"http://dx.doi.org/10.1680/geot.14.P.098\"> “Tolerably mobile subsea foundations – Observations of performance” by Cocjin. M., Gourvenec, S., White, D.J & Randolph, M.F. (2014), Géotechnique 64(11): 895-909</a>, and details of the theoretical framework are published in <a href=\"http://dx.doi.org/10.1680/jgeot.16.P.137\"> “Theoretical framework for predicting the response of tolerably mobile subsea installations” by Cocjin. M., Gourvenec, S., White, D.J & Randolph, M.F. (2017), Géotechnique 67(7):608-620 </a>",
          "format": ""
        }
      }
    },
    "1": {
      "type": "input-tile",
      "title": "Input",
      "fields": {
        "Foundation/structure": {
          "B": {
            "label": "B",
            "unit": "m",
            "value": 6,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "L": {
            "label": "L",
            "unit": "m",
            "value": 21,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "V_eqmt": {
            "label": "V<sub>eqmt</sub>",
            "unit": "kN",
            "value": 900,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sig_fnd": {
            "label": "&sigma;<sub>fnd</sub>",
            "unit": "kPa",
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Operational sequence": {
          "n_cyc_op": {
            "label": "n<sub>cyc,op</sub>",
            "unit": null,
            "value": 100,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "t_op": {
            "label": "t<sub>op</sub>",
            "unit": "months",
            "value": 3,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "t_sd": {
            "label": "t<sub>op</sub>",
            "unit": "months",
            "value": 0.03,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Soil properties": {
          "g_a": {
            "label": "g<sub>a</sub>",
            "unit": "kN/m<sup>3</sup>",
            "value": 6.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "cv": {
            "label": "c<sub>v</sub>",
            "unit": "m<sup>2</sup>/yr",
            "value": 3.35,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "su_sig_v": {
            "label": "su<sub>&sigma;,v</sub>",
            "unit": null,
            "value": 0.35,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "M": {
            "label": "M",
            "unit": null,
            "value": 1.4,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "lamda": {
            "label": "&lambda;",
            "unit": null,
            "value": 0.084,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "N": {
            "label": "N",
            "unit": null,
            "value": 1.45,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "kappa": {
            "label": "&kappa;",
            "unit": null,
            "value": 0.00485,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sig_sur": {
            "label": "&sigma;<sub>sur</sub>",
            "unit": "kPa",
            "value": 0.1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "S_t": {
            "label": "S<sub>t</sub>",
            "unit": null,
            "value": 4,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Model Coefficents": {
          "delta_e_i": {
            "label": "&delta;<sub>e,i</sub>",
            "unit": null,
            "value": 0,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sig_v_i": {
            "label": "&sigma;<sub>v,i</sub>",
            "unit": "kPa",
            "value": 1.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "b_NCL": {
            "label": "b<sub>NCL</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "N_eq_95": {
            "label": "N<sub>95</sub>",
            "unit": null,
            "value": 10,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "beta": {
            "label": "&beta;",
            "unit": null,
            "value": 0.8,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "chi": {
            "label": "&chi;",
            "unit": null,
            "value": 2.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "alphaint": {
            "label": "&alpha;<sub>init</sub>",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "InitStressFrac": {
            "label": "InitStressFrac",
            "unit": null,
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": {}
    },
    "2": {
      "type": "derived-input-tile",
      "title": "Derived Inputs",
      "fields": {
        "Foundation/structure": {
          "b": {
            "label": "b",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "l": {
            "label": "l",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sig_eqmt": {
            "label": "&sigma;<sub>eqmt</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sig_op": {
            "label": "&sigma;<sub>op</sub>",
            "unit": "kPa",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Operational sequence": {
          "n_slide": {
            "label": "n<sub>slide</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "z_max": {
            "label": "z<sub>max</sub>",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "s_max": {
            "label": "s<sub>max</sub>",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "V_op": {
            "label": "V<sub>op</sub>",
            "unit": "kn",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Soil properties": {
          "R_0": {
            "label": "R<sub>0</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "cap_gamma_0": {
            "label": "cap<sub>&gamma;<sub>0</sub></sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "R_f": {
            "label": "R<sub>f</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      },
      "subComponents": {}
    },
    "3": {
      "type": "batch-tile",
      "title": "Batch Calculation"
    },
    "4": {
      "type": "output-tile",
      "title": "Output",
      "fields": {
        "": {
          "cycles": {
            "label": "Cycle",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "sliding_event": {
            "label": "Sliding Event",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "time_months": {
            "label": "Time",
            "unit": "months",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "time_years": {
            "label": "Time",
            "unit": "years",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "hult": {
            "label": "Hult",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "cons_settlement": {
            "label": "Cons. settlement wc",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "shear_settlement": {
            "label": "Shear settlement ws",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "total_settlement": {
            "label": "Total settlement wt",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        }
      }
    }
  }
}