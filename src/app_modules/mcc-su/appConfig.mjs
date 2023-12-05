/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'mcc-su',
  appTitle: 'MCC - s<sub>u</sub>',
  appPageTitle: 'MCC - s<sub>u</sub>',
  appDescription: 'Conversion of MCC parameters to su profile',
  appColour: '#e1e8ec',
  textColour: 'text-dark',
  appWebComponents: {
    0: {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Conversion of MCC parameters to undrained shear strength profile with depth',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables calculation of an undrained shear strength profile with depth from Modified Cam Clay parameters (&lambda;, &kappa;, z, M & ecs).  In this app, DoI is defined as Depth of Interest.  Details of the equations are available here [link to the document currently on ‘Additional Reading’ – but will need to be embedded elsewhere as that tile is going]',
          format: '',
        },
      },
    },
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        '': {
          lambda: {
            label: '&lambda;',
            unit: null,
            value: 0.205,
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
          M: {
            label: 'M',
            unit: null,
            value: 0.89,
            visible: '',
            lb: '',
            ub: '',
          },
          e_cs: {
            label: 'e<sub>cs</sub>',
            unit: null,
            value: 2.14,
            visible: '',
            lb: '',
            ub: '',
          },
          v_prime: {
            label: 'v&#39;',
            unit: null,
            value: 0.3,
            visible: '',
            lb: '',
            ub: '',
          },
          G_s: {
            label: 'G<sub>s</sub>',
            unit: null,
            value: 2.7,
            visible: '',
            lb: '',
            ub: '',
          },
          g: {
            label: 'g',
            unit: 'm/s<sup>2</sup>',
            value: 9.81,
            visible: '',
            lb: '',
            ub: '',
          },
          gamma_w: {
            label: '&gamma;<sub>w</sub>',
            unit: 'kN/m<sup>3</sup>',
            value: 9.81,
            visible: '',
            lb: '',
            ub: '',
          },
          sigma_prime_v0: {
            label: '&sigma;&#39;<sub>v0</sub>',
            unit: 'kPa',
            value: 1,
            visible: '',
            lb: '',
            ub: '',
          },
          depth_of_interest: {
            label: 'DoI',
            unit: 'm',
            value: 10,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {},
      helpText: 'Helpful text!',
    },
    2: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          e_1: {
            label: 'e<sub>1</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          phi_prime_cs_ps: {
            label: '&phi;&#39;<sub>cs,ps</sub>',
            unit: 'radians',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          phi_prime_cs_ps_degrees: {
            label: null,
            unit: 'degrees',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          phi_prime_cs_txc: {
            label: '&phi;&#39;<sub>cs,txc</sub>',
            unit: 'radians',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          phi_prime_cs_txc_degrees: {
            label: null,
            unit: 'degrees',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          K_0: {
            label: 'K<sub>0</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          gamma_sat_av: {
            label: '&gamma;<sub>sat,av</sub>',
            unit: 'kN/m<sup>3</sup>',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          gamma_prime_av: {
            label: '&gamma;&#39;<sub>av</sub>',
            unit: 'kN/m<sup>3</sup>',
            value: null,
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
        'Plane Strain (PS)': {
          s_um_ps: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          k_ps: {
            label: 'k',
            unit: 'kPa/m',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        'Triaxial (TX)': {
          s_um_tx: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          k_tx: {
            label: 'k',
            unit: 'kPa/m',
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
      type: 'image-tile',
      img_pth: '../../img/mcc-su-figure.png',
      img_w: '496px',
      img_h: '210px',
    },
    5: {
      type: 'graph-tile',
      fields: {
        z: null,
        sigma_prime_v: null,
        u_hyd: null,
        sigma_v: null,
        sigma_prime_h: null,
        PS_s_u: null,
        TX_s_u: null,
      },
      plots: {
        inSituStresses: {
          dataFun(a, b, c, d, e) {
            return [
              {
                x: b,
                y: a,
                name: 'σ&#39;<sub>v</sub>',
                type: 'scatter',
              },
              {
                x: c,
                y: a,
                name: 'u<sub>hyd</sub>',
                type: 'scatter',
              },
              {
                x: d,
                y: a,
                name: 'σ<sub>v</sub>',
                type: 'scatter',
              },
              {
                x: e,
                y: a,
                name: 'σ&#39;<sub>h</sub>',
                type: 'scatter',
              },
            ];
          },
          layout: {
            title: {
              text: '<b>In Situ Stresses</b>',
              y: 0.95,
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: {
                text: 'stress (kPa)',
                automargin: true,
                standoff: 0,
              },
              side: 'top',
            },
            yaxis: {
              title: {
                text: 'z (m)',
                automargin: true,
                standoff: 0,
              },
              autorange: 'reversed',
            },
            showlegend: true,
            font: {
              size: 18,
            },
          },
          args: ['z', 'sigma_prime_v', 'u_hyd', 'sigma_v', 'sigma_prime_h'],
          addLines: false,
          data: [],
          show: true,
        },
        inSituUndrainedStresses: {
          dataFun(a, b, c) {
            return [
              {
                x: b,
                y: a,
                name: 'PS',
                type: 'scatter',
              },
              {
                x: c,
                y: a,
                name: 'TX',
                type: 'scatter',
              },
            ];
          },
          layout: {
            title: {
              text: '<b>In Situ Undrained Strength</b>',
              y: 0.95,
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: {
                text: 'S<sub>u</sub> (kPa)',
                automargin: true,
                standoff: 0,
              },
              side: 'top',
            },
            yaxis: {
              title: {
                text: 'z (m)',
                automargin: true,
                standoff: 0,
              },
              autorange: 'reversed',
            },
            showlegend: true,
            font: {
              size: 18,
            },
          },
          args: ['z', 'PS_s_u', 'TX_s_u'],
          addLines: false,
          data: [],
          show: true,
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    6: {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  },
};
