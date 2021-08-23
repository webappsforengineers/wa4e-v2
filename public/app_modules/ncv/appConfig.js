export const appConf = {
  appName: 'ncv',
  appTitle: 'Shallow Foundation NcV',
  appPageTitle: 'N<sub>cV</sub> for Shallow Foundation',
  appDescription:
    'Undrained vertical bearing capacity of strip and circular skirted foundations',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Foundation Properties': {
          B_D: ['Select Foundation Shape', 'm', 'D or B'],
          d: [5, 'm', 'd'],
          alpha_base: [1, null, '&alpha;<sub>base</sub>(0-1)'],
          alpha_side: [0.1, null, '&alpha;<sub>side</sub>(0-1)'],
        },
        'Soil Properties': {
          Sum: [10, 'kPa', 's<sub>um</sub>'],
          K: [10, 'kPa/m', 'k<sub>um</sub>'],
        },
      },
      helpText: 'Helpful text!',
    },
    {
      type: 'radio-tile',
      title: 'Foundation Shape',
      options: {
        Circular: '',
        Strip: '',
      },
      onChange: {
        Circular: {
          fields: {
            'Foundation Properties': {
              B_D: [10, 'm', 'D'],
            },
            '': {
              dB_dD: [null, null, 'd/D (0&#45;1)'],
              kappa_su: [
                null,
                null,
                '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
              ],
            },
          },
        },
        Strip: {
          fields: {
            'Foundation Properties': {
              B_D: [10, 'm', 'B'],
            },
            '': {
              dB_dD: [null, null, 'd/B (0&#45;1)'],
              kappa_su: [
                null,
                null,
                '&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)',
              ],
            },
          },
        },
      },
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          dB_dD: ['Select Foundation Shape', null, 'd/(D or B) (0&#45;1)'],
          A: [null, 'm<sup>2</sup>sup>', 'A'],
          kappa_su: [
            'Select Foundation Shape',
            null,
            '&varkappa;<sub>su</sub> = k(D or B)/s<sub>um</sub> (0&#45;200)',
          ],
          Su0: [null, null, 's<sub>u0</sub> = k <sub>su</sub>d'],
        },
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          NcV: [null, null, 'N<sub>cV</sub> = v<sub>ult</sub>/s<sub>u0</sub>'],
          Vult_pressure: [null, 'kPa', 'v<sub>ult</sub>'],
          Vult_force: [null, 'kN', 'V<sub>ult</sub>=v<sub>ult</sub>A'],
        },
      },
    },
    {
      type: 'graph-tile',
      fields: {
        NcV_dD: null,
        dD: null,
        NcV_alphaSide: null,
        alphaSide: null,
        NcV_kD: null,
        kD: null,
      },
      plots: {
        db: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
                line: {
                  shape: 'spline',
                  smoothing: 0.7,
                },
              },
            ];
          },
          layout: {
            title: '<b>N<sub>cV</sub> as a function of d/D</b>',
            xaxis: {
              title: 'd/B',
            },
            yaxis: {
              title: 'N<sub>cV</sub>',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
          args: ['dD', 'NcV_dD'],
          addLines: true,
          data: [],
        },
        alphaside: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
                line: {
                  shape: 'spline',
                  smoothing: 1,
                },
              },
            ];
          },
          layout: {
            title: '<b>N<sub>cV</sub> as a function of α<sub>side</sub></b>',
            xaxis: {
              title: 'α<sub>side</sub>',
            },
            yaxis: {
              title: 'N<sub>cV</sub>',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
          args: ['alphaSide', 'NcV_alphaSide'],
          addLines: true,
          data: [],
        },
        kbsum: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
                line: {
                  shape: 'spline',
                  smoothing: 0.7,
                },
              },
            ];
          },
          layout: {
            title: '<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>',
            xaxis: {
              title: 'kD/s<sub>um</sub>',
            },
            yaxis: {
              title: 'N<sub>cV</sub>',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
          args: ['kD', 'NcV_kD'],
          addLines: true,
          data: [],
        },
      },
    },
  ],
};
