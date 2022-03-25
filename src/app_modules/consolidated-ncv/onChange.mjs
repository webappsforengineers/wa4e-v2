// This object is used to get the fields that are modified on selection of a radio-tile
// the structures are a subset of the appConf that are matched by modifyform to replace
// the correct element.

export const changeObj = {
    "Circular": {
      "fields": {
        "Foundation": {
          "D_B": [
            12,
            "m",
            "D",
            ""
          ]
        },
        "Method": {
          "T_50": [
            0.035,
            null,
            "T<sub>50</sub>",
            ""
          ],
          "m_const": [
            -1.05,
            null,
            "m",
            ""
          ]
        }
      }
    },
    "Strip": {
      "fields": {
        "Foundation": {
          "D_B": [
            12,
            "m",
            "B",
            ""
          ]
        },
        "Method": {
          "T_50": [
            0.17,
            null,
            "T<sub>50</sub>",
            ""
          ],
          "m_const": [
            -0.95,
            null,
            "m",
            ""
          ]
        }
      }
    }
}
