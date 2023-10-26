
## Freeware web-based calculation tools for geotechnical engineers

Webappsforengineers are freely available online geotechnical engineering calculation tools based on published research 
and developed for research dissemination and teaching. 

The apps enable users to engage with published methods and 
frameworks immediately, allowing initial sizing calculations to be performed and exploration of the sensitivity of 
design inputs (e.g. geotechnical properties and loads) on design outputs (e.g. foundation or anchor geometry and 
resistance). 

In some cases geometry of the structure is an input, although a key value of many of the automated 
calculation tools presented in these apps is the ability to change the design question from ‘is the factor of safety for
this foundation sufficient?’ to ‘what is the minimum geometry of the foundation to ensure the required factor of 
safety?’. The latter is arguably the more useful design question and the optimization routines in those tools applying a
failure envelope methodology, enable automated iteration to determine the optimized geometry.


## Getting Started Developing WA4E 

### Cloning directories 

Clone the wa4e-v2 and wa4e-math repositories from github.  Have them as subdirectories of the same directory. 

`git clone git@github.com:webappsforengineers/wa4e-v2.git` 

`git clone git@github.com:webappsforengineers/wa4e-math.git` 

 
### Installations 

Make sure you have node.js and npm installed on your machine 

### Prepare the math library 

- `cd` to the wa4e-math directory.   
- `npm install` to install the packages from package.json  
- `bash roll-n-copy.sh` (this uses rollup to bundle up the math code into an es format so that it can be used with the rest of the app.  The output file is then copied into the wa4e-v2 directory.) 
- This is necessary because only es modules can import information from other modules and export information to other modules. 

### Get the web app up and running 

- `cd` to the wa4e-v2 directory 
- Check that wa4e-math.js is in src/local_modules/ (this is the file we just bundled up and copied across) 
- `npm install` to install the packages from package.json 
- `npm start` to start the development server (this should open a browser) 
- Navigate to localhost:8000/src/index.html in the browser and you should see the WebAppsForEngineers homepage.   
- To run the tests use `npm run test` 
- To lint the code use `npm run lint` 
- To build the website that is served by github pages run `npm run build`, then add, commit and push all the new files in the dist folder (be sure to also delete all old dist files).

### To add a new app (like caisson, consolidated-ncv etc.)

- Add a folder in src/app_modules containing app.js, appConfig.mjs, and index.html.  These should follow the same format as the existing apps.
- Add the path of the app to moduleConf.mjs

### To add a new lit element (like batchTile, formTile etc.)

- Create the .mjs file with the lit element inside it.  Extend from the StyledElement element so that the element will take on the bootstrap styling.
- Add the path of the new lit element to myElements.mjs
- Add the element to AppGeneric.mjs