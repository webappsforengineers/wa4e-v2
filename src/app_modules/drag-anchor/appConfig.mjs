/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'drag-anchor',
  appTitle: 'Drag Anchor',
  appPageTitle: 'Drag Anchor',
  appDescription: 'Installation depth and holding capacity',
  appColour: '#ffae75',
  appWebComponents: {
    0: {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Installation depth and holding capacity of drag in plate anchor',
          format: 'h5',
        },
        blurb: {
          text: 'This app enables prediction of the undrained installation depth, holding capacity and efficiency of drag in plate anchors in a fine grained deposit for varying chain dimensions, mudline anchor line angles and undrained shear strength profile. Linearly increasing shear strength profiles with or without a surficial crust are permitted. The app uses a simple theoretical model to predict final padeye (and fluke) depth, i.e. for horizontal fluke position, from moment equilibrium, and holding capacity from bearing capacity theory and the load shed along the chain between mudline and anchor.  \nThe method was first published in “Performance of embedded anchor chains and consequences for anchor design” by Neubecker, S.R & Randolph, M.F. (1995), OTC 7712, and is presented in the text book <a href="https://www.taylorfrancis.com/books/mono/10.1201/9781315272474">“Offshore Geotechnical Engineering” by Randolph, M.F. and Gourvenec, S. (2011, 2017)</a>',
          format: '',
        },
      },
    },
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Soil Profile': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: 50,
            visible: '',
            lb: '',
            ub: '',
          },
          k: {
            label: 'k<sub>su</sub>',
            unit: 'kPa/m',
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          Zt: {
            label: 'z&#39;',
            unit: 'm',
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Chain: {
          d: {
            label: 'd',
            unit: 'm',
            value: 0.1,
            visible: '',
            lb: '',
            ub: '',
          },
          bd: {
            label: 'b/d',
            unit: null,
            value: 2.5,
            visible: '',
            lb: '',
            ub: '',
          },
          Nc1: {
            label: 'N<sub>c,chain</sub>',
            unit: null,
            value: 7.6,
            visible: '',
            lb: '',
            ub: '',
          },
          Miu: {
            label: '&mu;=Q/F',
            unit: null,
            value: 0.4,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Anchor: {
          mass: {
            label: 'M',
            unit: 'tonnes',
            value: 32,
            visible: '',
            lb: '',
            ub: '',
          },
          Ap: {
            label: 'A<sub>p</sub>',
            unit: 'M<sup>2</sup>',
            value: 12,
            visible: '',
            lb: '',
            ub: '',
          },
          f: {
            label: 'f',
            unit: null,
            value: 1.4,
            visible: '',
            lb: '',
            ub: '',
          },
          qw: {
            label: '&theta;<sub>w</sub>',
            unit: 'degrees',
            value: 28,
            visible: '',
            lb: '',
            ub: '',
          },
          Nc2: {
            label: 'N<sub>c,anchor</sub>',
            unit: null,
            value: 9,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Mooring: {
          qm: {
            label: '&theta;<sub>m</sub>',
            unit: 'degrees',
            value: 0,
            visible: '',
            lb: '',
            ub: '',
          },
          offset: {
            label: 'offset',
            unit: 'm',
            value: 6.2,
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
      title: 'Iteration',
      fields: {
        'From Anchor Criterion': {
          Tp: {
            label: 'T<sub>p</sub>',
            unit: 'kN',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          su_at_zf: {
            label: 's<sub>u</sub>@z<sub>f</sub>',
            unit: 'kPa',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          q_p_w: {
            label: '&theta;&#39;w',
            unit: 'radians',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Ta1: {
            label: 'T<sub>a</sub>',
            unit: 'kN',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        'From Chain Criterion': {
          zaQav: {
            label: 'z<sub>a</sub>Q<sub>av</sub>',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          su_dz: {
            label: '&int;su dz',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Ta2: {
            label: 'T<sub>a</sub>',
            unit: 'kN',
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
          za: {
            label: 'z<sub>a</sub>',
            unit: 'm',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          zf: {
            label: 'z<sub>f</sub>',
            unit: 'm',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          Tm: {
            label: 'T<sub>m</sub>',
            unit: 'kN',
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Efficiency: {
          h: {
            label: '&eta; = T<sub>m</sub>/W',
            unit: null,
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
      img_pth: '../../img/drag-anchor-figure.png',
      img_w: '400px',
      img_h: '267px',
    },
    5: {
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
            line: {
              shape: 'spline',
            },
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
            line: {
              shape: 'spline',
            },
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
    6: {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  },
};
