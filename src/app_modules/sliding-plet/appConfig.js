export const appConf = {
  appName: 'sliding-plet',
  appTitle: 'Sliding PLET',
  appPageTitle: 'Sliding PLET',
  appColour: '#FF27DF',
  appDescription: 'Script to calculate sliding PLET settlement',
  appWebComponents: [
    {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Evolution of resistance and settlement of a tolerably mobile mudmat from episodic sliding and intervening consolidation',
          format: 'h5',
        },
        blurb: {
          text:
            'This app enables prediction of the evolution of undrained sliding resistance and settlement of a tolerably mobile mudmat foundation on a normally consolidated fine grained deposit due to episodes of monotonic sliding with intervening consolidation.  Changes in soil strength profile with depth below the sliding foundation can also be predicted. The app enables exploration of the sensitivity of geotechnical properties on the performance of the foundation over the whole life of the structure. The predictions are based on a critical state inspired (CSI) framework, that has been validated against centrifuge model tests, and is shown to capture the essential elements of the soil–structure interaction, which include: (a) the changing soil strength from cycles of sliding and pore pressure generation; (b) the regain in strength due to dissipation of excess pore pressure (consolidation); and (c) the soil contraction and consequent settlement of the foundation caused by the consolidation process. \n' +
            'Details of the centrifuge model tests underpinning the theoretical framework are published in <a href="http://dx.doi.org/10.1680/geot.14.P.098"> “Tolerably mobile subsea foundations – Observations of performance” by Cocjin. M., Gourvenec, S., White, D.J & Randolph, M.F. (2014), Géotechnique 64(11): 895-909</a>, and details of the theoretical framework are published in <a href="http://dx.doi.org/10.1680/jgeot.16.P.137"> “Theoretical framework for predicting the response of tolerably mobile subsea installations” by Cocjin. M., Gourvenec, S., White, D.J & Randolph, M.F. (2017), Géotechnique 67(7):608-620 </a>',
          format: '',
        },
      },
    },
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
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          cycles: [null, null, 'Cycle', ''],
          sliding_event: [null, null, 'Sliding Event', ''],
          time_months: [null, 'months', 'Time', ''],
          time_years: [null, 'years', 'Time', ''],
          hult: [null, 'kN', 'Hult', ''],
          cons_settlement: [null, 'm', 'Cons. settlement wc', ''],
          shear_settlement: [null, 'm', 'Shear settlement ws', ''],
          total_settlement: [null, 'm', 'Total settlement wt', ''],
        },
      },
    },
  ],
};
