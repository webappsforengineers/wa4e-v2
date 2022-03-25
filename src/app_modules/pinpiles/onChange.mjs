// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are matched by modifyform to replace
// the correct element.

export const changeObj = {
  "mudmatFoundationOnly": {
    "fields": {
      "Relative Loads Taken By Piles": {
        "beta_pV": [
          0.332,
          null,
          "&beta;<sub>pV</sub>",
          ""
        ],
        "beta_pH": [
          0.776,
          null,
          "&beta;<sub>pH</sub>",
          ""
        ],
        "beta_pM": [
          0.478,
          null,
          "&beta;<sub>pM</sub>",
          ""
        ]
      }
    }
  },
  "pileGroupOnly": {
    "fields": {
      "Relative Loads Taken By Piles": {
        "beta_pV": [
          0.332,
          null,
          "&beta;<sub>pV</sub>",
          ""
        ],
        "beta_pH": [
          0.776,
          null,
          "&beta;<sub>pH</sub>",
          ""
        ],
        "beta_pM": [
          0.478,
          null,
          "&beta;<sub>pM</sub>",
          ""
        ]
      }
    }
  },
  "hybridPiledMudmat": {
    "fields": {
      "Relative Loads Taken By Piles": {
        "beta_pV": [
          0.332,
          null,
          "&beta;<sub>pV</sub>",
          ""
        ],
        "beta_pH": [
          0.747,
          null,
          "&beta;<sub>pH</sub>",
          ""
        ],
        "beta_pM": [
          0.287,
          null,
          "&beta;<sub>pM</sub>",
          ""
        ]
      }
    }
  }
}
