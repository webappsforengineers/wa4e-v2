export const appConf = {
  "appName": "pinpiles",
  "appTitle": "Mudmat & Hybrid Mudmat VH2M2T",
  "appPageTitle": "",
  "appDescription": "Undrained 6 DoF capacity of rectangular skirted mudmat and pinpiled mudmats",
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
      "imgPath": "./pinpiles.png"
    }
  }
}
