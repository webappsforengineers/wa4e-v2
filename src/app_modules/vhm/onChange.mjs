// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
  hhmm_opt: {
    5: {
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
    5: {
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
  d_optimize: {
    4: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'd',
          },
        },
      },
    },
  },
  D_optimize: {
    4: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'D',
          },
        },
      },
    },
  },
  ksu_f_optimize: {
    4: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 'k<sub>su,f</sub>(opt)',
          },
        },
      },
    },
  },
  sum_optimize: {
    4: {
      fields: {
        Optimized: {
          sum_opt: {
            label: 's<sub>um</sub>(opt)',
          },
        },
      },
    },
  },
  lambda_m_optimize: {
    4: {
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
