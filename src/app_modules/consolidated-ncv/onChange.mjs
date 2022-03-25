// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
    "Circular": {
      "1": {
        "fields": {
          "Foundation": {
            "D_B": {
              "value": 12,
              "unit": "m",
              "label": "D",
              "visible": '',
              "lb": "",
              "ub": ""
            }
          },
          "Method": {
            "T_50": {
              "value": 0.035,
              "unit": null,
              "label": 'T<sub>50</sub>',
              "visible": '',
              "lb": "",
              "ub": ""
            },
            "m_const": {
              "value": -1.05,
              "unit": null,
              "label": "m",
              "visible": '',
              "lb": "",
              "ub": ""
            }
          }
        }
      }
    },
    "Strip": {
      "1": {
        "fields": {
          "Foundation": {
            "D_B": {
              "value": 12,
              "unit": "m",
              "label": "B",
              "visible": '',
              "lb": "",
              "ub": ""
            }
          },
          "Method": {
            "T_50": {
              "value": 0.17,
              "unit": null,
              "label": 'T<sub>50</sub>',
              "visible": '',
              "lb": "",
              "ub": ""
            },
            "m_const": {
              "value": -0.95,
              "unit": null,
              "label": "m",
              "visible": '',
              "lb": "",
              "ub": ""
            }
          }
        }
      }
    }
}
