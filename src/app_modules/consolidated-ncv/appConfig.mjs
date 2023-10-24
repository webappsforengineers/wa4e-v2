import { changeObj } from './onChange.mjs';

export const appConf = {
  appName: 'consolidated-ncv',
  appTitle: 'Shallow Foundation Consolidated NcV',
  appPageTitle: 'Shallow Foundation Consolidated NcV',
  appDescription: 'Consolidated undrained vertical bearing capacity',
  appColour: '#9a76c1',
  appWebComponents: {
    0: {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Surface Foundation Consolidated Undrained NcV',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables calculation of increase in undrained vertical bearing capacity from vertical (including self-weight) preloading and consolidation considering the magnitude and duration of an applied preload and the initial over-consolidation ratio of the deposit. Increases in bearing capacity were identified through results from finite element analyses using a Modified Cam Clay constitutive model, from which a simple critical state inspired (CSI) theoretical framework was developed to predict the bearing capacity as a function of magnitude of preload, consolidation time, OCR and interface roughness. \nThe FEA results and theoretical framework are published in <a href="http://dx.doi.org/10.1680/geot.13.P.101" target="_blank" rel="noopener noreferrer">“A method for predicting the consolidated undrained capacity of shallow foundations on clay“ by Gourvenec, S., Vulpe, C. & Murthy, T. (2014) , Géotechnique, 64(3): 215–225 </a>',
          format: '',
        },
      },
    },
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        Foundation: {
          D_B: {
            label: 'D or B',
            unit: 'm',
            value: 'Select Foundation Shape',
            visible: '',
            lb: '',
            ub: '',
          },
          alpha_base: {
            label: '&alpha;<sub>base</sub>',
            unit: null,
            value: 1,
            visible: '',
            lb: '0',
            ub: '1',
          },
        },
        Soil: {
          gamma_soil: {
            label: '&gamma;',
            unit: 'kN/m<sub>3</sub>',
            value: 16,
            visible: '',
            lb: '',
            ub: '',
          },
          kv_perm: {
            label: 'k',
            unit: 'm/s',
            value: Number(1.3e-8),
            visible: '',
            lb: '',
            ub: '',
          },
          kappa: {
            label: '&kappa;',
            unit: null,
            value: 0.044,
            visible: '',
            lb: '',
            ub: '',
          },
          lambda: {
            label: '&lambda;',
            unit: null,
            value: 0.205,
            visible: '',
            lb: '',
            ub: '',
          },
          e1_NCL: {
            label: 'e',
            unit: null,
            value: 2.25,
            visible: '',
            lb: '',
            ub: '',
          },
          M: {
            label: "M = q/p'",
            unit: null,
            value: 0.89,
            visible: '',
            lb: '',
            ub: '',
          },
          OCR: {
            label: 'OCR',
            unit: null,
            value: 1,
            visible: '',
            lb: '',
            ub: '',
          },
          surcharge: {
            label: '&sigma;&#39;<sub>VO</sub>',
            unit: 'kPa',
            value: 25,
            visible: '',
            lb: '',
            ub: '',
          },
          Gs: {
            label: 'G<sub>S</sub>',
            unit: null,
            value: 2.7,
            visible: '',
            lb: '',
            ub: '',
          },
          gamma_w: {
            label: '&gamma;<sub>W</sub>',
            unit: 'kN/m<sup>3</sup>',
            value: 10,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Loading: {
          relative_preload: {
            label: 'v<sub>p</sub>/v<sub>u</sub>',
            unit: null,
            value: 0.3,
            visible: '',
            lb: '0',
            ub: '1',
          },
          t_cons: {
            label: 't<sub>cons</sub>',
            unit: 'years',
            value: 1,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Method: {
          T_50: {
            label: 'T<sub>50</sub>',
            unit: null,
            value: 'Select Foundation Shape',
            visible: '',
            lb: '',
            ub: '',
          },
          m_const: {
            label: 'm',
            unit: null,
            value: 'Select Foundation Shape',
            visible: '',
            lb: '',
            ub: '',
          },
          fsigma: {
            label: 'f<sub>&sigma;</sub>',
            unit: null,
            value: 0.8,
            visible: '',
            lb: '',
            ub: '',
          },
          fsu: {
            label: 'f<sub>su</sub>',
            unit: null,
            value: 0.45,
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
              check_status: null,
              label: 'Circular',
              visible: '',
            },
            Strip: {
              check_status: null,
              label: 'Strip',
              visible: '',
            },
          },
          onChange: changeObj,
          modifyOnClick: true,
        },
      },
      helpText: 'Helpful text!',
    },
    2: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          gamma_eff_soil: {
            label: '&gamma;&apos;',
            unit: 'kN/m&sup3;',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Fdn_area: {
            label: 'A',
            unit: 'm&sup2;',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          phi_degs: {
            label: '&#981;&#39;',
            unit: 'degrees',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          K0_nc: {
            label: 'K<sub>0,NC</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          K0_oc: {
            label: 'K<sub>0,OC</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          R_fOCR: {
            label: 's<sub>u</sub>&sigma;&#39;<sub>v</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          R_nc: {
            label: 'R = (s<sub>u</sub>/&sigma;&#39;<sub>v</sub>)<sub>NC</sub>',
            unit: null,
            value: null,
            lb: '',
            ub: '',
          },
          s_um: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          k_su: {
            label: 'k<sub>su</sub>',
            unit: 'kPa/m',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          kappa_su: {
            label: '&kappa;<sub>su</sub> = kD/s<sub>um</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          e0: {
            label: 'e<sub>0</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          mv0: {
            label: 'm<sub>v0</sub>',
            unit: '1/kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          cv0: {
            label: 'c<sub>v0</sub>',
            unit: 'm&sup2;/year',
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
            label: 'NcV',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vult_geo: {
            label: 'v<sub>ult,exc. surcharge</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vult: {
            label: 'v<sub>ult,inc. surcharge</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          cv_op: {
            label: 'c<sub>v0</sub>',
            unit: 'm&sup2;/year',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          T: {
            label: 'T',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          U: {
            label: 'U',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vp: {
            label: 'v<sub>p</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          op_preload: {
            label: 'f<sub>&sigma;</sub>v<sub>p</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vu_cons_max: {
            label: 'v<sub>u,cons_max</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vu_cons: {
            label: 'v<sub>u,cons</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          vu_cons_over_vu_cons_max: {
            label: 'v<sub>u,cons</sub>/v<sub>u,cons_max</sub>',
            unit: null,
            value: null,
            lb: '',
            ub: '',
          },
          rel_gain_vu: {
            label: 'v<sub>u,cons</sub>/v<sub>u</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          rel_gain_vu_percentage: {
            label: '% gain in v<sub>ult</sub>',
            unit: '%',
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
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  },
};
