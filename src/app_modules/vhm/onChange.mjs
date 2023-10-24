// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
  hhmm_opt: {
    4: {
      plots: {
        hhmm: {
          display: 'block',
        },
        HfMf: {
          display: 'none',
        },
      },
    },
  },
  HfMf_opt: {
    4: {
      plots: {
        hhmm: {
          display: 'none',
        },
        HfMf: {
          display: 'block',
        },
      },
    },
  },
  0: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'N/A',
          },
        },
      },
    },
  },
  1: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'D',
          },
        },
      },
    },
  },
  2: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'd',
          },
        },
      },
    },
  },
  3: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 's<sub>um</sub>(opt)',
          },
        },
      },
    },
  },
  4: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'k<sub>su,f</sub>(opt)',
          },
        },
      },
    },
  },
  5: {
    3: {
      fields: {
        Optimized: {
          sum_opt: {
            label: '&lambda;<sub>m</sub>(opt)',
          },
        },
      },
    },
  },
};
