export const appConf = {
  appName: 'consolidated-ncv',
  appTitle: 'Consolidated NcV',
  appPageTitle: 'Shallow Foundation Consolidated NcV',
  appDescription: 'Consolidated undrained vertical bearing capacity',
  appColour: '#9a76c1',
  appWebComponents: [
    {
      type: 'radio-tile',
      title: 'Foundation Shape',
      options: {
        Circular: '',
        Strip: '',
      },
    },
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        Foundation: {
          D: [12, 'm'],
          '&alpha;<sub>base</sub>': [1, null],
        },
        Soil: {
          '&gamma;': [16, 'kN/m<sub>3</sub>'],
          k: [1.3e-8, 'm/s'],
          '&kappa;': [0.044, null],
          '&lambda;': [0.205, null],
          e: [2.25, null],
          "M = q/p'": [0.89, null],
          OCR: [1, null],
          "&sigma;'<sub>VO</sub>": [25, 'kPa'],
          'G<sub>S</sub>': [2.7, null],
          '&Gamma;<sub>W</sub>': [10, 'kN/m<sup>3</sup>'],
        },
        Loading: {
          'v<sub>p</sub>/v<sub>u</sub>': [0.3, null],
          't<sub>cons</sub>': [1, 'years'],
        },
        Method: {
          'T<sub>50</sub>': [0.035, null],
          m: [-1.05, null],
          'f<sub>$sigma;</sub>': [0.8, null],
          'f<sub>su</sub>': [0.45, null],
        },
      },
      helpText: 'Helpful text!',
    },
  ],
};
