// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
  UTI: {
    1: {
      fields: {
        'Load and Material Factors': {
          lambda_s_UTI: {
            value: 1.25,
            unit: null,
            label: '&lambda;<sub>s,UTI</sub>',
            visible: '',
            lb: '',
            ub: '',
          },
          lambda_s_ZTI: {
            value: 1.25,
            unit: null,
            label: '&lambda;<sub>s,ZTI</sub>',
            visible: 'none',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      subComponents: {
        0: {
          options: {
            lambda_sOption: {
              check_status: null,
              label: '&lambda;<sub>s,UTI</sub>',
              visible: '',
            },
          },
        },
      },
    },
  },
  ZTI: {
    1: {
      fields: {
        'Load and Material Factors': {
          lambda_s_UTI: {
            value: 1.25,
            unit: null,
            label: '&lambda;<sub>s,UTI</sub>',
            visible: 'none',
            lb: '',
            ub: '',
          },
          lambda_s_ZTI: {
            value: 1.25,
            unit: null,
            label: '&lambda;<sub>s,ZTI</sub>',
            visible: '',
            lb: '',
            ub: '',
          },
        },
      },
    },
    3: {
      subComponents: {
        0: {
          options: {
            lambda_sOption: {
              check_status: null,
              label: '&lambda;<sub>s,ZTI</sub>',
              visible: '',
            },
          },
        },
      },
    },
  },
};
