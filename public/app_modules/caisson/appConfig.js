import {
  makeDataCaisson,
  makeDataTwoCaisson,
  SuKpcLayout,
  PenResLayout,
  FosStabilityLayout,
} from '../../../../wa4e-v2-maths/output/wa4e-math.js';

export const appConf = {
  appName: 'caisson',
  appTitle: 'Suction Caisson',
  appPageTitle: 'Suction Caisson Installation and Uplift Capacity',
  appDescription: 'Installation and uplift capacity',
  appGrid: { x: 5, y: 6 },
  appWebComponents: [
    {
      type: 'input-tile',
      gridPosition: {
        xStart: 1,
        yStart: 1,
        xEnd: 2,
        yEnd: 4,
      },
      title: 'Input',
      fields: {
        'Caisson Properties': {
          L: [24, 'm'],
          'D<sub>o</sub>': [6, 'm'],
          t: [0.1, 'm'],
          "W'": [1500, 'kn'],
          'N<sub>c,tips</sub>': [7.5, null],
          'N<sub>c,plug</sub>': [9, null],
          'a<sub>o</sub>': [0.4, null],
          'a<sub>i</sub>': [0.4, null],
        },
        'Soil Properties': {
          'S<sub>um</sub>': [5, 'kPa'],
          "z'": [5, 'm'],
          'k<sub>su</sub>': [1, 'kPa/m'],
          '&alpha<sub>t</sub>': [0.8, null],
          "&gamma'": [6, 'kN/m<sup>3</sup>'],
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
        'L/D<sub>o</sub>': [null, '-'],
        'D<sub>i</sub>': [null, 'm'],
        'A<sub>tip</sub>': [null, 'm<sup>2</sup>'],
        'A<sub>plug</sub>': [null, 'm<sup>2</sup>'],
        "W'<sub>plug</sub>": [null, 'kN'],
        "W'<sub>caisson</sub>": [null, 'kN'],
      },
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        Installation: {
          Q: [null, 'kN'],
          'Max Required Suction': [null, 'kN'],
          'Max Permissible Suction': [null, 'kN'],
          'Min FoS Plug Stability': [null, '-'],
        },
        Capacity: {
          'V<sub>ult,1</sub>': [null, 'kN'],
          'V<sub>T,1</sub>': [null, 'kN'],
          'V<sub>ult,2</sub>': [null, 'kN'],
          'V<sub>T,2</sub>': [null, 'kN'],
          'V<sub>ult,3</sub>': [null, 'kN'],
          'V<sub>T,3</sub>': [null, 'kN'],
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
          subGridPosition: {
            xStart: 1,
            yStart: 1,
            xEnd: 2,
            yEnd: 2,
          },
          dataFun() {
            makeDataCaisson();
          },
          layout: SuKpcLayout,
          args: ['suz', 'z'],
        },
        plotPenRes: {
          subGridPosition: {
            xStart: 1,
            yStart: 2,
            xEnd: 2,
            yEnd: 3,
          },
          dataFun() {
            makeDataTwoCaisson();
          },
          layout: PenResLayout,
          args: ['req_suction', 'q_total', 'z'],
        },
        plotFosStability: {
          subGridPosition: {
            xStart: 1,
            yStart: 3,
            xEnd: 2,
            yEnd: 4,
          },
          dataFun() {
            makeDataCaisson();
          },
          layout: FosStabilityLayout,
          args: ['fos', 'z'],
        },
      },
    },
  ],
};
