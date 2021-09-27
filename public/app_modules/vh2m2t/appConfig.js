export const appConf = {
  appName: "vh2m2t",
  appTitle: "Mudmat UU & CU VH2M2T",
  appPageTitle: "",
  appDescription: "Undrained and consolidated undrained 6 DoF undrained capacity of rectangular mudmat",
  appColour: "#c1476a",
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
          gamma: [6, 'kN/m<sup>3</sup>', '&gamma;&#39;',''],
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
        }
      }
    },
    {
      type: 'optimization-tile',
      title: 'Optimization',
      fields: {
        '': {
          spareMomentCapacity: [0, 'kNm', 'SMC', ''],
          Threshold: [1, null, 'Threshold', ''],
          Solution: [null, null, 'Solution', ''],
        }
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
        }
      ]
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
      }
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {}
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
              header: ['Uniaxial (CU)', '', 'Gain']
            },
            1: {
              label:'V<sub>u,cons</sub>',
              values: [
                [null, 'kN', ''],
                [null, '%', ''],
              ]
            },
            2: {
              label:'H<sub>u,cons</sub>',
              values:  [
                [null, 'kN', ''],
                [null, '%', ''],
              ]
            },
            3: {
              label:'H<sub>u,cons</sub>',
              values:  [
                [null, 'kN', ''],
                [null, '%', ''],
              ]
            },
            4: {
              label:'M<sub>u,cons</sub>',
              values:  [
                [null, 'kNm', ''],
                [null, '%', ''],
              ]
            },
            5: {
              label:'M<sub>u,cons</sub>',
              values:  [
                [null, 'kNm', ''],
                [null, '%', ''],
              ]
            },
            6: {
              label:'T<sub>u,cons</sub>',
              values:  [
                [null, 'kNm', ''],
                [null, '%', ''],
              ]
            },
            7: {
              label: 'T<sub>v</sub>',
              values: [
                [null, null],
              ]
            },
            8: {
              label: 'U',
              values: [
                [null, null],
              ]
            }
          },
        },
      ]
    },
    {
      type: 'derived-input-tile',
      title: 'Model Coefficients',
      fields: {
        '': {
          fsufsigma_V: [0.439, null, 'f<sub>su</sub>f<sub>&sigma;<sub>V</sub></sub>', ''],
          fsufsigma_Hx: [0.919, null, 'f<sub>su</sub>f<sub>&sigma;<sub>H<sub>x</sub></sub></sub>', ''],
          fsufsigma_Hy: [0.919, null, 'f<sub>su</sub>f<sub>&sigma;<sub>H<sub>y</sub></sub></sub>', ''],
          fsufsigma_Mx: [0.354, null, 'f<sub>su</sub>f<sub>&sigma;<sub>M<sub>x</sub></sub></sub>', ''],
          fsufsigma_My: [0.538, null, 'f<sub>su</sub>f<sub>&sigma;<sub>M<sub>y</sub></sub></sub>', ''],
          fsufsigma_T: [1.071, null, 'f<sub>su</sub>f<sub>&sigma;<sub>T</sub></sub>', ''],
          R_: [0.286, null, 'R', ''],
          T_50: [0.043, null, 'T<sub>50</sub>', ''],
          m: [1.05, null, 'm', ''],
        },
        'Partial Consolidation': {},
      },
      subComponents: [
        {
          type: 'table-tile',
          index: 1,
          position: 'afterTitle',
          display: '',
          title: ' ',
          content: {
           0: {
             label: '',
             values: [
               [],
               [],
             ],
           },
          },
        },
      ]
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
        z: null,
        suz: null,
        q_total: null,
        req_suction: null,
        fos: null,
      },
      plots: {
        plotSuKpc: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            title: '',
            xaxis: {
              title: 'Resultant Horizontal Load (kN)',
              side: 'top',
              rangemode: 'tozero',
            },
            yaxis: {
              title: 'Resultant moment (kNm)',
              autorange: 'reversed',
            },
            showlegend: false,
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['',],
          addLines: false,
          data: [],
        },
      }
    }
    ],
}
