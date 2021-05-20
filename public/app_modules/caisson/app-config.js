export const appConf = {
  "appName": "caisson",
  "appTitle": "Suction Caisson",
  "appPageTitle": "Suction Caisson Installation and Uplift Capacity",
  "appDescription": "Installation and uplift capacity",
  "appGrid": {"x": 4, "y": 6},
  "appWebComponents": [
    {
      "type": "input",
      "gridPosition": {
        "xStart": 1,
        "yStart": 1,
        "xEnd": 2,
        "yEnd": 5
      },
      "title": "Input",
      "fields": {
        "CaissonProperties": {
          "L": [24, "m"],
          "D<sub>o</sub>": [6, "m"],
          "t": [0.1, "m"],
          "W'": [1500, "kn"],
          "N<sub>c,tips</sub>": [null, null],
          "N<sub>c,plug</sub>": [null, null],
          "a<sub>o</sub>": [null, null],
          "a<sub>i</sub>": [null, null]
        },
        "Soil Properties": {
          "S<sub>um</sub>": [5, "kPa"],
          "z'": [5, "m"],
          "k<sub>su</sub>": [1, "kPa/m"],
          "&alpha<sub>t</sub>": [0.8, null],
          "&gamma'": [6,"kN/m<sup>3</sup>"]
        }
      },
      "buttons": {
        "SUBMIT": ["sub", "green"],
        "RESET": ["reset", null],
        "HELP": ["help", null]
      }
    },
    {
      "type": "Image",
      "size": {
        "x": 2,
        "y": 2
      },
      "position": {
        "x": 0,
        "y": 4
      },
      "imgPath": "./caisson.png"
    }
  ]
};

