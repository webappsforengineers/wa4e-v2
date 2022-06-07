export const testConf = {
  input: {
    1: {
      type: 'input-tile',
      title: 'Input',
      valuesLength: 3,
      fields: {
        'Foundation Properties': {
          B_D: {
            label: 'D',
            unit: 'm',
            value: [10, 10, 10],
            visible: '',
            lb: '',
            ub: '',
          },
          d: {
            label: 'd',
            unit: 'm',
            value: [5, 5, 5],
            visible: '',
            lb: '',
            ub: '',
          },
          alpha_base: {
            label: '&alpha;<sub>base</sub>(0-1)',
            value: [1, 1, 1],
            visible: '',
            lb: '0',
            ub: '1',
          },
          alpha_side: {
            label: '&alpha;<sub>side</sub>(0-1)',
            value: [0, 0.5, 1],
            visible: '',
            lb: '0',
            ub: '1',
          },
        },
        'Soil Properties': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: [5, 5, 5],
            visible: '',
            lb: '',
            ub: '',
          },
          K: {
            label: 'k<sub>um</sub>',
            unit: 'kPa/m',
            value: [10, 10, 10],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {
        0: {
          type: 'radio-tile',
          index: 0,
          position: 'afterTitle',
          display: '',
          title: 'Foundation Shape',
          options: {
            Circular: { check_status: true, label: 'Circular', visible: '' },
            Strip: { check_status: false, label: 'Strip', visible: '' },
          },
          onChange: {
            Circular: {
              1: {
                fields: {
                  'Foundation Properties': {
                    B_D: {
                      value: 10,
                      unit: 'm',
                      label: 'D',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              2: {
                fields: {
                  '': {
                    dB_dD: {
                      value: null,
                      unit: null,
                      label: 'd/D (0&#45;1)',
                      visible: '',
                      lb: '0',
                      ub: '1',
                    },
                    kappa_su: {
                      value: null,
                      unit: null,
                      label:
                        '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                    A: {
                      value: null,
                      unit: 'm<sup>2</sup>',
                      label: 'A<sub>circular</sub>',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              4: {
                plots: {
                  db: {
                    layout: {
                      title: '<b>N<sub>cV</sub> as a function of d/D</b>',
                      xaxis: { title: 'd/D' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                  kbsum: {
                    layout: {
                      title:
                        '<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>',
                      xaxis: { title: 'kD/s<sub>um</sub>' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                },
              },
            },
            Strip: {
              1: {
                fields: {
                  'Foundation Properties': {
                    B_D: {
                      value: 10,
                      unit: 'm',
                      label: 'B',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              2: {
                fields: {
                  '': {
                    dB_dD: {
                      value: null,
                      unit: null,
                      label: 'd/B (0&#45;1)',
                      visible: '',
                      lb: '0',
                      ub: '1',
                    },
                    kappa_su: {
                      value: null,
                      unit: null,
                      label:
                        '&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)',
                      visible: '',
                      lb: '0',
                      ub: '200',
                    },
                    A: {
                      value: null,
                      unit: 'm<sup>2</sup>/m',
                      label: 'A<sub>strip</sub>',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              4: {
                plots: {
                  db: {
                    layout: {
                      title: '<b>N<sub>cV</sub> as a function of d/B</b>',
                      xaxis: { title: 'd/B' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                  kbsum: {
                    layout: {
                      title:
                        '<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>',
                      xaxis: { title: 'kB/s<sub>um</sub>' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                },
              },
            },
          },
          clearOnClick: false,
          modifyOnClick: true,
        },
      },
    },
    2: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      valuesLength: 0,
      fields: {
        '': {
          dB_dD: {
            label: 'd/D (0&#45;1)',
            value: [],
            visible: '',
            lb: '0',
            ub: '1',
          },
          A: {
            label: 'A<sub>circular</sub>',
            unit: 'm<sup>2</sup>',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          kappa_su: {
            label: '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Su0: {
            label: 's<sub>u0</sub> = k <sub>su</sub>d',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      type: 'output-tile',
      title: 'Output',
      valuesLength: 0,
      fields: {
        '': {
          NcV: {
            label: 'N<sub>cV</sub> = v<sub>ult</sub>/s<sub>u0</sub>',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_pressure: {
            label: 'v<sub>ult</sub>',
            unit: 'kPa',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_force: {
            label: 'V<sub>ult</sub>=v<sub>ult</sub>A',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
  output: {
    1: {
      type: 'input-tile',
      title: 'Input',
      valuesLength: 3,
      fields: {
        'Foundation Properties': {
          B_D: {
            label: 'D',
            unit: 'm',
            value: [10, 10, 10],
            visible: '',
            lb: '',
            ub: '',
          },
          d: {
            label: 'd',
            unit: 'm',
            value: [5, 5, 5],
            visible: '',
            lb: '',
            ub: '',
          },
          alpha_base: {
            label: '&alpha;<sub>base</sub>(0-1)',
            value: [1, 1, 1],
            visible: '',
            lb: '0',
            ub: '1',
          },
          alpha_side: {
            label: '&alpha;<sub>side</sub>(0-1)',
            value: [0, 0.5, 1],
            visible: '',
            lb: '0',
            ub: '1',
          },
        },
        'Soil Properties': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: [5, 5, 5],
            visible: '',
            lb: '',
            ub: '',
          },
          K: {
            label: 'k<sub>um</sub>',
            unit: 'kPa/m',
            value: [10, 10, 10],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {
        0: {
          type: 'radio-tile',
          index: 0,
          position: 'afterTitle',
          display: '',
          title: 'Foundation Shape',
          options: {
            Circular: { check_status: true, label: 'Circular', visible: '' },
            Strip: { check_status: false, label: 'Strip', visible: '' },
          },
          onChange: {
            Circular: {
              1: {
                fields: {
                  'Foundation Properties': {
                    B_D: {
                      value: 10,
                      unit: 'm',
                      label: 'D',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              2: {
                fields: {
                  '': {
                    dB_dD: {
                      value: null,
                      unit: null,
                      label: 'd/D (0&#45;1)',
                      visible: '',
                      lb: '0',
                      ub: '1',
                    },
                    kappa_su: {
                      value: null,
                      unit: null,
                      label:
                        '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                    A: {
                      value: null,
                      unit: 'm<sup>2</sup>',
                      label: 'A<sub>circular</sub>',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              4: {
                plots: {
                  db: {
                    layout: {
                      title: '<b>N<sub>cV</sub> as a function of d/D</b>',
                      xaxis: { title: 'd/D' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                  kbsum: {
                    layout: {
                      title:
                        '<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>',
                      xaxis: { title: 'kD/s<sub>um</sub>' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                },
              },
            },
            Strip: {
              1: {
                fields: {
                  'Foundation Properties': {
                    B_D: {
                      value: 10,
                      unit: 'm',
                      label: 'B',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              2: {
                fields: {
                  '': {
                    dB_dD: {
                      value: null,
                      unit: null,
                      label: 'd/B (0&#45;1)',
                      visible: '',
                      lb: '0',
                      ub: '1',
                    },
                    kappa_su: {
                      value: null,
                      unit: null,
                      label:
                        '&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)',
                      visible: '',
                      lb: '0',
                      ub: '200',
                    },
                    A: {
                      value: null,
                      unit: 'm<sup>2</sup>/m',
                      label: 'A<sub>strip</sub>',
                      visible: '',
                      lb: '',
                      ub: '',
                    },
                  },
                },
              },
              4: {
                plots: {
                  db: {
                    layout: {
                      title: '<b>N<sub>cV</sub> as a function of d/B</b>',
                      xaxis: { title: 'd/B' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                  kbsum: {
                    layout: {
                      title:
                        '<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>',
                      xaxis: { title: 'kB/s<sub>um</sub>' },
                      titlefont: {
                        family: 'Roboto, sans-serif',
                        color: '#01579b',
                        size: 19,
                      },
                    },
                  },
                },
              },
            },
          },
          clearOnClick: false,
          modifyOnClick: true,
        },
      },
    },
    2: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      valuesLength: 3,
      fields: {
        '': {
          dB_dD: {
            label: 'd/D (0&#45;1)',
            value: [0.5, 0.5, 0.5],
            visible: '',
            lb: '0',
            ub: '1',
          },
          A: {
            label: 'A<sub>circular</sub>',
            unit: 'm<sup>2</sup>',
            value: [78.54, 78.54, 78.54],
            visible: '',
            lb: '',
            ub: '',
          },
          kappa_su: {
            label: '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
            value: [20, 20, 20],
            visible: '',
            lb: '',
            ub: '',
          },
          Su0: {
            label: 's<sub>u0</sub> = k <sub>su</sub>d',
            value: [55, 55, 55],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      type: 'output-tile',
      title: 'Output',
      valuesLength: 3,
      fields: {
        '': {
          NcV: {
            label: 'N<sub>cV</sub> = v<sub>ult</sub>/s<sub>u0</sub>',
            value: [9.473, 10.087, 10.969],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_pressure: {
            label: 'v<sub>ult</sub>',
            unit: 'kPa',
            value: [521.015, 554.785, 603.295],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_force: {
            label: 'V<sub>ult</sub>=v<sub>ult</sub>A',
            unit: 'kN',
            value: [40920.5181, 43572.8139, 47382.7893],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
};
