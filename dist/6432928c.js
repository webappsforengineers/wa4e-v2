const e = {
  appName: 'pinpiles',
  appTitle: 'Mudmat & Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T',
  appPageTitle: 'Hybrid Mudmat VH<sub>2</sub>M<sub>2</sub>T',
  appDescription:
    'Undrained 6 DoF capacity of rectangular skirted mudmat and pinpiled mudmats',
  appColour: '#698ef1',
  appWebComponents: [
    {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Undrained 6 DoF capacity of 2:1 rectangular skirted mudmats, pile groups and hybrid piled-mudmats',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables sizing of a skirted* mudmats and hybrid pin-piled mudmats for undrained ultimate limit state under loading in six degrees of freedom (V, H2, M2, T) on deposits with varying linearly increasing strength with depth. Mudmat aspect ratio is fixed at B/L = 0.5 while embedment ratio d/B can range from 0 up to 0.3. An unlimited tension interface is assumed between the underside of the mudmat and the soil while the skirt-soil interface roughness can range from smooth (&alpha; = 0) to fully rough (&alpha; = 1). Load distribution between the mudmat and piles can be explored by considering each part separately or together. The allowable capacity under the six-degree-of-freedom loading is expressed in terms of a two-dimensional failure envelope for the resultant horizontal and moment loading, after due allowance for the vertical and torsional components of load. The failure envelope framework allows for optimization of foundation size through minimum foundation breadth, embedment ratio or material factor. \nThe results and framework for the mudmat solution are described in detail in <a href="http://dx.doi.org/10.1680/geot.13.P.051"> “Design approach for rectangular mudmats under fully three dimensional loading” by Feng, X., Randolph, M. F., Gourvenec, S. & Wallerand, R. (2014), Géotechnique 64(1): 51-63.</a>\n*Note: The skirted mudmat is modelled as a solid rigid plug on the assumption that sufficient internal skirts are provided to ensure structural stability of the skirted foundation and no geotechnical failure mechanism within the skirted compartment. The assumption of the skirted geometry justifies the unlimited tension interface under overturning moment at low vertical loads.\n',
          format: '',
        },
      },
    },
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
        'Load and Material Factors': {
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
        'Pile Group Geometry': {
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
          modifyOnClick: !0,
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
      },
      subComponents: [
        {
          type: 'input-table',
          index: 1,
          position: 'afterContent',
          display: '',
          title: '',
          content: {
            0: {
              header: ['Design Loads', '', 'Mudmat Share', 'Pile Group Share'],
            },
            1: {
              label: 'V',
              values: [
                [null, 'kN', ''],
                [null, 'kN', ''],
                [null, 'kN', ''],
              ],
            },
            2: {
              label: 'H<sub>x</sub>',
              values: [
                [null, 'kN', ''],
                [null, 'kN', ''],
                [null, 'kN', ''],
              ],
            },
            3: {
              label: 'H<sub>y</sub>',
              values: [
                [null, 'kN', ''],
                [null, 'kN', ''],
                [null, 'kN', ''],
              ],
            },
            4: {
              label: 'H',
              values: [
                [null, 'kN', ''],
                [null, 'kN', ''],
                [null, 'kN', ''],
              ],
            },
            5: {
              label: '&theta;',
              values: [
                [null, 'rads', ''],
                [null, 'degs', ''],
              ],
            },
            6: {
              label: 'M<sub>x</sub>',
              values: [
                [null, 'kNm', ''],
                [null, 'kNm', ''],
                [null, 'kNm', ''],
              ],
            },
            7: {
              label: 'M<sub>y</sub>',
              values: [
                [null, 'kNm', ''],
                [null, 'kNm', ''],
                [null, 'kNm', ''],
              ],
            },
            8: {
              label: 'M',
              values: [
                [null, 'kNm', ''],
                [null, 'kNm', ''],
                [null, 'kNm', ''],
              ],
            },
            9: {
              label: '&theta;<sub>M</sub>',
              values: [
                [null, 'rads', ''],
                [null, 'degs', ''],
              ],
            },
            10: {
              label: 'T',
              values: [
                [null, 'kNm', ''],
                [null, 'kNm', ''],
                [null, 'kNm', ''],
              ],
            },
          },
        },
      ],
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
          dataFun: (e, l, t, a, s, u, n) => [
            { x: e, y: l, name: 'Zero Torque', type: 'scatter' },
            {
              x: t,
              y: a,
              name: `T = ${Number(n).toFixed(1)} kNm`,
              type: 'scatter',
            },
            {
              x: [s],
              y: [u],
              name: 'Design - Mudmat',
              type: 'scatter',
              marker: { symbol: 'diamond', size: 12, color: '#01579b' },
            },
          ],
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
            yaxis: { title: 'Resultant moment (kNm)' },
            showlegend: !0,
            legend: { yanchor: 'top', x: 0, y: 2.1 },
          },
          args: ['zt_H', 'zt_M', 'T_H', 'T_M', 'H_m', 'M_m', 'mudMatTlabel'],
          addLines: !1,
          data: [],
          show: !0,
        },
        inSituUndrainedStresses: {
          dataFun: (e, l, t, a, s, u, n) => [
            { x: e, y: l, name: 'T = 0', type: 'scatter' },
            {
              x: t,
              y: a,
              name: `T = ${Number(n).toFixed(1)} BH`,
              type: 'scatter',
            },
            {
              x: [s],
              y: [u],
              name: 'Design - Piles',
              type: 'scatter',
              marker: { symbol: 'diamond', size: 12, color: '#01579b' },
            },
          ],
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
            yaxis: { title: 'Resultant moment (kNm)' },
            showlegend: !0,
            legend: { yanchor: 'top', x: 0, y: 2.1 },
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
          addLines: !1,
          data: [],
          show: !0,
        },
      },
      updateConf: { noNewData: !1, clearData: !1 },
    },
    {
      type: 'image-tile',
      img_pth: '../../img/pinpiles-figure.png',
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
          solution: [null, null, 'Solution', ''],
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
          clearOnClick: !0,
        },
      ],
    },
    { type: 'batch-tile', title: 'Batch Calculation' },
  ],
};
export { e as a };
