import { appConf } from './zti/appConfig.mjs';
import * as fs from 'fs';


let modFields = ['input-tile', 'derived-input-tile', 'output-tile'];
for (let component of appConf.appWebComponents) {
  let new_fields = {};
  let modFieldIdx = modFields.indexOf(component.type);
  if (modFieldIdx >= 0) {
    const groups = Object.entries(component.fields);
    groups.forEach(([grp_key, value]) => {
      let new_obj = {};
      const entries = Object.entries(value);
      entries.forEach(([entry_name, item_values]) => {
        new_obj[entry_name] = {
          label: item_values[2],
          unit: item_values[1],
          value: item_values[0],
          visible: item_values[3],
          lb: '',
          ub: '',
        }
      });
      new_fields[grp_key] = new_obj
    });
    let mod_this = appConf.appWebComponents.find(element => element.type === modFields[modFieldIdx])
    mod_this.fields = new_fields;
  }
}

fs.writeFile("./zti/new_conf.txt", JSON.stringify(appConf, null, 3), (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
