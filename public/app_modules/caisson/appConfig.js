export const appConf = {
  appName: 'caisson',
  appTitle: 'Suction Caisson',
  appPageTitle: 'Suction Caisson Installation and Uplift Capacity',
  appDescription: 'Installation and uplift capacity',
  appColour: '#f4e786',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Caisson Properties': {
          L: [24, 'm', 'L'],
          Do: [6, 'm', 'D<sub>o</sub>'],
          t: [0.1, 'm', 't'],
          W: [1500, 'kn', 'W&#39;'],
          Nctips: [7.5, null, 'N<sub>c,tips</sub>'],
          Ncplug: [9, null, 'N<sub>c,plug</sub>'],
          ao: [0.4, null, 'a<sub>o</sub>'],
          ai: [0.4, null, 'a<sub>i</sub>'],
        },
        'Soil Properties': {
          Sum: [5, 'kPa', 'S<sub>um</sub>'],
          z: [5, 'm', 'z&#39;'],
          ksu: [1, 'kPa/m', 'k<sub>su</sub>'],
          alpha: [0.8, null, '&alpha;<sub>t</sub>'],
          gamma: [6, 'kN/m<sup>3</sup>', '&gamma;&#39;'],
        },
      },
      helpText: 'Helpful text!',
    },
    {
      type: 'image-tile',
      img_pth: 'caisson-figure.png',
      img_w: '600px',
      img_h: '600px',
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          LDo: [null, null, 'L/D<sub>o</sub>'],
          Di: [null, 'm', 'D<sub>i</sub>'],
          Atip: [null, 'm<sup>2</sup>', 'A<sub>tip</sub>'],
          Aplug: [null, 'm<sup>2</sup>', 'A<sub>plug</sub>'],
          Wplug: [null, 'kN', 'W&#39;<sub>plug</sub>'],
          Wcaisson: [null, 'kN', 'W&#39;<sub>caisson</sub>'],
        },
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        Installation: {
          Q: [null, 'kN', 'Q'],
          MRS: [null, 'kN', 'Max Required Suction'],
          MPS: [null, 'kN', 'Max Permissible Suction'],
          MFPS: [null, null, 'Min FoS Plug Stability'],
        },
        Capacity: {
          Vult1: [null, 'kN', 'V<sub>ult,1</sub>'],
          VT1: [null, 'kN', 'V<sub>T,1</sub>'],
          Vult2: [null, 'kN', 'V<sub>ult,2</sub>'],
          VT2: [null, 'kN', 'V<sub>T,2</sub>'],
          Vult3: [null, 'kN', 'V<sub>ult,3</sub>'],
          VT3: [null, 'kN', 'V<sub>T,3</sub>'],
        },
      },
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
              title: 'S<sub>u</sub> (kPa)',
              side: 'top',
              rangemode: 'tozero',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: false,
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['suz', 'z'],
        },
        plotPenRes: {
          dataFun(a, b, c) {
            return [
              {
                name: 'Required Suction',
                x: a,
                y: c,
              },
              {
                name: 'Penetration Resistance',
                x: b,
                y: c,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: '',
            xaxis: {
              title: 'kN',
              side: 'top',
              ticksuffix: ' kN',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: true,
            mode: 'lines',
            line: { shape: 'spline' },
            legend: {
              traceorder: 'normal',
            },
          },
          args: ['req_suction', 'q_total', 'z'],
        },
        plotFosStability: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: '',
            showlegend: false,
            xaxis: {
              title: 'FoS Plug Stability',
              side: 'top',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['fos', 'z'],
        },
      },
    },
  ],
};
