export const appConf = {
  appName: 'vhm',
  appTitle: 'Shallow Foundation VHM',
  appPageTitle: 'Undrained VHM Capacity',
  appDescription:
    'Undrained combined load capacity of circular skirted foundations',
  appColour: '#75dff4',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Foundation Properties': {
          D: [10, 'm', 'D', ''],
          d: [4, 'm', 'd', ''],
        },
        'Soil Properties': {
          sum: [5, 'kPa', 's<sub>um</sub>', ''],
          K: [2, 'kPa/m', 'k<sub>su</sub>(0-50)'],
        },
        Loads: {
          Vd: [4000, 'kN', 'V<sub>d</sub>', ''],
          Hd: [0, 'kN', 'H<sub>d</sub>', ''],
          Md: [0, 'kNm', 'M<sub>d</sub>', ''],
          Vl: [0, 'kN', 'V<sub>l</sub>', ''],
          Hl: [2000, 'kN', 'H<sub>l</sub>', ''],
          Ml: [7000, 'kNm', 'M<sub>l</sub>', ''],
        },
        'Partial Factors': {
          lam_d: [1, null, '&lambda;<sub>d</sub>', ''],
          lam_l: [1, null, '&lambda;<sub>l</sub>', ''],
          lam_mt: [1, null, '&lambda;<sub>m</sub>', ''],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 3,
          position: 'afterContent',
          title: 'Plot Type',
          options: {
            hhmm_opt: [true, 'h/h*,m/m*', ''],
            HfMf_opt: [false, 'H<sub>f</sub>,M<sub>f</sub>', ''],
          },
          onChange: {
            hhmm_opt: {
              plots: {
                hhmm: {
                  display: 'flex',
                },
                HfMf: {
                  display: 'none',
                },
              },
            },
            HfMf_opt: {
              plots: {
                hhmm: {
                  display: 'none',
                },
                HfMf: {
                  display: 'flex',
                },
              },
            },
          },
          modifyOnClick: true,
        },
        {
          type: 'radio-tile',
          index: 3,
          position: 'afterContent',
          title: 'Optimize',
          options: {
            None: [true, 'N/A', ''],
            D_opt: [null, 'D', ''],
            d_opt: [null, 'd', ''],
            sumf_opt: [null, 's<sub>um,f</sub>', ''],
            ksuf_opt: [null, 'k<sub>su,f</sub>', ''],
            lamm_opt: [null, '&lambda;<sub>m</sub>', ''],
          },
        },
      ],
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          dD: [null, null, 'd/D (0-0.5)', ''],
          A: [null, 'm<sup>2</sup>', 'A', ''],
          k: [
            null,
            null,
            '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;100)',
            '',
          ],
          su0: [null, 'kPa', 's<sub>u0</sub>', ''],
          su0f: [null, 'kPa', 's<sub>u0,f</sub>', ''],
          Vf: [null, 'kN', 'V<sub>f</sub>', ''],
          Hf: [null, 'kN', 'H<sub>f</sub>', ''],
          Mf: [null, 'kNm', 'M<sub>f</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          NcV: [null, null, 'N<sub>cV</sub>', ''],
          NcH: [null, null, 'N<sub>cH</sub>', ''],
          NcM: [null, null, 'N<sub>cM</sub>', ''],
          Vult: [null, 'kN', 'V<sub>ult</sub>', ''],
          Hult: [null, 'kN', 'H<sub>ult</sub>', ''],
          Mult: [null, 'kNm', 'M<sub>ult</sub>', ''],
          v: [null, null, 'v = V<sub>f</sub>/V<sub>ult</sub>'],
          h: [null, null, 'h = V<sub>f</sub>/H<sub>ult</sub>'],
          m: [null, null, 'm = M<sub>f</sub>/M<sub>ult</sub>'],
          hh_star: [null, null, 'h/h*', ''],
          mm_star: [null, null, 'm/m*', ''],
        },
        Optimized: {
          sum_opt: ['N/A', 'kPa', 's<sub>um</sub>(opt)', ''],
          function_opt: ['N/A', null, 'function<sub>opt</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'graph-tile',
      fields: {
        hh_star: null,
        mmstar: null,
        Hf: null,
        Mf: null,
        hh: null,
        mm: null,
        Hultvec: null,
        Multvec: null,
        f1: null,
      },
      plots: {
        hhmm: {
          dataFun(a, b, c, d, e) {
            return [
              {
                x: a,
                y: b,
                z: e,
                type: 'contour',
                colorscale: [
                  ['0.0', 'rgb(224, 224, 224)'],
                  ['1.0', 'rgb(255, 255, 255)'],
                ],
                autocontour: false,
                showscale: false,
                contours: {
                  start: 1,
                  end: 1,
                  size: 1,
                },
              },
              {
                x: c,
                y: d,
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
            title:
              '<b>Failure envelope & factored load in terms of normalised (h/h*, m/m*)</b>',
            xaxis: {
              title: 'h/h*',
            },
            yaxis: {
              title: 'm/m*',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
          args: ['hh', 'mm', 'hh_star', 'mm_star', 'f1'],
          addLines: false,
          data: [],
          display: 'block',
        },
        HfMf: {
          dataFun(a, b, c, d, e) {
            return [
              {
                x: a,
                y: b,
                z: e,
                type: 'contour',
                name: 'Failure Envelope',
                colorscale: [
                  ['0.0', 'rgb(224, 224, 224)'],
                  ['1.0', 'rgb(255, 255, 255)'],
                ],
                autocontour: false,
                showscale: false,
                contours: {
                  start: 1,
                  end: 1,
                  size: 1,
                },
              },
              {
                x: c,
                y: d,
                type: 'scatter',
                name: 'Failure Envelope',
                marker: {
                  symbol: 'diamond',
                  size: 12,
                  color: '#01579b',
                },
              },
            ];
          },
          layout: {
            title:
              '<b>Failure envelope & factored load in terms of factored (H<sub>f</sub>, M<sub>f</sub>)</b>',
            xaxis: {
              title: 'H<sub>f</sub> (kN)',
            },
            yaxis: {
              title: 'M<sub>f</sub> (kNm)',
            },
            titlefont: {
              family: 'Roboto, sans-serif',
              color: '#01579b',
              size: 19,
            },
          },
          args: ['Hultvec', 'Multvec', 'Hf', 'Mf', 'f1'],
          addLines: false,
          data: [],
          display: 'none',
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    {
      type: 'image-tile',
      img_pth: 'vhm-figure.png',
      img_w: '650px',
      img_h: '340px',
    },
  ],
};
