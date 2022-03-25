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
  let new_obj = {};
  let appConf = apps[x];
  let index=0;
  for (let component of appConf.appWebComponents) {
    new_obj[index] = component
    index ++;
  }
  appConf.appWebComponents = new_obj
  let newText = "/* eslint-disable no-sparse-arrays */\n" +
    "export const appConf = " + JSON.stringify(appConf, null, 2)

  fs.writeFile("./"+appConf.appName+"/appConfig.mjs", newText, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}


