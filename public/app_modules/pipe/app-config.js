export const appConf = {
  "appName": "pipe",
  "appTitle": "Pipeline On-Bottom Stability",
  "appPageTitle": "",
  "appDescription": "Required pipe weight (DNV-based)",
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
      "imgPath": "./pipe.png"
    }
  }
}
