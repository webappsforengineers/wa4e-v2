export const appConf = {
  appName: 'consolidated-ncv',
  appTitle: 'Consolidated NcV',
  appPageTitle: 'Shallow Foundation Consolidated NcV',
  appDescription: 'Consolidated undrained vertical bearing capacity',
  appColour: '#9a76c1',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        Foundation: {
          D_B: [12, 'm', 'D'],
          alphabase: [1, null, '&alpha;<sub>base</sub>'],
        },
        Soil: {
          gamma_in: [16, 'kN/m<sub>3</sub>', '&gamma;'],
          k: [1.3e-8, 'm/s', 'k'],
          kappa: [0.044, null, '&kappa;'],
          lambda: [0.205, null, '&lambda;'],
          e: [2.25, null, 'e'],
          Mqp: [0.89, null, "M = q/p'"],
          OCR: [1, null, 'OCR'],
          sigmaVO: [25, 'kPa', '&sigma;&#39;<sub>VO</sub>'],
          GS: [2.7, null, 'G<sub>S</sub>'],
          gamma_w: [10, 'kN/m<sup>3</sup>', '&gamma;<sub>W</sub>'],
        },
        Loading: {
          vpvu: [0.3, null, 'v<sub>p</sub>/v<sub>u</sub>'],
          tcons: [1, 'years', 't<sub>cons</sub>'],
        },
        Method: {
          T50: [0.035, null, 'T<sub>50</sub>'],
          m: [-1.05, null, 'm'],
          fsigma: [0.8, null, 'f<sub>$sigma;</sub>'],
          fsu: [0.45, null, 'f<sub>su</sub>'],
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
            Foundation: {
              D_B: [12, 'm', 'D'],
            },
            Method: {
              T50: [0.035, null, 'T<sub>50</sub>'],
              m: [-1.05, null, 'm'],
            },
          },
        },
        Strip: {
          fields: {
            Foundation: {
              D_B: [12, 'm', 'B'],
            },
            Method: {
              T50: [0.17, null, 'T<sub>50</sub>'],
              m: [-0.95, null, 'm'],
            },
          },
        },
      }
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        gamma_out: [null, 'kN/m&sup3;', '&gamma;&apos;'],
        A: [null, 'm&sup2;', 'A'],
        phi: [null, 'degrees', '&#981;'],
        K0NC: [null, null, 'K<sub>0,NC</sub>'],
        K0OC: [null, null, 'K<sub>0,OC</sub>'],
        Susigv: [null, null, 's<sub>u</sub>&sigma;&#39;<sub>v</sub>'],
        R: [
          null,
          null,
          'R = (s<sub>u</sub>/&sigma;&#39;<sub>v</sub>)<sub>NC</sub>',
        ],
        sum: [null, 's<sub>um</sub>', 'kPa'],
        ksu: [null, 'k<sub>su</sub>', 'kPa/m'],
        kappasu: [null, null, '&kappa;<sub>su</sub> = kD/s<sub>um</sub>'],
        e0: [null, null, 'e<sub>0</sub>'],
        mv0: [null, '1/kPa', 'm<sub>v0</sub>'],
        cv0: [null, 'm&sup2;/year', 'c<sub>v0</sub>'],
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        "":{
        NcV: [null, null, 'NcV'],
        Vultexc: [null, 'kPa', 'v<sub>ult,exc. surcharge</sub>'],
        Vultinc: [null, 'kPa', 'v<sub>ult,inc. surcharge</sub>'],
        cv0_out: [null, 'm&sup2;/year', 'c<sub>v0</sub>'],
        T: [null, null, 'T'],
        U: [null, null, 'U'],
        vp: [null, 'kPa', 'v<sub>p</sub>'],
        Fsigvp: [null, 'kPa', 'f<sub>&sigma;</sub>v<sub>p</sub>'],
        vuconsmax: [null, 'kPa', 'v<sub>u,cons_max</sub>'],
        vucons: [null, 'kPa', 'v<sub>u,cons</sub>'],
        vuconsvuconsmax: [
          null,
          null,
          'v<sub>u,cons</sub>/v<sub>u,cons_max</sub>',
        ],
        vuconsvu: [null, null, 'v<sub>u,cons</sub>/v<sub>u</sub>'],
        pergaininvult: [null, '%', '% gain in v<sub>ult</sub>'],
      },}
    },
  ],
};
