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
  let modFields = ['radio-tile'];

  for (let component of appConf.appWebComponents) {
    if (component.subComponents !== undefined) {
      for (let subComponent of component.subComponents) {
        let new_fields = {};
        let modFieldIdx = modFields.indexOf(subComponent.type);
        if (modFieldIdx >= 0) {
          const groups = Object.entries(subComponent.options);
          groups.forEach(([grp_key, value]) => {
            new_fields[grp_key] = {
              check_status: value[0],
              label: value[1],
              visible: value[2]
            };
          });
          let mod_this = appConf.appWebComponents.find(element => element.type === component.type).subComponents.find(element => element.type === modFields[modFieldIdx]);
          mod_this.options = new_fields;
        }
      }
    }
  }

  let newText = "/* eslint-disable no-sparse-arrays */\n" +
    "export const appConf = " + JSON.stringify(appConf, null, 2)

  fs.writeFile("./"+appConf.appName+"/appConfig.mjs", newText, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}


