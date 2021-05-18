export const appConf = {
  "appName": "ncv",
  "appTitle": "Shallow Foundation NcV",
  "appPageTitle": "",
  "appDescription": "Undrained vertical bearing capacity of strip and circular skirted foundations",
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
      "imgPath": "./ncv.png"
    }
  }
}
