// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
  mudmatFoundationOnly: {
    1: {
      fields: {
        'Relative Loads Taken By Piles': {
          beta_pV: {
            label: '&beta;<sub>pV</sub>',
            unit: null,
            value: 0.332,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pH: {
            label: '&beta;<sub>pH</sub>',
            unit: null,
            value: 0.776,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pM: {
            label: '&beta;<sub>pM</sub>',
            unit: null,
            value: 0.478,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
  pileGroupOnly: {
    1: {
      fields: {
        'Relative Loads Taken By Piles': {
          beta_pV: {
            label: '&beta;<sub>pV</sub>',
            unit: null,
            value: 0.332,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pH: {
            label: '&beta;<sub>pH</sub>',
            unit: null,
            value: 0.776,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pM: {
            label: '&beta;<sub>pM</sub>',
            unit: null,
            value: 0.478,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
  hybridPiledMudmat: {
    1: {
      fields: {
        'Relative Loads Taken By Piles': {
          beta_pV: {
            label: '&beta;<sub>pV</sub>',
            unit: null,
            value: 0.332,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pH: {
            label: '&beta;<sub>pH</sub>',
            unit: null,
            value: 0.747,
            visible: '',
            lb: '',
            ub: '',
          },
          beta_pM: {
            label: '&beta;<sub>pM</sub>',
            unit: null,
            value: 0.287,
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
  },
};
