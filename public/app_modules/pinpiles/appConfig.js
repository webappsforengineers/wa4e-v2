/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'pinpiles',
  appTitle: 'Mudmat & Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T',
  appPageTitle: 'Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T',
  appDescription:
    'Undrained 6 DoF capacity of rectangular skirted mudmat and pinpiled mudmats',
  appColour: '#698ef1',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Characteristic Soil Shear Strength': {
          s_um: [0.5, 'kPa', 's<sub>um</sub>', ''],
          k: [1, 'kPa/m', 'k', ''],
          gam_dash: [5, 'kN/m<sup>3</sup>', '&gamma;&#39;<sub>avg</sub>', ''],
        },
        'Characteristic Loads and Eccentricities': {
          V_c: [600, 'kN', 'V<sub>p</sub>', ''],
          e_xV: [0, 'm', 'e<sub>xV</sub>', ''],
          e_yV: [0, 'm', 'e<sub>yV</sub>', ''],
          H_xc: [50, 'kN', 'H<sub>xc</sub>', ''],
          e_yHx: [2, 'm', 'e<sub>yHx</sub>', ''],
          e_zHx: [5, 'm', 'e<sub>zHx</sub>', ''],
          H_yc: [90, 'kN', 'H<sub>yc</sub>', ''],
          e_xHy: [3, 'm', 'e<sub>xHy</sub>', ''],
          e_zHy: [5, 'm', 'e<sub>zHy</sub>', ''],
        },
        'Relative Loads Taken By Piles': {
          beta_pV: ['Select Foundation', null, '&beta;<sub>pV</sub>', ''],
          beta_pH: ['Select Foundation', null, '&beta;<sub>pH</sub>', ''],
          beta_pM: ['Select Foundation', null, '&beta;<sub>pM</sub>', ''],
        },
        'Load and Material Factors (&#8805;1)': {
          lambda_V: [1.1, null, '&lambda;<sub>V</sub>', ''],
          lambda_H: [1.35, null, '&lambda;<sub>H</sub>', ''],
          lambda_s: [1.25, null, '&lambda;<sub>s</sub>', ''],
        },
        'Mudmat Geometry': {
          B: [7.5, 'm', 'B', ''],
          BoverL: [0.5, null, 'B/L', ''],
          doverB: [0.081, null, 'd<sub>skirt</sub>/B (0-0.3)', ''],
        },
        'Skirt-soil Interaction': {
          alpha_skirt: [1, null, '&alpha;<sub>skirt</sub>', ''],
        },
        'Pile Group, Geometry': {
          D_pile: [0.9, 'm', 'D<sub>pile</sub>', ''],
          W_pile: [40, 'kN', 'W<sub>pile</sub>', ''],
          B_piles: [6, 'm', 'B<sub>piles</sub> (0-9.10)', ''],
          L_piles: [13, null, 'L<sub>piles</sub> (0-19.10)', ''],
          L_embed: [9, 'm', 'L<sub>embed</sub>', ''],
          d_shadow_over_d: [
            1,
            null,
            'd<sub>shadow</sub>/d<sub>skirt</sub>',
            '',
          ],
        },
        'Pile-soil Interaction': {
          alpha_piles: [1, null, '&alpha;<sub>piles</sub>', ''],
          Nc_piles: [9, null, 'N<sub>c,piles</sub>', ''],
          f_end_t: [0, null, 'f<sub>end,t</sub>', ''],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 4,
          position: 'beforeTitle',
          display: '',
          title: 'Foundation',
          options: {
            mudmatFoundationOnly: [null, 'Mudmat Foundation Only', ''],
            pileGroupOnly: [null, 'Pile Group Only', ''],
            hybridPiledMudmat: [null, 'Hybrid Piled Mudmat', ''],
          },
          onChange: {
            mudmatFoundationOnly: {
              fields: {
                'Relative Loads Taken By Piles': {
                  beta_pV: [0.332, null, '&beta;<sub>pV</sub>', ''],
                  beta_pH: [0.776, null, '&beta;<sub>pH</sub>', ''],
                  beta_pM: [0.478, null, '&beta;<sub>pM</sub>', ''],
                },
              },
            },
            pileGroupOnly: {
              fields: {
                'Relative Loads Taken By Piles': {
                  beta_pV: [0.332, null, '&beta;<sub>pV</sub>', ''],
                  beta_pH: [0.776, null, '&beta;<sub>pH</sub>', ''],
                  beta_pM: [0.478, null, '&beta;<sub>pM</sub>', ''],
                },
              },
            },
            hybridPiledMudmat: {
              fields: {
                'Relative Loads Taken By Piles': {
                  beta_pV: [0.332, null, '&beta;<sub>pV</sub>', ''],
                  beta_pH: [0.747, null, '&beta;<sub>pH</sub>', ''],
                  beta_pM: [0.287, null, '&beta;<sub>pM</sub>', ''],
                },
              },
            },
          },
          modifyOnClick: true,
        },
      ],
      helpText: 'Helpful text!',
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        Mat: {
          L: [null, 'm', 'L', ''],
          d_skirt: [null, 'm', 'd<sub>skirt</sub>', ''],
          A: [null, 'm<sup>2</sup>', 'A', ''],
          s_u0: [null, 'kPa', 's<sub>u0</sub>', ''],
          kappa: [null, null, '&kappa;(0-10)', ''],
        },
        Pile: {
          L_embed_overB_piles: [
            null,
            null,
            'L<sub>embed</sub>/B<sub>piles</sub>',
            ,
            '',
          ],
          d_shadow: [null, 'm', 'd<sub>shadow</sub>', ''],
          theta_piles: [null, 'rads', '&theta;<sub>piles</sub>', ''],
          theta_piles_degrees: [null, 'rads', '&theta;<sub>piles</sub>', ''],
          s_u_pavg: [null, 'kPa', 's<sub>u,pagv</sub>', ''],
          s_u_ptip: [null, 'kPa', 's<sub>u,ptip</sub>', ''],
        },
        'Design Loads': {
          V: [null, 'kN', 'V', ''],
          H_x: [null, 'kN', 'H<sub>x</sub>', ''],
          H_y: [null, 'kN', 'H<sub>y</sub>', ''],
          H: [null, 'kN', 'H', ''],
          theta: [null, 'rads', '&theta;', ''],
          theta_degrees: [null, 'degs', '&theta;', ''],
          M_x: [null, 'kNm', 'M<sub>x</sub>', ''],
          M_y: [null, 'kNm', 'M<sub>y</sub>', ''],
          M: [null, 'kNm', 'M', ''],
          theta_M: [null, 'rads', '&theta;<sub>M</sub>', ''],
          theta_M_degrees: [null, 'degs', '&theta;<sub>M</sub>', ''],
          T: [null, 'kNm', 'T', ''],
        },
        'Mudmat Share': {
          V_m: [null, 'kN', 'V', ''],
          H_xm: [null, 'kN', 'H<sub>x</sub>', ''],
          H_ym: [null, 'kN', 'H<sub>y</sub>', ''],
          H_m: [null, 'kN', 'H', ''],
          M_xm: [null, 'kNm', 'M<sub>x</sub>', ''],
          M_ym: [null, 'kNm', 'M<sub>y</sub>', ''],
          M_m: [null, 'kNm', 'M', ''],
          T_m: [null, 'kNm', 'T', ''],
        },
        'Pile Group Share': {
          V_p: [null, 'kN', 'V', ''],
          H_xp: [null, 'kN', 'H<sub>x</sub>', ''],
          H_yp: [null, 'kN', 'H<sub>y</sub>', ''],
          H_p: [null, 'kN', 'H', ''],
          M_xp: [null, 'kNm', 'M<sub>x</sub>', ''],
          M_yp: [null, 'kNm', 'M<sub>y</sub>', ''],
          M_p: [null, 'kNm', 'M', ''],
          T_p: [null, 'kNm', 'T', ''],
        },
      },
    },
    {
      type: 'graph-tile',
      fields: {
        zt_H: null,
        zt_M: null,
        T_H: null,
        T_M: null,
        H_m: null,
        M_m: null,
        t0_H: null,
        t0_M: null,
        tn0_H: null,
        tn0_M: null,
        H_p: null,
        M_p: null,
        mudMatTlabel: 0,
        pileGroupTlabel: 0,
      },
      plots: {
        mudmatDesign: {
          dataFun(a, b, c, d, e, f, label) {
            return [
              {
                x: a,
                y: b,
                name: 'Zero Torque',
                type: 'scatter',
              },
              {
                x: c,
                y: d,
                name: `T = ${Number(label).toFixed(1)} kNm`,
                type: 'scatter',
              },
              {
                x: [e],
                y: [f],
                name: 'Design - Mudmat',
                type: 'scatter',
                marker: {
                  symbol: 'diamond',
                  size: 12,
                  color: '#01579b',
                },
              },
            ];
          },
          layout: {
            title: '<b>Mudmat Design</b>',
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: 'Resultant horizontal load, H<sub>mudmat</sub> (kN)',
            },
            yaxis: {
              title: 'Resultant moment (kNm)',
            },
            showlegend: true,
            legend: {
              yanchor: 'top',
              x: 0,
              y: 2.1,
            },
          },
          args: ['zt_H', 'zt_M', 'T_H', 'T_M', 'H_m', 'M_m', 'mudMatTlabel'],
          addLines: false,
          data: [],
        },
        inSituUndrainedStresses: {
          dataFun(a, b, c, d, e, f, label) {
            return [
              {
                x: a,
                y: b,
                name: 'T = 0',
                type: 'scatter',
              },
              {
                x: c,
                y: d,
                name: `T = ${Number(label).toFixed(1)} BH`,
                type: 'scatter',
              },
              {
                x: [e],
                y: [f],
                name: 'Design - Piles',
                type: 'scatter',
                marker: {
                  symbol: 'diamond',
                  size: 12,
                  color: '#01579b',
                },
              },
            ];
          },
          layout: {
            title: '<b>Pile Group Design</b>',
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            xaxis: {
              title: 'Resultant horizontal load, H<sub>piles</sub> (kN)',
            },
            yaxis: {
              title: 'Resultant moment (kNm)',
            },
            showlegend: true,
            legend: {
              yanchor: 'top',
              x: 0,
              y: 2.1,
            },
          },
          args: [
            't0_H',
            't0_M',
            'tn0_H',
            'tn0_M',
            'H_p',
            'M_p',
            'pileGroupTlabel',
          ],
          addLines: false,
          data: [],
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    {
      type: 'image-tile',
      img_pth: 'pinpiles-figure.png',
      img_w: '370px',
      img_h: '356px',
    },
    {
      type: 'optimization-tile',
      title: 'Optimization',
      fields: {
        '': {
          SMClessTotal: [0, 'kNM', 'SMC - Total', ''],
          Threshold: [1, null, 'Threshold', ''],
          Solution: [null, null, 'Solution', ''],
          solution_beta_pV: [null, null, '&beta;<sub>pV</sub>', ''],
          solution_beta_pH: [null, null, '&beta;<sub>pH</sub>', ''],
          solution_beta_pM: [null, null, '&beta;<sub>pM</sub>', ''],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'afterTitle',
          display: '',
          title: 'Using Input',
          options: {
            BOption: [null, 'B', ''],
            doverBOption: [null, 'd<sub>skirt</sub>/B', ''],
            lambda_HOption: [null, '&lambda;<sub>H</sub>', ''],
            lambda_sOption: [null, '&lambda;<sub>s</sub>', ''],
          },
          clearOnClick: true,
        },
      ],
    },
  ],
};
