export const testConf = {
  input: {
    1: {
      type: 'input-tile',
      title: 'Input',
      valuesLength: 4,
      fields: {
        'Caisson Properties': {
          L: {
            label: 'L',
            unit: 'm',
            value: [24, 25, 12, 36],
            visible: '',
            lb: '',
            ub: '',
          },
          Do: {
            label: 'D<sub>o</sub>',
            unit: 'm',
            value: [6, 5, 6, 3],
            visible: '',
          },
          t: {
            label: 't',
            unit: 'm',
            value: [0.1, 0.05, 0.1, 0.1],
            visible: '',
            lb: '',
            ub: '',
          },
          W: {
            label: 'W&#39;',
            unit: 'kn',
            value: [1500, 1300, 1200, 1000],
            visible: '',
            lb: '',
            ub: '',
          },
          Nctips: {
            label: 'N<sub>c,tips</sub>',
            value: [7.5, 7.5, 7.5, 7.5],
            visible: '',
            lb: '',
            ub: '',
          },
          Ncplug: {
            label: 'N<sub>c,plug</sub>',
            value: [9, 9, 9, 9],
            visible: '',
            lb: '',
            ub: '',
          },
          ao: {
            label: '&alpha;<sub>o</sub>',
            value: [0.4, 0.3, 0.3, 0.3],
            visible: '',
            lb: 0,
            ub: 1,
          },
          ai: {
            label: '&alpha;<sub>i</sub>',
            value: [0.4, 0.3, 0.3, 0.3],
            visible: '',
            lb: 0,
            ub: 1,
          },
        },
        'Soil Properties': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: [5, 10, 35, 50],
            visible: '',
            lb: '',
            ub: '',
          },
          z: {
            label: 'z&#39;',
            unit: 'm',
            value: [5, 0, 0, 0],
            visible: '',
            lb: '',
            ub: '',
          },
          ksu: {
            label: 'k<sub>su</sub>',
            unit: 'kPa/m',
            value: [1, 0, 3, 8],
            visible: '',
            lb: '',
            ub: '',
          },
          alpha: {
            label: '&alpha;<sub>t</sub>',
            value: [0.8, 0.7, 0.5, 0.8],
            visible: '',
            lb: '0',
            ub: '1',
          },
          gamma: {
            label: '&gamma;&#39;',
            unit: 'kN/m<sup>3</sup>',
            value: [6, 6, 6, 5],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      valuesLength: 0,
      fields: {
        '': {
          LDo: {
            label: 'L/D<sub>o</sub>',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Di: {
            label: 'D<sub>i</sub>',
            unit: 'm',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Atip: {
            label: 'A<sub>tip</sub>',
            unit: 'm<sup>2</sup>',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Aplug: {
            label: 'A<sub>plug</sub>',
            unit: 'm<sup>2</sup>',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Wplug: {
            label: 'W&#39;<sub>plug</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Wcaisson: {
            label: 'W&#39;<sub>caisson</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    4: {
      type: 'output-tile',
      title: 'Output',
      valuesLength: 0,
      fields: {
        Installation: {
          Q: { label: 'Q', unit: 'kN', value: [], visible: '', lb: '', ub: '' },
          MRS: {
            label: 'Max Required Suction',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          MPS: {
            label: 'Max Permissible Suction',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          MFPS: {
            label: 'Min FoS Plug Stability',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Capacity: {
          Vult1: {
            label: 'V<sub>ult,1</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          VT1: {
            label: 'V<sub>T,1</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult2: {
            label: 'V<sub>ult,2</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          VT2: {
            label: 'V<sub>T,2</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult3: {
            label: 'V<sub>ult,3</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
          VT3: {
            label: 'V<sub>T,3</sub>',
            unit: 'kN',
            value: [],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
  output: {
    1: {
      type: 'input-tile',
      title: 'Input',
      valuesLength: 4,
      fields: {
        'Caisson Properties': {
          L: {
            label: 'L',
            unit: 'm',
            value: [24, 25, 12, 36],
            visible: '',
            lb: '',
            ub: '',
          },
          Do: {
            label: 'D<sub>o</sub>',
            unit: 'm',
            value: [6, 5, 6, 3],
            visible: '',
          },
          t: {
            label: 't',
            unit: 'm',
            value: [0.1, 0.05, 0.1, 0.1],
            visible: '',
            lb: '',
            ub: '',
          },
          W: {
            label: 'W&#39;',
            unit: 'kn',
            value: [1500, 1300, 1200, 1000],
            visible: '',
            lb: '',
            ub: '',
          },
          Nctips: {
            label: 'N<sub>c,tips</sub>',
            value: [7.5, 7.5, 7.5, 7.5],
            visible: '',
            lb: '',
            ub: '',
          },
          Ncplug: {
            label: 'N<sub>c,plug</sub>',
            value: [9, 9, 9, 9],
            visible: '',
            lb: '',
            ub: '',
          },
          ao: {
            label: '&alpha;<sub>o</sub>',
            value: [0.4, 0.3, 0.3, 0.3],
            visible: '',
            lb: 0,
            ub: 1,
          },
          ai: {
            label: '&alpha;<sub>i</sub>',
            value: [0.4, 0.3, 0.3, 0.3],
            visible: '',
            lb: 0,
            ub: 1,
          },
        },
        'Soil Properties': {
          Sum: {
            label: 's<sub>um</sub>',
            unit: 'kPa',
            value: [5, 10, 35, 50],
            visible: '',
            lb: '',
            ub: '',
          },
          z: {
            label: 'z&#39;',
            unit: 'm',
            value: [5, 0, 0, 0],
            visible: '',
            lb: '',
            ub: '',
          },
          ksu: {
            label: 'k<sub>su</sub>',
            unit: 'kPa/m',
            value: [1, 0, 3, 8],
            visible: '',
            lb: '',
            ub: '',
          },
          alpha: {
            label: '&alpha;<sub>t</sub>',
            value: [0.8, 0.7, 0.5, 0.8],
            visible: '',
            lb: '0',
            ub: '1',
          },
          gamma: {
            label: '&gamma;&#39;',
            unit: 'kN/m<sup>3</sup>',
            value: [6, 6, 6, 5],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      type: 'derived-input-tile',
      title: 'Derived Input',
      valuesLength: 4,
      fields: {
        '': {
          LDo: {
            label: 'L/D<sub>o</sub>',
            value: [4, 5, 2, 12],
            visible: '',
            lb: '',
            ub: '',
          },
          Di: {
            label: 'D<sub>i</sub>',
            unit: 'm',
            value: [5.8, 4.9, 5.8, 2.8],
            visible: '',
            lb: '',
            ub: '',
          },
          Atip: {
            label: 'A<sub>tip</sub>',
            unit: 'm<sup>2</sup>',
            value: [1.853539666, 0.77715, 1.8526, 0.9106],
            visible: '',
            lb: '',
            ub: '',
          },
          Aplug: {
            label: 'A<sub>plug</sub>',
            unit: 'm<sup>2</sup>',
            value: [26.42079422, 18.84785, 26.4074, 6.1544],
            visible: '',
            lb: '',
            ub: '',
          },
          Wplug: {
            label: 'W&#39;<sub>plug</sub>',
            unit: 'kN',
            value: [3803, 2827.1775, 1901, 1108],
            visible: '',
            lb: '',
            ub: '',
          },
          Wcaisson: {
            label: 'W&#39;<sub>caisson</sub>',
            unit: 'kN',
            value: [1719, 1490, 1375, 1146],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    4: {
      type: 'output-tile',
      title: 'Output',
      valuesLength: 4,
      fields: {
        Installation: {
          Q: {
            label: 'Q',
            unit: 'kN',
            value: [5054, 2506, 8189, 40630],
            visible: '',
            lb: '',
            ub: '',
          },
          MRS: {
            label: 'Max Required Suction',
            unit: 'kN',
            value: [3554, 1206, 6989, 39630],
            visible: '',
            lb: '',
            ub: '',
          },
          MPS: {
            label: 'Max Permissible Suction',
            unit: 'kN',
            value: [7893, 2850, 20349, 37143],
            visible: '',
            lb: '',
            ub: '',
          },
          MFPS: {
            label: 'Min FoS Plug Stability',
            value: [2.22, 2.36, 2.91, 0.94],
            visible: '',
            lb: '',
            ub: '',
          },
        },
        Capacity: {
          Vult1: {
            label: 'V<sub>ult,1</sub>',
            unit: 'kN',
            value: [10233, 4444, 22865, 71353],
            visible: '',
            lb: '',
            ub: '',
          },
          VT1: {
            label: 'V<sub>T,1</sub>',
            unit: 'kN',
            value: [11733, 5744, 24065, 72353],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult2: {
            label: 'V<sub>ult,2</sub>',
            unit: 'kN',
            value: [8907, 5440, 11783, 101754],
            visible: '',
            lb: '',
            ub: '',
          },
          VT2: {
            label: 'V<sub>T,2</sub>',
            unit: 'kN',
            value: [10407, 6740, 12983, 102754],
            visible: '',
            lb: '',
            ub: '',
          },
          Vult3: {
            label: 'V<sub>ult,3</sub>',
            unit: 'kN',
            value: [8332, 5575, 7892, 53739],
            visible: '',
            lb: '',
            ub: '',
          },
          VT3: {
            label: 'V<sub>T,3</sub>',
            unit: 'kN',
            value: [9832, 6875, 9092, 54739],
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
};