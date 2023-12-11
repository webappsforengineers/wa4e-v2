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
      type: 'input-tile',
      title: 'Input',
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
      subComponents: {},
      helpText: 'Helpful text!',
    },
    // 2: {
    //   type: 'image-tile',
    //   img_pth: '../../img/caisson-figure.png',
    //   img_w: '600px',
    //   img_h: '600px',
    // },
    // 3: {
    //   type: 'derived-input-tile',
    //   title: 'Derived Input',
    //   fields: {
    //     '': {
    //       LDo: {
    //         label: 'L/D<sub>o</sub>',
    //         unit: null,
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Di: {
    //         label: 'D<sub>i</sub>',
    //         unit: 'm',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Atip: {
    //         label: 'A<sub>tip</sub>',
    //         unit: 'm<sup>2</sup>',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Aplug: {
    //         label: 'A<sub>plug</sub>',
    //         unit: 'm<sup>2</sup>',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Wplug: {
    //         label: 'W&#39;<sub>plug</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Wcaisson: {
    //         label: 'W&#39;<sub>caisson</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //     },
    //   },
    //   subComponents: {},
    // },
    // 4: {
    //   type: 'output-tile',
    //   title: 'Output',
    //   fields: {
    //     Installation: {
    //       Q: {
    //         label: 'Q',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       MRS: {
    //         label: 'Max Required Suction',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       MPS: {
    //         label: 'Max Permissible Suction',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       MFPS: {
    //         label: 'Min FoS Plug Stability',
    //         unit: null,
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //     },
    //     Capacity: {
    //       Vult1: {
    //         label: 'V<sub>ult,1</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       VT1: {
    //         label: 'V<sub>T,1</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Vult2: {
    //         label: 'V<sub>ult,2</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       VT2: {
    //         label: 'V<sub>T,2</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       Vult3: {
    //         label: 'V<sub>ult,3</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //       VT3: {
    //         label: 'V<sub>T,3</sub>',
    //         unit: 'kN',
    //         value: null,
    //         visible: '',
    //         lb: '',
    //         ub: '',
    //       },
    //     },
    //   },
    //   subComponents: {},
    // },
    // 5: {
    //   type: 'graph-tile',
    //   fields: {
    //     z: null,
    //     suz: null,
    //     q_total: null,
    //     req_suction: null,
    //     fos: null,
    //   },
    //   plots: {
    //     plotSuKpc: {
    //       dataFun(a, b) {
    //         return [
    //           {
    //             x: a,
    //             y: b,
    //           },
    //         ];
    //       },
    //       layout: {
    //         title: '',
    //         xaxis: {
    //           title: 'S<sub>u</sub> (kPa)',
    //           side: 'top',
    //           rangemode: 'tozero',
    //         },
    //         yaxis: {
    //           title: 'z (m)',
    //           autorange: 'reversed',
    //         },
    //         showlegend: false,
    //         mode: 'lines',
    //         line: {
    //           shape: 'spline',
    //         },
    //         font: {
    //           size: 18,
    //         },
    //       },
    //       args: ['suz', 'z'],
    //       addLines: false,
    //       data: [],
    //     },
    //     plotPenRes: {
    //       dataFun(a, b, c) {
    //         return [
    //           {
    //             name: 'Required Suction',
    //             x: a,
    //             y: c,
    //           },
    //           {
    //             name: 'Penetration Resistance',
    //             x: b,
    //             y: c,
    //           },
    //         ];
    //       },
    //       layout: {
    //         type: 'scatter',
    //         title: '',
    //         xaxis: {
    //           title: 'kN',
    //           side: 'top',
    //           ticksuffix: '',
    //         },
    //         yaxis: {
    //           title: 'z (m)',
    //           autorange: 'reversed',
    //         },
    //         showlegend: true,
    //         mode: 'lines',
    //         line: {
    //           shape: 'spline',
    //         },
    //         legend: {
    //           traceorder: 'normal',
    //         },
    //         font: {
    //           size: 18,
    //         },
    //       },
    //       args: ['req_suction', 'q_total', 'z'],
    //       addLines: false,
    //       data: [],
    //     },
    //     plotFosStability: {
    //       dataFun(a, b) {
    //         return [
    //           {
    //             x: a,
    //             y: b,
    //           },
    //         ];
    //       },
    //       layout: {
    //         type: 'scatter',
    //         title: '',
    //         showlegend: false,
    //         xaxis: {
    //           title: 'FoS Plug Stability',
    //           side: 'top',
    //         },
    //         yaxis: {
    //           title: 'z (m)',
    //           autorange: 'reversed',
    //         },
    //         mode: 'lines',
    //         line: {
    //           shape: 'spline',
    //         },
    //         font: {
    //           size: 18,
    //         },
    //       },
    //       args: ['fos', 'z'],
    //       addLines: false,
    //       data: [],
    //     },
    //   },
    //   updateConf: {
    //     noNewData: false,
    //     clearData: false,
    //   },
    // },
    // 6: {
    //   type: 'batch-tile',
    //   title: 'Batch Calculation',
    // },
  },
};
