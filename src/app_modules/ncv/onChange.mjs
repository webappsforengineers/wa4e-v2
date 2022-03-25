// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are matched by modifyform to replace
// the correct element.

export const changeObj = {
  "Circular": {
    "fields": {
      "Foundation Properties": {
        "B_D": [
          10,
          "m",
          "D",
          ""
        ]
      },
      "": {
        "dB_dD": [
          null,
          null,
          "d/D (0&#45;1)",
          ""
        ],
        "kappa_su": [
          null,
          null,
          "&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)",
          null,
          ""
        ],
        "A": [
          null,
          "m<sup>2</sup>",
          "A<sub>circular</sub>",
          ""
        ]
      }
    },
    "plots": {
      "db": {
        "layout": {
          "title": "<b>N<sub>cV</sub> as a function of d/D</b>",
          "xaxis": {
            "title": "d/D"
          },
          "titlefont": {
            "family": "Roboto, sans-serif",
            "color": "#01579b",
            "size": 19
          }
        }
      },
      "kbsum": {
        "layout": {
          "title": "<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>",
          "xaxis": {
            "title": "kD/s<sub>um</sub>"
          },
          "titlefont": {
            "family": "Roboto, sans-serif",
            "color": "#01579b",
            "size": 19
          }
        }
      }
    }
  },
  "Strip": {
    "fields": {
      "Foundation Properties": {
        "B_D": [
          10,
          "m",
          "B",
          ""
        ]
      },
      "": {
        "dB_dD": [
          null,
          null,
          "d/B (0&#45;1)",
          ""
        ],
        "kappa_su": [
          null,
          null,
          "&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)",
          null,
          ""
        ],
        "A": [
          null,
          "m<sup>2</sup>/m",
          "A<sub>strip</sub>",
          ""
        ]
      }
    },
    "plots": {
      "db": {
        "layout": {
          "title": "<b>N<sub>cV</sub> as a function of d/B</b>",
          "xaxis": {
            "title": "d/B"
          },
          "titlefont": {
            "family": "Roboto, sans-serif",
            "color": "#01579b",
            "size": 19
          }
        }
      },
      "kbsum": {
        "layout": {
          "title": "<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>",
          "xaxis": {
            "title": "kB/s<sub>um</sub>"
          },
          "titlefont": {
            "family": "Roboto, sans-serif",
            "color": "#01579b",
            "size": 19
          }
        }
      }
    }
  }
}
