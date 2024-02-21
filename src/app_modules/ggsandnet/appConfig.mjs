// eslint-disable-next-line import/named
import { selectObj } from './onSelect.mjs';
import { unselectObj } from './onUnselect.mjs';

/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'ggsandnet',
  appTitle: 'GgSANDnet',
  appDescription:
    'A neural network tool for prediction of shear stiffness (G) shear strain (g) relationship for sands',
  appPageTitle: 'GgSANDnet',
  appColour: '#e1e8ec',
  textColour: 'text-dark',
  appWebComponents: {
    0: {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'GgSANDnet: A neural network tool for prediction of shear stiffness (G) shear strain (g) relationship for sands',
          format: 'h5',
        },
        blurb: {
          text: 'This app uses a neural network to generate a shear stiffness degradation curve for sands (representing how soil reduces in stiffness as a function of strain) based on an arbitrary number and combination of input parameters. User select and input any number and combination of the following parameters: Mean Effective Stress (p) Mean Effective Stress/Reference Atmospheric Stress (p/pa) Overconsolidation Ratio (OCR) Void Ratio (e) Relative Density (Dr) Average Grain Size (D50) Uniformity Coefficient (Cu) Initial Elastic Shear Modulus (G0). After the dataset is loaded and filtered and the available parameters have been selected, a neural network will be trained and an output curve will be generated.',
          format: '',
        },
      },
    },
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Soil Properties': {
          MES: {
            label: "Mean Effective Stress (P')",
            unit: null,
            value: 0.1,
            visible: '',
            lb: '0',
            ub: '',
          },
          MESA: {
            label: "Mean Effective Stress/Atmospheric (P'/Pa)",
            unit: null,
            value: 1.019,
            visible: '',
          },
          OCR: {
            label: 'Overconsolidation Ratio (OCR)',
            unit: null,
            value: 1,
            visible: '',
            lb: '',
            ub: '',
          },
          VR: {
            label: 'Void Ratio (e)',
            unit: null,
            value: 0.76,
            visible: '',
            lb: '',
            ub: '',
          },
          RD: {
            label: 'Relative Density (Dr%)',
            unit: null,
            value: 0.6923,
            visible: '',
            lb: '',
            ub: '',
          },
          AGS: {
            label: 'Average Grain Size (D50)',
            unit: null,
            value: 0.99,
            visible: '',
            lb: '',
            ub: '',
          },
          UC: {
            label: 'Uniformity Coefficient (Cu)',
            unit: null,
            value: 1.2,
            visible: '',
            lb: '',
            ub: '',
          },
          ISS: {
            label: 'Initial Shear Stiffness (G0)',
            unit: null,
            value: 161.1,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {
        0: {
          type: 'checkbox-tile',
          index: 0,
          position: 'beforeTitle',
          title: 'Select Properties for Input',
          options: {
            MES_included: {
              check_status: true,
              label: "Mean Effective Stress (P')",
              visible: '',
            },
            MESA_included: {
              check_status: true,
              label: "Mean Effective Stress/Atmospheric (P'/Pa)",
              visible: '',
            },
            OCR_included: {
              check_status: true,
              label: 'Overconsolidation Ratio (OCR)',
              visible: '',
            },
            VR_included: {
              check_status: true,
              label: 'Void Ratio (e)',
              visible: '',
            },
            RD_included: {
              check_status: true,
              label: 'Relative Density (Dr%)',
              visible: '',
            },
            AGS_included: {
              check_status: true,
              label: 'Average Grain Size (D50)',
              visible: '',
            },
            UC_included: {
              check_status: true,
              label: 'Uniformity Coefficient (Cu)',
              visible: '',
            },
            ISS_included: {
              check_status: true,
              label: 'Initial Shear Stiffness (G0)',
              visible: '',
            },
          },
          modifyOnClick: true,
          onSelect: selectObj,
          onUnselect: unselectObj,
        },
      },
    },
    2: {
      type: 'graph-tile',
      fields: {
        nnTargets: null,
        nnOutputs: null,
      },
      plots: {
        plotNN: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
                type: 'scatter',
                mode: 'markers',
              },
            ];
          },
          layout: {
            title: 'Neural Network Statistics',
            xaxis: {
              title: 'Targets',
              range: [0, 1.1],
            },
            yaxis: {
              title: 'Outputs',
              range: [0, 1.1],
            },
            showlegend: false,
            type: 'scatter',
            mode: 'markers',
            font: {
              size: 14,
            },
          },
          args: ['nnTargets', 'nnOutputs'],
          addLines: false,
          data: [],
          // show: true,
        },
        outputCurve: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
                type: 'scatter',
                mode: 'markers',
              },
            ];
          },
          layout: {
            title: 'Output Curve',
            xaxis: {
              title: 'Strain',
              type: 'log',
              range: [-4, 1],
            },
            yaxis: {
              title: 'G/G0',
              range: [0, 1],
            },
            showlegend: false,
            type: 'scatter',
            mode: 'markers',
            font: {
              size: 14,
            },
          },
          args: ['strain', 'GGo'],
          addLines: false,
          data: [],
          // show: true,
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    3: {
      type: 'output-tile',
      title: 'Output',
      fields: {
        Performance: {
          MSE: {
            label: 'MSE',
            unit: '',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
};
