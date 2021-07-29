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
          D_B: ['Select Foundation Shape', 'm', 'D or B'],
          alpha_base: [1, null, '&alpha;<sub>base</sub>'],
        },
        Soil: {
          gamma_soil: [16, 'kN/m<sub>3</sub>', '&gamma;'],
          kv_perm: [1.3e-8, 'm/s', 'k'],
          kappa: [0.044, null, '&kappa;'],
          lambda: [0.205, null, '&lambda;'],
          e1_NCL: [2.25, null, 'e'],
          M: [0.89, null, "M = q/p'"],
          OCR: [1, null, 'OCR'],
          surcharge: [25, 'kPa', '&sigma;&#39;<sub>VO</sub>'],
          Gs: [2.7, null, 'G<sub>S</sub>'],
          gamma_w: [10, 'kN/m<sup>3</sup>', '&gamma;<sub>W</sub>'],
        },
        Loading: {
          relative_preload: [0.3, null, 'v<sub>p</sub>/v<sub>u</sub>'],
          t_cons: [1, 'years', 't<sub>cons</sub>'],
        },
        Method: {
          T_50: ['Select Foundation Shape', null, 'T<sub>50</sub>'],
          m_const: ['Select Foundation Shape', null, 'm'],
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
              T_50: [0.035, null, 'T<sub>50</sub>'],
              m_const: [-1.05, null, 'm'],
            },
          },
        },
        Strip: {
          fields: {
            Foundation: {
              D_B: [12, 'm', 'B'],
            },
            Method: {
              T_50: [0.17, null, 'T<sub>50</sub>'],
              m_const: [-0.95, null, 'm'],
            },
          },
        },
      },
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        gamma_eff_soil: [null, 'kN/m&sup3;', '&gamma;&apos;'],
        Fdn_area: [null, 'm&sup2;', 'A'],
        phi_degs: [null, 'degrees', '&#981;&#39;'],
        K0_nc: [null, null, 'K<sub>0,NC</sub>'],
        K0_oc: [null, null, 'K<sub>0,OC</sub>'],
        R_fOCR: [null, null, 's<sub>u</sub>&sigma;&#39;<sub>v</sub>'],
        R_nc: [
          null,
          null,
          'R = (s<sub>u</sub>/&sigma;&#39;<sub>v</sub>)<sub>NC</sub>',
        ],
        s_um: [null, 's<sub>um</sub>', 'kPa'],
        k_su: [null, 'k<sub>su</sub>', 'kPa/m'],
        kappa_su: [null, null, '&kappa;<sub>su</sub> = kD/s<sub>um</sub>'],
        e0: [null, null, 'e<sub>0</sub>'],
        mv0: [null, '1/kPa', 'm<sub>v0</sub>'],
        cv0: [null, 'm&sup2;/year', 'c<sub>v0</sub>'],
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          NcV: [null, null, 'NcV'],
          vult_geo: [null, 'kPa', 'v<sub>ult,exc. surcharge</sub>'],
          vult: [null, 'kPa', 'v<sub>ult,inc. surcharge</sub>'],
          cv_op: [null, 'm&sup2;/year', 'c<sub>v0</sub>'],
          T: [null, null, 'T'],
          U: [null, null, 'U'],
          vp: [null, 'kPa', 'v<sub>p</sub>'],
          op_preload: [null, 'kPa', 'f<sub>&sigma;</sub>v<sub>p</sub>'],
          vu_cons_max: [null, 'kPa', 'v<sub>u,cons_max</sub>'],
          vu_cons: [null, 'kPa', 'v<sub>u,cons</sub>'],
          vu_cons_over_vu_cons_max: [
            null,
            null,
            'v<sub>u,cons</sub>/v<sub>u,cons_max</sub>',
          ],
          rel_gain_vu: [null, null, 'v<sub>u,cons</sub>/v<sub>u</sub>'],
          rel_gain_vu_percentage: [null, '%', '% gain in v<sub>ult</sub>'],
        },
      },
    },
  ],
};
