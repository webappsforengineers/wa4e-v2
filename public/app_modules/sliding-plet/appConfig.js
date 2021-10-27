export const appConf = {
  appName: 'sliding-plet',
  appTitle: 'Sliding PLET',
  appPageTitle: 'Sliding PLET',
  appColour: '#FF27DF',
  appDescription: 'Script to calculate sliding PLET settlement',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Foundation/structure': {
          B: [6, 'm', 'B', ''],
          L: [21, 'm', 'L', ''],
          V_eqmt: [900, 'kN', 'V<sub>eqmt</sub>', ''],
          sig_fnd: [0, 'kPa', '&sigma;<sub>fnd</sub>', ''],
        },
        'Operational sequence': {
          n_cyc_op: [100, null, 'n<sub>cyc,op</sub>', ''],
          t_op: [3, 'months', 't<sub>op</sub>', ''],
          t_sd: [0.03, 'months', 't<sub>op</sub>', ''],
        },
        'Soil properties': {
          g_a: [6.5, 'kN/m<sup>3</sup>', 'g<sub>a</sub>', ''],
          cv: [3.35, 'm<sup>2</sup>/yr', 'c<sub>v</sub>', ''],
          su_sig_v: [0.35, null, 'su<sub>&sigma;,v</sub>', ''],
          M: [1.4, null, 'M', ''],
          lamda: [0.084, null, '&lambda;', ''],
          N: [1.45, null, 'N', ''],
          kappa: [0.00485, null, '&kappa;', ''],
          sig_sur: [0.1, 'kPa', '&sigma;<sub>sur</sub>', ''],
          S_t: [4, null, 'S<sub>t</sub>', ''],
        },
        'Model Coefficents': {
          delta_e_i: [0, null, '&delta;<sub>e,i</sub>', ''],
          sig_v_i: [1.5, 'kPa', '&sigma;<sub>v,i</sub>', ''],
          b_NCL: [1, null, 'b<sub>NCL</sub>', ''],
          N_eq_95: [10, null, 'N<sub>95</sub>', ''],
          beta: [0.8, null, '&beta;', ''],
          chi: [2.5, null, '&chi;', ''],
          alphaint: [1, null, '&alpha;<sub>init</sub>', ''],
          InitStressFrac: [1, null, 'InitStressFrac', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Inputs',
      fields: {
        'Foundation/structure': {
          b: [null, 'm', 'b', ''],
          l: [null, 'm', 'l', ''],
          sig_eqmt: [null, 'kPa', '&sigma;<sub>eqmt</sub>', ''],
          sig_op: [null, 'kPa', '&sigma;<sub>op</sub>', ''],
        },
        'Operational sequence': {
          n_slide: [null, null, 'n<sub>slide</sub>', ''],
          z_max: [null, 'm', 'z<sub>max</sub>', ''],
          s_max: [null, 'm', 's<sub>max</sub>', ''],
          V_op: [null, 'kn', 'V<sub>op</sub>', ''],
        },
        'Soil properties': {
          R_0: [null, null, 'R<sub>0</sub>', ''],
          cap_gamma_0: [null, null, 'cap<sub>&gamma;<sub>0</sub></sub>', ''],
          R_f: [null, null, 'R<sub>f</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  ],
};
