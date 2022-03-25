// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
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
            lb: '',
            ub: '',
          },
          kappa_su: {
            value: null,
            unit: null,
            label: '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
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
            xaxis: {
              title: 'd/D',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
        },
        kbsum: {
          layout: {
            title: '<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>',
            xaxis: {
              title: 'kD/s<sub>um</sub>',
            },
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
            lb: '',
            ub: '',
          },
          kappa_su: {
            value: null,
            unit: null,
            label: '&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)',
            visible: '',
            lb: '',
            ub: '',
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
            xaxis: {
              title: 'd/B',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
        },
        kbsum: {
          layout: {
            title: '<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>',
            xaxis: {
              title: 'kB/s<sub>um</sub>',
            },
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
};
