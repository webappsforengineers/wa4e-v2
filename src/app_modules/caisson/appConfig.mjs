/* eslint-disable no-sparse-arrays */
export const appConf = {
  "appName": "caisson",
  "appTitle": "Suction Caisson",
  "appPageTitle": "Suction Caisson Installation and Uplift Capacity",
  "appDescription": "Installation and uplift capacity",
  "appColour": "#f4e786",
  "appWebComponents": [
    {
      "type": "text-tile",
      "title": "About this app:",
      "text": {
        "subTitle": {
          "text": "Undrained installation resistance, plug stability and uplift capacity of a suction caisson",
          "format": "h5"
        },
        "blurb": {
          "text": "This app enables prediction of undrained installation resistance, undrained uplift capacity and plug stability of a suction caisson in a fine grained deposit. Linearly increasing shear strength profiles with or without a surficial crust are permitted. The analysis is simplified and does not explicitly capture the effects internal stiffeners (either additional bearing resistance from the additional projected bearing area, or reduced internal wall friction from extrusion above stiffeners). The method is based on simple equations of wall friction and bearing resistance at the caisson tip. For sealed uplift capacity the tool is intended for caissons of sufficient embedment depth that a confined bearing failure occurs at tip level with the effect of wall friction superposed. The tool is not intended for prediction of sealed uplift resistance of shallow suction can or bucket foundations that would fail with a reverse end bearing mechanism that would reach the mudline. Undrained uniaxial vertical uplift mobilising full reverse end bearing can be approximated with the Shallow Foundations NcV app (assuming tensile reverse bearing capacity is of equal magnitude to compression bearing capacity). This app is appropriate for predicting the installation resistance for shallow suction cans as only compressive tip bearing and wall friction are mobilised; equally the app can be used to predict vented vertical uplift resistance of suction cans as these mechanisms only mobilised wall friction and/or plug weight. \nThe method presented was developed based on findings from a joint industry project described in “Suction anchors for deepwater applications”, by Andersen, K. et al. (2002), a keynote paper presented at the first International Symposium on Frontiers in Offshore Geotechnics <a href=\"https://www.taylorfrancis.com/books/mono/10.1201/NOE0415390637\">(Ed. Gourvenec & Cassidy) </a>. The theoretical methods are presented in the text books <a href=\"https://www.taylorfrancis.com/books/mono/10.1201/9781315272474\"> “Offshore Geotechnical Engineering” by Randolph, M.F. and Gourvenec, S. (2011, 2017)</a>, and <a href=\"https://www.taylorfrancis.com/books/mono/10.1201/9780429423840\"> “Intermediate Offshore Foundations” by Kay, Gourvenec, Palix & Alderlieste (2021)</a>, and are the recommended methods in international standards, e.g. ISO 19901-4.  \n",
          "format": ""
        }
      }
    },
    {
      "type": "input-tile",
      "title": "Input",
      "fields": {
        "Caisson Properties": {
          "L": {
            "label": "L",
            "unit": "m",
            "value": 24,
            "visible": "",
            "lb": 20,
            "ub": 30
          },
          "Do": {
            "label": "D<sub>o</sub>",
            "unit": "m",
            "value": 6,
            "visible": ""
          },
          "t": {
            "label": "t",
            "unit": "m",
            "value": 0.1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "W": {
            "label": "W&#39;",
            "unit": "kn",
            "value": 1500,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Nctips": {
            "label": "N<sub>c,tips</sub>",
            "unit": null,
            "value": 7.5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Ncplug": {
            "label": "N<sub>c,plug</sub>",
            "unit": null,
            "value": 9,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "ao": {
            "label": "a<sub>o</sub>",
            "unit": null,
            "value": 0.4,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "ai": {
            "label": "a<sub>i</sub>",
            "unit": null,
            "value": 0.4,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Soil Properties": {
          "Sum": {
            "label": "S<sub>um</sub>",
            "unit": "kPa",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "z": {
            "label": "z&#39;",
            "unit": "m",
            "value": 5,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "ksu": {
            "label": "k<sub>su</sub>",
            "unit": "kPa/m",
            "value": 1,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "alpha": {
            "label": "&alpha;<sub>t</sub>",
            "unit": null,
            "value": 0.8,
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
          }
        }
      },
      "subComponents": [],
      "helpText": "Helpful text!"
    },
    {
      "type": "image-tile",
      "img_pth": "../../img/caisson-figure.png",
      "img_w": "600px",
      "img_h": "600px"
    },
    {
      "type": "derived-input-tile",
      "title": "Derived Input",
      "fields": {
        "": {
          "LDo": {
            "label": "L/D<sub>o</sub>",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Di": {
            "label": "D<sub>i</sub>",
            "unit": "m",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Atip": {
            "label": "A<sub>tip</sub>",
            "unit": "m<sup>2</sup>",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Aplug": {
            "label": "A<sub>plug</sub>",
            "unit": "m<sup>2</sup>",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Wplug": {
            "label": "W&#39;<sub>plug</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Wcaisson": {
            "label": "W&#39;<sub>caisson</sub>",
            "unit": "kN",
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
      "type": "output-tile",
      "title": "Output",
      "fields": {
        "Installation": {
          "Q": {
            "label": "Q",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "MRS": {
            "label": "Max Required Suction",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "MPS": {
            "label": "Max Permissible Suction",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "MFPS": {
            "label": "Min FoS Plug Stability",
            "unit": null,
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          }
        },
        "Capacity": {
          "Vult1": {
            "label": "V<sub>ult,1</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "VT1": {
            "label": "V<sub>T,1</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Vult2": {
            "label": "V<sub>ult,2</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "VT2": {
            "label": "V<sub>T,2</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "Vult3": {
            "label": "V<sub>ult,3</sub>",
            "unit": "kN",
            "value": null,
            "visible": "",
            "lb": "",
            "ub": ""
          },
          "VT3": {
            "label": "V<sub>T,3</sub>",
            "unit": "kN",
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
        "z": null,
        "suz": null,
        "q_total": null,
        "req_suction": null,
        "fos": null
      },
      "plots": {
        "plotSuKpc": {
          "layout": {
            "title": "",
            "xaxis": {
              "title": "S<sub>u</sub> (kPa)",
              "side": "top",
              "rangemode": "tozero"
            },
            "yaxis": {
              "title": "z (m)",
              "autorange": "reversed"
            },
            "showlegend": false,
            "mode": "lines",
            "line": {
              "shape": "spline"
            }
          },
          "args": [
            "suz",
            "z"
          ],
          "addLines": false,
          "data": []
        },
        "plotPenRes": {
          "layout": {
            "type": "scatter",
            "title": "",
            "xaxis": {
              "title": "kN",
              "side": "top",
              "ticksuffix": " kN"
            },
            "yaxis": {
              "title": "z (m)",
              "autorange": "reversed"
            },
            "showlegend": true,
            "mode": "lines",
            "line": {
              "shape": "spline"
            },
            "legend": {
              "traceorder": "normal"
            }
          },
          "args": [
            "req_suction",
            "q_total",
            "z"
          ],
          "addLines": false,
          "data": []
        },
        "plotFosStability": {
          "layout": {
            "type": "scatter",
            "title": "",
            "showlegend": false,
            "xaxis": {
              "title": "FoS Plug Stability",
              "side": "top"
            },
            "yaxis": {
              "title": "z (m)",
              "autorange": "reversed"
            },
            "mode": "lines",
            "line": {
              "shape": "spline"
            }
          },
          "args": [
            "fos",
            "z"
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