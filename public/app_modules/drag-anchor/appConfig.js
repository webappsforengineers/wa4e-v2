/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'drag-anchor',
  appTitle: 'Drag Anchor',
  appPageTitle: 'Drag Anchor',
  appDescription: 'Installation depth and holding capacity',
  appColour: '#ffae75',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Soil Profile': {
          Sum: [50, 'kPa', 's<sub>um</sub>', 'block', ''],
          k: [0, 'kPa/m', 'k<sub>su</sub>', 'block', ''],
          Zt: [0, 'm', 'z&#39;', 'block', ''],
        },
        Chain: {
          d: [0.1, 'm', 'd', 'block', ''],
          bd: [2.5, null, 'b/d', 'block', ''],
          Nc1: [7.6, null, 'N<sub>c,chain</sub>', 'block', ''],
          Miu: [0.4, null, '&mu;=Q/F', 'block', ''],
        },
        Anchor: {
          mass: [32, 'tonnes', 'M', 'block', ''],
          Ap: [12, 'M<sup>2</sup>', 'A<sub>p</sub>', 'block', ''],
          f: [1.4, null, 'f', 'block', ''],
          qw: [28, 'degrees', '&theta;<sub>w</sub>', 'block', ''],
          Nc2: [9, null, 'N<sub>c,anchor</sub>', 'block', ''],
        },
        Mooring: {
          qm: [0, 'degrees', '&theta;<sub>m</sub>', 'block', ''],
          offset: [6.2, 'm', 'offset', 'block', ''],
        },
      },
      subComponents: [],
      helpText: 'Helpful text!',
    },
    {
      type: 'derived-input-tile',
      title: 'Iteration',
      fields: {
        'From Anchor Criterion': {
          Tp: [null, 'kN', 'T<sub>p</sub>', 'block', ''],
          su_at_zf: [null, 'kPa', 's<sub>u</sub>@z<sub>f</sub>', 'block', ''],
          q_p_w: [null, 'radians', '&theta;&#39;w', 'block', ''],
          Ta1: [null, 'kN', 'T<sub>a</sub>', 'block', ''],
        },
        'From Chain Criterion': {
          zaQav: [null, null, 'z<sub>a</sub>Q<sub>av</sub>', 'block', ''],
          su_dz: [null, null, '&int;su dz', 'block', ''],
          Ta2: [null, 'kN', 'T<sub>a</sub>', 'block', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        '': {
          za: [null, 'm', 'z<sub>a</sub>', 'block', ''],
          zf: [null, 'm', 'z<sub>f</sub>', 'block', ''],
          Tm: [null, 'kN', 'T<sub>m</sub>', 'block', ''],
        },
        Efficiency: {
          h: [null, null, '&eta; = T<sub>m</sub>/W', 'block', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'image-tile',
      img_pth: 'drag-anchor-figure.png',
      img_w: '400px',
      img_h: '267px',
    },
    {
      type: 'graph-tile',
      fields: {
        zfs: null,
        sum: null,
        zfk: null,
        k: null,
      },
      plots: {
        plotSum: {
          dataFun(a, b) {
            return [
              {
                name: 'Sum',
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: 'S<sub>um</sub> = 0 kPa',
            xaxis: {
              title: 'S<sub>um</sub> (kPa)',
            },
            yaxis: {
              title: 'z<sub>f</sub>(m)',
            },
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['sum', 'zfs'],
          addLines: true,
          data: [],
          show: true,
        },
        plotKsu: {
          dataFun(a, b) {
            return [
              {
                name: 'Ksu',
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: 'k<sub>su</sub> = 0 kPa/m',
            xaxis: {
              title: 'k (kPa/m)',
            },
            yaxis: {
              title: 'z<sub>f</sub>(m)',
            },
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['k', 'zfk'],
          addLines: true,
          data: [],
          show: true,
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  ],
};
