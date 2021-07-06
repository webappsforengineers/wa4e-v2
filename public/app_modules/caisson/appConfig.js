export const appConf = {
  appName: 'caisson',
  appTitle: 'Suction Caisson',
  appPageTitle: 'Suction Caisson Installation and Uplift Capacity',
  appDescription: 'Installation and uplift capacity',
  appGrid: { x: 4, y: 6 },
  appWebComponents: [
    {
      type: 'input-tile',
      gridPosition: {
        xStart: 1,
        yStart: 1,
        xEnd: 2,
        yEnd: 5,
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
      type: 'derived-input-tile',
      gridPosition: {
        xStart: 2,
        yStart: 1,
        xEnd: 3,
        yEnd: 3,
      },
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
      type: 'image-tile',
      gridPosition: {
        xStart: 1,
        yStart: 5,
        xEnd: 3,
        yEnd: 8,
      },
      img_pth: 'caisson-figure.png',
    },
  ],
};
