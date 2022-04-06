const e = {
  appName: 'zti',
  appTitle: 'Mudmat UTI & ZTI VH2M2T',
  appPageTitle: '6 DoF Undrained Mudmat UTI & ZTI',
  appColour: '#ed5151',
  appDescription:
    'Undrained 6 DoF capacity of rectangular mudmat with unlimited and zero tension interface',
  appWebComponents: [
    {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Undrained 6 DoF capacity of rectangular mudmats with unlimited and zero tension interface',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables sizing of a rectangular mudmats with either zero or unlimited tension interface for undrained ultimate limit state under loading in six degrees of freedom (V, H2, M2, T) on deposits with linearly increasing strength with depth. Mudmat aspect ratio can range from B/L of 0.33 – 1* and embedment ratio d/B from 0 up to 0.3*. The allowable capacity under the six-degree-of-freedom loading is expressed in terms of a two-dimensional failure envelope for the resultant horizontal and moment loading, after due allowance for the vertical and torsional components of load. The failure envelope framework allows for essentially instantaneous generation of failure envelopes and optimisation of a foundation design as a function of foundation dimension or material factor.\nDetails of the unlimited tension interface (UTI) solution is published in <a href="http://dx.doi.org/10.1680/geot.13.P.051">“Design approach for rectangular mudmats under fully three dimensional loading” by Feng, X., Randolph, M. F., Gourvenec, S. & Wallerand, R. (2014), Géotechnique 64(1): 51-63, and the zero tension interface (ZTI) solution is published in <a href="http://dx.doi.org/10.1680/jgeot.16.P.097">“Effect of interface condition on the undrained capacity of subsea mudmats under six degree-of-freedom loading”, Shen, Z., Feng, X. & Gourvenec, S. (2017), Géotechnique 67(4):338-349</a>\n*Note: The mudmat for the ZTI case is modelled as a surface foundation, such that with embedment is represented by a reduced ground level, capturing higher shear strength where it increases with depth.',
          format: '',
        },
      },
    },
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Mudmat Geometry': {
          B: [5, 'm', 'B', ''],
          BoverL: [0.5, null, 'B/L', ''],
          doverB: [0, null, 'd<sub>skirt</sub>/B (0-0.3)', ''],
        },
        'Characteristic Soil Shear Strength': {
          s_um: [5, 'kPa', 's<sub>um</sub>', ''],
          k: [1, 'kPa/m', 'k', ''],
          gamma: [5, 'kN/m<sup>3</sup>', '&gamma;&#39;<sub>avg</sub>', ''],
        },
        'Characteristic Loads and Eccentricities': {
          V_c: [400, 'kN', 'V<sub>p</sub>', ''],
          e_xV: [0, 'm', 'e<sub>xV</sub>', ''],
          e_yV: [0, 'm', 'e<sub>yV</sub>', ''],
          H_xc: [80, 'kN', 'H<sub>xc</sub>', ''],
          e_yHx: [3, 'm', 'e<sub>yHx</sub>', ''],
          e_zHx: [6, 'm', 'e<sub>zHx</sub>', ''],
          H_yc: [100, 'kN', 'H<sub>yc</sub>', ''],
          e_xHy: [0, 'm', 'e<sub>xHy</sub>', ''],
          e_zHy: [4, 'm', 'e<sub>zHy</sub>', ''],
          alpha_skirt: [1, null, '&alpha;<sub>skirt</sub>'],
        },
        'Load and Material Factors': {
          lambda_V: [1, null, '&lambda;<sub>V</sub>', ''],
          lambda_H: [1, null, '&lambda;<sub>H</sub>', ''],
          lambda_s_UTI: [1.25, null, '&lambda;<sub>s,UTI</sub>', ''],
          lambda_s_ZTI: [1.25, null, '&lambda;<sub>s,ZTI</sub>', 'none'],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'beforeTitle',
          title: 'Interface Condition',
          options: {
            UTI: [!0, 'Unlimited-tension Interface', ''],
            ZTI: [!1, 'Zero-tension Interface', ''],
          },
          onChange: {
            UTI: {
              fields: {
                'Load and Material Factors': {
                  lambda_s_UTI: [1.25, null, '&lambda;<sub>s,UTI</sub>', ''],
                  lambda_s_ZTI: [
                    1.25,
                    null,
                    '&lambda;<sub>s,ZTI</sub>',
                    'none',
                  ],
                },
              },
              subComponents: {
                0: {
                  options: {
                    lambda_sOption: [null, '&lambda;<sub>s,UTI</sub>', ''],
                  },
                },
              },
            },
            ZTI: {
              fields: {
                'Load and Material Factors': {
                  lambda_s_UTI: [
                    1.25,
                    null,
                    '&lambda;<sub>s,UTI</sub>',
                    'none',
                  ],
                  lambda_s_ZTI: [1.25, null, '&lambda;<sub>s,ZTI</sub>', ''],
                },
              },
              subComponents: {
                0: {
                  options: {
                    lambda_sOption: [null, '&lambda;<sub>s,ZTI</sub>', ''],
                  },
                },
              },
            },
          },
          modifyOnClick: !0,
        },
      ],
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          L: [null, 'm', 'L', ''],
          d: [null, 'm', 'd<sub>skirt</sub>', ''],
          A: [null, 'm<sup>2</sup>', 'A', ''],
          s_u0: [null, 'kPa', 's<sub>u0</sub>', ''],
          kappa: [null, null, '&kappa;(0-10)', ''],
        },
        'Factored Loads': {
          V: [null, 'kN', 'V', ''],
          H_x: [null, 'kN', 'H<sub>x</sub>', ''],
          H_y: [null, 'kN', 'H<sub>y</sub>', ''],
          H: [null, 'kN', 'H', ''],
          theta: [null, 'radians', '&theta;', ''],
          M_y: [null, 'kNM', 'M<sub>y</sub>', ''],
          M_x: [null, 'kNM', 'M<sub>x</sub>', ''],
          M: [null, 'kNM', 'M', ''],
          theta_M: [null, 'radians', '&theta;<sub>M</sub>', ''],
          T: [null, 'kNM', 'T', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'optimization-tile',
      title: 'Optimization',
      fields: {
        '': {
          spareMomentCapacity: [0, 'kNM', 'SMC', ''],
          threshold: [1, null, 'Threshold', ''],
          solution: [null, null, 'Solution', ''],
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
            lambda_sOption: [null, '&lambda;<sub>s,UTI</sub>', ''],
          },
          clearOnClick: !0,
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
      type: 'graph-tile',
      fields: {
        UTI_H: null,
        UTI_M: null,
        UTI_leg: null,
        ZTI_H: null,
        ZTI_M: null,
        ZTI_leg: null,
        H_point: null,
        M_point: null,
      },
      plots: {
        momentLoad: {
          dataFun: (e, a, t, l, n, s, u, i) => [
            { x: e, y: a, name: `UTI: &lambda;<sub>s</sub> = ${t}` },
            { x: l, y: n, name: `UTI: &lambda;<sub>s</sub> = ${s}` },
            {
              x: u,
              y: i,
              name: 'Design',
              type: 'scatter',
              marker: { symbol: 'diamond', size: 12, color: '#01579b' },
            },
          ],
          args: [
            'UTI_H',
            'UTI_M',
            'UTI_leg',
            'ZTI_H',
            'ZTI_M',
            'ZTI_leg',
            'H_point',
            'M_point',
          ],
          layout: {
            title: 'Design: - kN, - kN',
            xaxis: { title: 'Resultant horizontal load (kN)' },
            yaxis: { title: 'Resultant moment (kNm)' },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
            showlegend: !0,
          },
          addLines: !1,
          data: [],
          display: 'block',
        },
      },
      updateConf: { noNewData: !1, clearData: !1 },
    },
    { type: 'batch-tile', title: 'Batch Calculation' },
  ],
};
export { e as a };
