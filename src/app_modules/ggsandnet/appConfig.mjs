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
          text: 'A neural network tool for prediction of shear stiffness (G) shear strain (g) relationship for sands',
          format: 'h5',
        },
        blurb: {
          text: 'Shear stiffness is critical in assessing the stress–strain response of geotechnical infrastructure, and is a complex, nonlinear parameter. Existing methods characterise stiffness degradation as a function of strain and require either bespoke laboratory element tests, or adoption of a curve fitting approach, based on an existing data set of laboratory element tests. If practitioners lack the required soil classification parameters, they are unable to use these curve fitting functions. Within this study, we examine the ability and versatility of an artificial neural network (ANN), in this case a feedforward multilayer perceptron, to predict strain-based stiffness degradation on the data set of element test results and soil classification data that underpins current curve fitting functions. It is shown that the ANN gives similar or better results to the existing curve fitting method when the same parameters are used, but also that the ANN approach enables curves to be recovered with ‘any’ subset of the considered soil classification parameters, providing practitioners with a great versatility to derive a stiffness degradation curve.',
          format: '',
        },
      },
    },
    1: {
      type: 'upload-tile',
      title: 'Upload Data',
    },
    2: {
      type: 'neural-network-settings',
      title: 'Upload Data',
    },
    3: {
      type: 'input-tile',
      title: 'Input Soil Parameters',
      fields: {
        'Soil Parameters': {
          MES: {
            label: "Mean Effective Stress (P')",
            unit: null,
            value: 0,
            visible: '',
            lb: '0',
            ub: '',
          },
          MESA: {
            label: "Mean Effective Stress/Atmospheric (P'/Pa)",
            unit: null,
            value: 0,
            visible: '',
          },
          OCR: {
            label: 'Overconsolidation Ratio (OCR)',
            unit: null,
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          VR: {
            label: 'Void Ratio (e)',
            unit: null,
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          RD: {
            label: 'Relative Density (Dr%)',
            unit: null,
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          AGS: {
            label: 'Average Grain Size (D50)',
            unit: null,
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          UC: {
            label: 'Uniformity Coefficient (Cu)',
            unit: null,
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          ISS: {
            label: 'Initial Shear Stiffness (G0)',
            unit: null,
            value: 0,
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
          display: '',
          title: 'Include?',
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
          // onChange: changeObj,
          modifyOnClick: true,
        },
      },
      helpText: 'Helpful text!',
    },
    4: {
      type: 'graph-tile',
      fields: {},
      plots: {
        outputCurve: {
          dataFun() {
            return [];
          },
          args: [],
          layout: {
            title: 'Output Curve',
            xaxis: {
              title: 'Strain %',
            },
            yaxis: {
              title: 'G/G0',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            showlegend: true,
            font: {
              size: 18,
            },
            legend: {
              x: 0,
              xanchor: 'left',
              y: 1,
              font: {
                size: 14,
              },
              bgcolor: '#00000000',
            },
          },
          addLines: false,
          data: [],
          display: 'block',
        },
        nnStats: {
          dataFun() {
            return [];
          },
          args: [],
          layout: {
            title: 'Neural Network Statistics',
            xaxis: {
              title: 'Target G/G0 Value',
            },
            yaxis: {
              title: 'NN Output G/G0 Value',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            showlegend: true,
            font: {
              size: 18,
            },
            legend: {
              x: 0,
              xanchor: 'left',
              y: 1,
              font: {
                size: 14,
              },
              bgcolor: '#00000000',
            },
          },
          addLines: false,
          data: [],
          display: 'block',
        },
      },
    },

    5: {
      type: 'download-output',
    },
  },
};
