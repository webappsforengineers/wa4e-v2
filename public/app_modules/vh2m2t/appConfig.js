export const appConf = {
  appName: 'vh2m2t',
  appTitle: 'Mudmat UU & CU VH2M2T',
  appPageTitle: '6 DoF Loading Capacity of Shallow Foundations',
  appDescription:
    'Undrained and consolidated undrained 6 DoF undrained capacity of rectangular mudmat',
  appColour: '#c1476a',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Mudmat Geometry': {
          B: [5, 'm', 'B', ''],
          BoverL: [0.5, null, 'B/L (0.33 - 1)', ''],
          doverB: [0.05, null, 'd/B (0 - 0.3)', ''],
        },
        'Characteristic Soil Shear Strength': {
          s_um: [5, 'kPa', 's<sub>um</sub>', ''],
          k: [2, 'kPa/m', 'k', ''],
          c_v: [10, 'm<sup>2</sup>/year', 'c<sub>v</sub>', ''],
          gamma: [6, 'kN/m<sup>3</sup>', '&gamma;&#39;', ''],
          T_lag: [6, 'months', 'T<sub>lag</sub>', ''],
        },
        'Characteristic Loads and Eccentricities': {
          V_c: [700, 'kN', 'V<sub>p</sub>', ''],
          e_xV: [0, 'm', 'e<sub>xV</sub>', ''],
          e_yV: [0, 'm', 'e<sub>yV</sub>', ''],
          H_xc: [100, 'kN', 'H<sub>xc</sub>', ''],
          e_yHx: [4, 'm', 'e<sub>zHx</sub>', ''],
          e_zHx: [3, 'm', 'e<sub>yHx</sub>', ''],
          H_yc: [120, 'kN', 'H<sub>yc</sub>', ''],
          e_xHy: [1, 'm', 'e<sub>xHy</sub>', ''],
          e_zHy: [3, 'm', 'e<sub>zHy</sub>', ''],
          alpha_skirt: [0.5, null, '&alpha;<sub>skirt</sub>', ''],
        },
        'Load and Material Factors (&#8805;1)': {
          lambda_V: [1, null, '&lambda;<sub>V</sub>', ''],
          lambda_H: [1, null, '&lambda;<sub>H</sub>', ''],
          lambda_s: [1, null, '&lambda;<sub>s</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          L: [null, 'm', 'L', ''],
          d: [null, 'm', 'd', ''],
          A: [null, 'm<sup>2</sup>', 'A', ''],
          s_u0: [null, 'kPa', 's<sub>u0</sub>', ''],
          kappa: [null, null, '&kappa; = kB/s<sub>u0</sub>(0-10)', ''],
          V: [null, 'kN', 'V', ''],
          H_x: [null, 'kN', 'H<sub>x</sub>', ''],
          H_y: [null, 'kN', 'H<sub>y</sub>', ''],
          H: [null, 'kN', 'H', ''],
          theta: [null, 'radians', '&theta;', ''],
          M_y: [null, 'kNm', 'M<sub>y</sub>', ''],
          M_x: [null, 'kNm', 'M<sub>x</sub>', ''],
          M: [null, 'kNm', 'M', ''],
          theta_M: [null, 'radians', '&theta;<sub>M</sub>', ''],
          T: [null, 'kNm', 'T', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'optimization-tile',
      title: 'Optimization',
      fields: {
        '': {
          spareMomentCapacity: [0, 'kNm', 'SMC', ''],
          threshold: [1, null, 'Threshold', ''],
          solution: [null, null, 'Solution', ''],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'afterTitle',
          title: 'Using Input',
          options: {
            BOption: [null, 'B', ''],
            lambda_sOption: [null, '&lambda;<sub>s</sub>', ''],
          },
        },
      ],
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        'Uniaxial (UU)': {
          V_ult: [null, 'kN', 'V<sub>ult</sub>', ''],
          H_xult: [null, 'kN', 'H<sub>xult</sub>', ''],
          H_yult: [null, 'kN', 'H<sub>yult</sub>', ''],
          M_xult: [null, 'kNm', 'M<sub>xult</sub>', ''],
          M_yult: [null, 'kNm', 'M<sub>yult</sub>', ''],
          T_ult: [null, 'kNm', 'T<sub>ult</sub>', ''],
        },
        'Reduced Values Due to V': {
          H_xmax: [null, 'kN', 'H<sub>xmax</sub>', ''],
          H_ymax: [null, 'kN', 'H<sub>ymax</sub>', ''],
          M_xmax: [null, 'kNm', 'M<sub>xmax</sub>', ''],
          M_ymax: [null, 'kNm', 'M<sub>ymax</sub>', ''],
          T_max: [null, 'kNm', 'T<sub>max</sub>', ''],
        },
        'In Direction of Loading': {
          H_max: [null, 'kN', 'H<sub>max</sub>', ''],
          M_max: [null, 'kNm', 'M<sub>max</sub>', ''],
        },
        'Further Reduced Values Due to T': {
          H_max_red_T: [null, 'kN', 'H<sub>max</sub>', ''],
          M_max_red_T: [null, 'kNm', 'M<sub>max</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'output-tile',
      title: 'Output Table',
      fields: {
        '': {},
      },
      subComponents: [
        {
          type: 'input-table',
          index: 0,
          position: 'afterTitle',
          display: '',
          title: ' ',
          content: {
            0: {
              header: ['Uniaxial (CU)', '', '', 'Gain'],
            },
            1: {
              label: 'V<sub>u,cons</sub>',
              values: [
                [null, 'kN', ''],
                [null, '%', ''],
              ],
            },
            2: {
              label: 'H<sub>u,cons</sub>',
              values: [
                [null, 'kN', ''],
                [null, '%', ''],
              ],
            },
            3: {
              label: 'H<sub>u,cons</sub>',
              values: [
                [null, 'kN', ''],
                [null, '%', ''],
              ],
            },
            4: {
              label: 'M<sub>u,cons</sub>',
              values: [
                [null, 'kNm', ''],
                [null, '%', ''],
              ],
            },
            5: {
              label: 'M<sub>u,cons</sub>',
              values: [
                [null, 'kNm', ''],
                [null, '%', ''],
              ],
            },
            6: {
              label: 'T<sub>u,cons</sub>',
              values: [
                [null, 'kNm', ''],
                [null, '%', ''],
              ],
            },
            7: {
              label: 'T<sub>v</sub>',
              values: [
                [null, null, ''],
                ['N/A', null, ''],
              ],
            },
            8: {
              label: 'U',
              values: [
                [null, null, ''],
                ['N/A', null, ''],
              ],
            },
          },
        },
      ],
    },
    {
      type: 'derived-input-tile',
      title: 'Model Coefficients',
      fields: {
        '': {
          fsufsigma_V: [
            0.439,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>V</sub></sub>',
            '',
          ],
          fsufsigma_Hx: [
            0.919,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>H<sub>x</sub></sub></sub>',
            '',
          ],
          fsufsigma_Hy: [
            0.919,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>H<sub>y</sub></sub></sub>',
            '',
          ],
          fsufsigma_Mx: [
            0.354,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>M<sub>x</sub></sub></sub>',
            '',
          ],
          fsufsigma_My: [
            0.538,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>M<sub>y</sub></sub></sub>',
            '',
          ],
          fsufsigma_T: [
            1.071,
            null,
            'f<sub>su</sub>f<sub>&sigma;<sub>T</sub></sub>',
            '',
          ],
          R_: [0.286, null, 'R', ''],
          T_50: [0.043, null, 'T<sub>50</sub>', ''],
          m: [1.05, null, 'm', ''],
        },
        'Partial Consolidation': {},
      },
      subComponents: [
        {
          type: 'input-table',
          index: 1,
          position: 'afterTitle',
          display: '',
          title: ' ',
          content: {
            0: {
              label: null,
              values: [
                [1.001, null, 'g1<sub>v</sub>', ''],
                [0.671, null, 'g2<sub>v</sub>', ''],
              ],
            },
            1: {
              label: null,
              values: [
                [1.021, null, 'g1<sub>H<sub>x</sub></sub>', ''],
                [0.709, null, 'g2<sub>H<sub>x</sub></sub>', ''],
              ],
            },
            2: {
              label: null,
              values: [
                [1.021, null, 'g1<sub>H<sub>y</sub></sub>', ''],
                [0.709, null, 'g2<sub>H<sub>y</sub></sub>', ''],
              ],
            },
            3: {
              label: null,
              values: [
                [1.007, null, 'g1<sub>M<sub>x</sub></sub>', ''],
                [0.784, null, 'g2<sub>M<sub>x</sub></sub>', ''],
              ],
            },
            4: {
              label: null,
              values: [
                [0.998, null, 'g1<sub>M<sub>y</sub></sub>', ''],
                [0.788, null, 'g2<sub>M<sub>y</sub></sub>', ''],
              ],
            },
            5: {
              label: null,
              values: [
                [1.003, null, 'g1<sub>T</sub>', ''],
                [0.673, null, 'g2<sub>T</sub>', ''],
              ],
            },
          },
        },
      ],
    },
    {
      type: 'image-tile',
      img_pth: 'vh2m2t-figure.png',
      img_w: '600px',
      img_h: '600px',
    },
    {
      type: 'graph-tile',
      fields: {
        t_not_eq_0_H: null,
        t_not_eq_0_M: null,
        t_eq_0_H: null,
        t_eq_0_M: null,
        H: null,
        M: null,
      },
      plots: {
        plotSuKpc: {
          dataFun(a, b, c, d, e, f) {
            return [
              {
                x: a,
                y: b,
              },
              {
                x: c,
                y: d,
              },
              {
                x: e,
                y: f,
                name: `Load Point: ${Number(e).toFixed(1)} kN, ${Number(
                  f
                ).toFixed(1)} kNm`,
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
            title: '',
            xaxis: {
              title: 'Resultant horizontal load (kN)',
            },
            yaxis: {
              title: 'Resultant moment (kNm)',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            showlegend: false,
            mode: 'lines',
            line: { shape: 'spline' },
            show: true,
          },
          args: [
            't_not_eq_0_H',
            't_not_eq_0_M',
            't_eq_0_H',
            't_eq_0_M',
            'H',
            'M',
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
  ],
};
