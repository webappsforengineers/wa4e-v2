export const appConf = {
  appName: 'mcc-su',
  appTitle: 'MCC — su',
  appPageTitle: '',
  appDescription: 'Conversion of MCC parameters to su profile',
  appColour: '#f1c04c',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        '': {
          lambda: [0.205, null, '&lambda;'],
          kappa: [0.044, null, '&kappa;'],
          M: [0.89, null, 'M'],
          e_cs: [2.14, null, 'e<sub>cs</sub>'],
          v_prime: [0.3, null, 'v&#39;'],
          G_s: [2.7, null, 'G<sub>s</sub>'],
          g: [9.81, 'm/s<sup>2</sup>', 'g'],
          gamma_w: [9.81, 'kN/m<sup>3</sup>', '&gamma;<sub>w</sub>'],
          sigma_prime_v0: [1, 'kPa', '&sigma;&#39;<sub>v0</sub>'],
          depth_of_interest: [10, 'm', 'DoI'],
        },
      },
      helpText: 'Helpful text!',
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          e_1: [null, null, 'e<sub>1</sub>'],
          phi_prime_cs_ps: [null, 'radians', '&phi;&#39;<sub>cs,ps</sub>'],
          phi_prime_cs_ps_degrees: [null, 'degrees', null],
          phi_prime_cs_txc: [null, 'radians', '&phi;&#39;<sub>cs,txc</sub>'],
          phi_prime_cs_txc_degrees: [null, 'degrees', null],
          K_0: [null, null, 'K<sub>0</sub>'],
          gamma_sat_av: [null, 'kN/m<sup>3</sup>', '&gamma;<sub>sat,av</sub>'],
          gamma_prime_av: [
            null,
            'kN/m<sup>3</sup>',
            '&gamma;&#39;<sub>av</sub>',
          ],
        },
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        'Plane Strain (PS)': {
          s_um_ps: [null, 'kPa', 's<sub>um</sub>'],
          k_ps: [null, 'kPa/m', 'k'],
        },
        'Triaxial (TX)': {
          s_um_tx: [null, 'kPa', 's<sub>um</sub>'],
          k_tx: [null, 'kPa/m', 'k'],
        },
      },
    },
    {
      type: 'image-tile',
      img_pth: 'mcc-su-figure.png',
      img_w: '496px',
      img_h: '210px',
    },
    {
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
                x: a,
                y: b,
                name: '&sigma;&#39;<sub>v</sub>',
                type: 'scatter',
              },
              {
                x: a,
                y: c,
                name: 'u<sub>hyd</sub>',
                type: 'scatter',
              },
              {
                x: a,
                y: d,
                name: '&sigma;<sub>v</sub>',
                type: 'scatter',
              },
              {
                x: a,
                y: e,
                name: '&sigma;&#39;<sub>h</sub>',
                type: 'scatter',
              },
            ];
          },
          layout: {
            title: '<b>In Situ Stresses</b>',
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: 'stress (kPa)',
              side: 'top',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: true,
          },
          args: ['z', 'sigma_prime_v', 'u_hyd', 'sigma_v', 'sigma_prime_h'],
          addLines: false,
          data: [],
        },
        inSituUndrainedStresses: {
          dataFun(a, b, c) {
            return [
              {
                x: a,
                y: b,
                name: 'PS',
                type: 'scatter',
              },
              {
                x: a,
                y: c,
                name: 'TX',
                type: 'scatter',
              },
            ];
          },
          layout: {
            title: '<b>In Situ Undrained Strength</b>',
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: 'S<sub>u</sub> (kPa)',
              side: 'top',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: true,
          },
          args: ['z', 'PS_s_u', 'TX_s_u'],
          addLines: false,
          data: [],
        },
      },
    },
  ],
};
