export const appConf = {
  "appName": "caisson",
  "appTitle": "Suction Caisson",
  "appPageTitle": "Suction Caisson Installation and Uplift Capacity",
  "appDescription": "Installation and uplift capacity",
  "appWebComponents": {
    "aComponent": {
      "type": "input",
      "size": {
        "x": 1,
        "y": 4
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "fields": {
        "aSubsection": {
          "Mass": "kg",
          "Volume": "m3",
          "ratio": ""
        },
        "bSubsection": {
          "thing": "unit"
        }
      },
      "buttons": {
        "SUBMIT": "green",
        "RESET": "",
        "HELP": ""
      }
    },
    "bComponent": {
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
  }
};

