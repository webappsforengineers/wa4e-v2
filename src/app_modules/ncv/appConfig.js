/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'ncv',
  appTitle: 'Shallow Foundation NcV',
  appPageTitle: 'N<sub>cV</sub> for Shallow Foundation',
  appDescription:
    'Undrained vertical bearing capacity of strip and circular skirted foundations',
  appColour: '#a6d686',
  appWebComponents: [
    {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Undrained vertical bearing capacity for strip & circular foundations for varying embedment ratio, interface roughness & soil strength heterogeneity.',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables calculation of vertical bearing capacity factors for strip and circular shallow foundations across a practical range of foundation embedment ratio (0 < d/B, d/D < 1), foundation–soil interface roughness (0 < &alpha; < 1) and soil shear strength heterogeneity (0 < &kappa; < 200). The bearing capacity factors are based on finite element and finite-element limit analysis results, published in <a href="http://dx.doi.org/10.1680/geolett.11.00026">“Undrained vertical bearing capacity factors for shallow foundations” by Gourvenec, S. & Mana, D.K.S (2011), Géotechnique Letters</a>',
          format: '',
        },
      },
    },
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Foundation Properties': {
          B_D: ['Select Foundation Shape', 'm', 'D or B', ''],
          d: [5, 'm', 'd', ''],
          alpha_base: [1, null, '&alpha;<sub>base</sub>(0-1)', ''],
          alpha_side: [0.1, null, '&alpha;<sub>side</sub>(0-1)', ''],
        },
        'Soil Properties': {
          Sum: [10, 'kPa', 's<sub>um</sub>', ''],
          K: [10, 'kPa/m', 'k<sub>um</sub>', ''],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'afterTitle',
          display: '',
          title: 'Foundation Shape',
          options: {
            Circular: ['', 'Circular', ''],
            Strip: ['', 'Strip', ''],
          },
          onChange: {
            Circular: {
              fields: {
                'Foundation Properties': {
                  B_D: [10, 'm', 'D', ''],
                },
                '': {
                  dB_dD: [null, null, 'd/D (0&#45;1)', ''],
                  kappa_su: [
                    null,
                    null,
                    '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
                    ,
                    '',
                  ],
                  A: [null, 'm<sup>2</sup>', 'A<sub>circular</sub>', ''],
                },
              },
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
                    title:
                      '<b>N<sub>cV</sub> as a function of kD/s<sub>um</sub></b>',
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
            Strip: {
              fields: {
                'Foundation Properties': {
                  B_D: [10, 'm', 'B', ''],
                },
                '': {
                  dB_dD: [null, null, 'd/B (0&#45;1)', ''],
                  kappa_su: [
                    null,
                    null,
                    '&varkappa;<sub>su</sub> = kB/s<sub>um</sub> (0&#45;200)',
                    ,
                    '',
                  ],
                  A: [null, 'm<sup>2</sup>/m', 'A<sub>strip</sub>', ''],
                },
              },
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
                    title:
                      '<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>',
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
          clearOnClick: false,
          modifyOnClick: true,
        },
      ],
      helpText: 'Helpful text!',
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          dB_dD: ['Select Foundation Shape', null, 'd/(D or B) (0&#45;1)', ''],
          A: ['Select Foundation Shape', null, null, ''],
          kappa_su: [
            'Select Foundation Shape',
            null,
            '&varkappa;<sub>su</sub> = k(D or B)/s<sub>um</sub> (0&#45;200)',
            ,
            '',
          ],
          Su0: [null, null, 's<sub>u0</sub> = k <sub>su</sub>d', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          NcV: [
            null,
            null,
            'N<sub>cV</sub> = v<sub>ult</sub>/s<sub>u0</sub>',
            '',
          ],
          Vult_pressure: [null, 'kPa', 'v<sub>ult</sub>', ''],
          Vult_force: [null, 'kN', 'V<sub>ult</sub>=v<sub>ult</sub>A', ''],
        },
      },
      subComponents: [],
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
            title: '<b>N<sub>cV</sub> as a function of d/B</b>',
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
          show: true,
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
          show: true,
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
            title: '<b>N<sub>cV</sub> as a function of kB/s<sub>um</sub></b>',
            xaxis: {
              title: 'kB/s<sub>um</sub>',
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
          show: true,
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  ],
};
