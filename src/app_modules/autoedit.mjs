import * as fs from 'fs';

import {
  caissonConf,
  consolidatedncvConf,
  dragAnchorConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  spletConf,
  vh2m2tConf,
  vhmConf,
  ztiConf
} from './moduleConf.mjs';

const apps = [caissonConf,
  consolidatedncvConf,
  dragAnchorConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  spletConf,
  vh2m2tConf,
  vhmConf,
  ztiConf]

for (let x in apps) {
  let appConf = apps[x]
  for (let key of Object.keys(appConf.appWebComponents)) {
    if (appConf.appWebComponents[key].subComponents !== undefined) {
      let new_obj = {};
      let index = 0;
      for (let subComponent of appConf.appWebComponents[key].subComponents) {
        new_obj[index] = subComponent
        index++;
      }
      appConf.appWebComponents[key].subComponents = new_obj
    }
  }

  let newText = "/* eslint-disable no-sparse-arrays */\n" +
    "export const appConf = " + JSON.stringify(appConf, null, 2)

  fs.writeFile("./"+appConf.appName+"/appConfig.mjs", newText, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}


