// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

const stabilityWeight = {
  "absLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      2: {
        "display": 'none',
      },
    },
  }}},
  "genLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      2: {
        "display": '',
      },
    },
  }}},
  "dynLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      2: {
        "display": 'none',
      },
    },
  }}},
}

const stabilityDisplacement = {
  "absLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      1: {
        "onChange": {
          "absLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "genLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "dynLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
        },
      },
      2: {
        "display": 'none',
      },
    },
  }}},
  "genLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      1: {
        "onChange": {
          "absLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "genLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "dynLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
        },
      },
      2: {
        "display": 'none',
      },
    },
  }}},
  "dynLatStability": {"1": {"fields":  {
    "fields": {
      'Stability Criterion': {
        "mu": {
          "label": "Friction coefficient",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "rsc": {
          "label": "Saftey factor",
          "unit": null,
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
        "lateralDisplacementLessThan": {
          "label": "Lateral Displacement",
          "unit": "D (pipe diameter)",
          "value": null,
          "visible": "none",
          "lb": "",
          "ub": ""
        }
      },
    },
    "subComponents": {
      1: {
        "onChange": {
          "absLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "genLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
          "dynLatStability": {
            "subComponents": {
              2: {
                "display": 'none',
              },
            },
          },
        },
      },
      2: {
        "display": 'none',
      },
    },
  }}},
}

export const changeObj = {
  "evalReqPipeWeight": {"1": {"fields": {
    "fields": {
      'Calculation Parameters': {
        "pipew": {
          "label": "Pipeline submerged weight",
          "unit": "kN/m",
          "value": 3,
          "visible": "none",
          "lb": "",
          "ub": ""
        },
      },
    },
    "subComponents": {
      1: {
        "type": 'radio-tile',
        "index": 1,
        "position": 'afterTitle',
        "display": '',
        "title": ' ',
        "options": {
          "absLatStability": {
            "check_status": '',
            "label": 'Absolute Lateral Static Stability',
            "visible": ''
          },
          "genLatStability": {
            "check_status": '',
            "label": 'Generalised Lateral Stability',
            "visible": ''
          },
          "dynLatStability": {
            "check_status": '',
            "label": 'Dynamic Lateral Stability',
            "visible": ''
          },
        },
        "onChange": stabilityWeight,
        "modifyOnClick": true,
      },
    },
  }}},
  "stabilityDisplacement": {"1": {"fields": {
    "fields": {
      'Calculation Parameters': {
        "pipew": {
          "value": 3,
          "unit": 'kN/m',
          "label": 'Pipeline submerged weight',
          "visible": '',
          "lb": '',
          "ub": '',
        },
      },
      'Stability Criterion': {
        "lateralDisplacementLessThan": {
          "value": null,
          "unit": 'D (pipe diameter)',
          "label": 'Lateral Displacement',
          "visible": 'none',
          "lb": '',
          "ub": '',
        },
      },
    },
    "subComponents": {
      1: {
        "type": 'radio-tile',
        "index": 1,
        "position": 'afterTitle',
        "display": '',
        "title": ' ',
        "options": {
          "absLatStability": {
            "check_status": '',
            "label": 'Absolute Lateral Static Stability',
            "visible": ''
          },
          "genLatStability": {
            "check_status": '',
            "label": 'Generalised Lateral Stability',
            "visible": ''
          },
          "dynLatStability": {
            "check_status": '',
            "label": 'Dynamic Lateral Stability',
            "visible": ''
          },
        },
        "onChange": stabilityDisplacement,
        "modifyOnClick": true,
      },
      2: {
        "display": 'none',
      },
    },
  }}},
}



