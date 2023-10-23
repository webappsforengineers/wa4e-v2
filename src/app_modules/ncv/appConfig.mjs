import { changeObj } from './onChange.mjs';

export const appConf = {
  appName: 'ncv',
  appTitle: 'Shallow Foundation N<sub>cV</sub>',
  appPageTitle: 'Shallow Foundation N<sub>cV</sub>',
  appDescription:
    'Undrained vertical bearing capacity of strip and circular skirted foundations',
  appColour: '#a6d686',
  appWebComponents: {
    0: {
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
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Foundation Properties': {
          B_D: {
            label: 'D or B',
            unit: 'm',
            value: 'Select Foundation Shape',
            visible: '',
            lb: '',
            ub: '',
          },
          d: {
            label: 'd',
            unit: 'm',
            value: 5,
            visible: '',
            lb: '',
            ub: '',
          },
          alpha_base: {
            label: '&alpha;<sub>base</sub>(0-1)',
            unit: null,
            value: 1,
            visible: 'none',
            lb: '1',
            ub: '1',
          },
          alpha_side: {
            label: '&alpha;<sub>side</sub>(0-1)',
            unit: null,
            value: 0.1,
            visible: '',
            lb: '0',
            ub: '1',
          },
        },
        'Soil Properties': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: 10,
            visible: '',
            lb: '',
            ub: '',
          },
          K: {
            label: 'k<sub>um</sub>',
            unit: 'kPa/m',
            value: 10,
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
          position: 'beforeTitle',
          display: '',
          title: 'Foundation Shape',
          options: {
            Circular: {
              check_status: '',
              label: 'Circular',
              visible: '',
            },
            Strip: {
              check_status: '',
              label: 'Strip',
              visible: '',
            },
          },
          onChange: changeObj,
          clearOnClick: false,
          modifyOnClick: true,
        },
        1: {
          type: 'soil-properties-help',
          index: 1,
          position: 'afterContent',
        },
      },
      helpText: 'Helpful text!',
    },
    2: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          dB_dD: {
            label: 'd/(D or B) (0&#45;1)',
            unit: null,
            value: 'Select Foundation Shape',
            visible: '',
            lb: '0',
            ub: '1',
          },
          A: {
            label: null,
            unit: null,
            value: 'Select Foundation Shape',
            visible: '',
            lb: '',
            ub: '',
          },
          kappa_su: {
            label:
              '&varkappa;<sub>su</sub> = k(D or B)/s<sub>um</sub> (0&#45;200)',
            unit: null,
            value: 'Select Foundation Shape',
            lb: '0',
            ub: '200',
          },
          Su0: {
            label: 's<sub>u0</sub> = k <sub>su</sub>d',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {},
    },
    3: {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          NcV: {
            label: 'N<sub>cV</sub> = v<sub>ult</sub>/s<sub>u0</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_pressure: {
            label: 'v<sub>ult</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Vult_force: {
            label: 'V<sub>ult</sub>=v<sub>ult</sub>A',
            unit: 'kN',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {},
    },
    4: {
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
            font: {
              size: 18,
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
            font: {
              size: 18,
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
    5: {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  },
};
