// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are merged by modifyform to replace
// the correct element.

export const changeObj = {
  "hhmm_opt": {
    "4": {
      "plots": {
        "hhmm": {
          "display": "flex"
        },
        "HfMf": {
          "display": "none"
        }
      }
    },
  },
  "HfMf_opt": {
    "4": {
      "plots": {
        "hhmm": {
          "display": "none"
        },
        "HfMf": {
          "display": "flex"
        }
      }
    }
  },
}
