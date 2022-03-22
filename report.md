Web Apps For Engineers - Phase 1 Modernisation


The GitHub Project Board for this work can be found here https://github.com/Southampton-RSG/wa4e-v2/projects/1


Project goals:
The RSG was approached to modernise the Web Apps For Engineers (WA4E) website. There was an exploratory/open-ended aspect to the development as the original website had been written by students several years ago so the state was unknown. However, the explicit goals were:
1. Modernise the website to ensure compatibility with all modern browsers
2. Add the ability to create a batch tile so that users can run many calculations locally by submitting/downloading files (without needing to use a server)
3. Add some previously unimplemented apps
4. Standardise the apps so the apps follow a familiar pattern to aid readability/future development


Exploratory Results:
The WA4E 1.0 site was constructed using Polymer (https://polymer-library.polymer-project.org/) which has been deprecated twice and thus the upgrade pathways were not suitable to move directly into the modern counterpart Lit (https://lit.dev/). 
The original website was made using an early version of a WebComponent model but did not fit the modern ES6 standard, this created many issues with libraries that were no longer compatible with modern JavaScript (JS). Some of these issues were shallow where an alternative could be found however others more baked into the mathematics have been patched using a bundler we use RollUp (https://rollupjs.org/guide/en/) which has a CommonJS plugin to patch most of these issues. The mathematics libraries are written for WA4E 1.0 are thus bundled with the 3rd party dependencies and provided through a bundle. This is appropriate for development and will remain until the mathematics libraries can be rewritten to conform to ES6 standards which is out of the original scope due to the amount of work required in this process. To separate the modern JS from the JS requiring bundling we create a mathematics repository (https://github.com/Southampton-RSG/wa4e-math) that creates the bundle then moves the bundled output into the main project repository.


Development Plan:
Whilst WA4E was a well put together website the main barrier to development, outside of the technical issues outlined above, was that it had been written independently by multiple developers without any architectural guidance. The result of this was that the ‘data pathway’ through each app and each mathematics scrip was different. The solution to this was:
* Standardise the configuration of each app.
* Modify the mathematics minimally to be able to translate from the new config into the maths files and vice versa.
Using a standardised configuration file we are then able to write reproducible WebComponents that read the configuration files and generate the input, output, graph… tiles.


Standardisation Justification:
The standardisation of the platform into reusable tiles and defining the apps via a configuration JSON took the vast majority of the development time and required reimplementing the entire website frontend. The justification for this being the major time investment is by considering the alternative development for project goals 1 and 2:
1. Modernising the website would require major patches to the Polymer elements that would see the website suck in a legacy framework with additional patches being required down the line. 
2. A batch tile would need to be created for each app individually to match the inputs and output of each mathematics script which would take a large proportion of development time and provide no future benefit.


Whilst Lit will at some point be deprecated in much the same way this is the nature of web development/JS we avoid a rework of the same magnitude being required by separating the configuration, mathematics and frontend into distinct places.


Configuration example:


GitHub: https://github.com/Southampton-RSG/wa4e-v2/blob/master/public/app_modules/pinpiles/appConfig.mjs


The configuration files are written in JSON format that is easily interpreted by JS, basic config such as titles, description, and colour are included. The list of  tiles to render is contained in appWebComponents (line 9), each basic tile contains:
* A type that defines the component to render.
* A title
* A list of fields that are identified using variable names (to match the original maths), then a list that defines [default value (Number, null, or string) , unit (html), label(html), visibility (html script tag value) ] each of which are parsed in the components to render a field.
* A subcomponent list, allows for tiles to have elements such as radio fields or table output dynamically added without needing to overcomplicate the standard field list.
* The optimisation and input tiles have buttons that submit the form and run a calculation or optimisation respectively.
A few non-standard tiles exist that don’t follow the above format:
* Text Tile
   * This contains html to render and can be updated dynamically to change the text.
* Image tile
   * This contains a path to an image to display and a pixel size for the image
* Graph tile: A complicated tile 
   * fields: arrays or labels that are used to render the plots that are updated in the mathematics files
   * plots: a list of the plots to render
      * dataFun: a function that returns an object that can be used by plotlyJS to create an image.
      * layout: a plot configuration object containing title and legend configuration
      * args: define the arguments from fields to be passed to this plot
      * addLines: on repeated calculations should the plot overwrite or add data
      * data: a functional array to store each line for addLines to work
      * show: should this plot be shown by default
   * updateConf: 
      * noNewData: determining how data is added
      * clearData: determines if the graph should be cleared on changing fields 
* RadioTile: A subcomonent tile
   * index: with which field should this be displayed (0 indexed)
   * position: where in the field options:
      * beforeTitle
      * afterTitle
      * afterContent
   * title: the name of the radiobox
   * display: html script tag to show or hide the element
   * options: The options to display on the radio list with the following [value (true, false, or null), label (html), visibility (html script tag value)]
   * onChange: the fields to update when each element is changed the format is as an object {optionValue: object matching the path required to get to the element of a tile that should be changed }. The object is minimal and is deconstructed into a series of keys to get to the object to alter.
   * modifyOnClick: boolean to control is the modify function is called to parse the onChange object and update fields
* Table Tile: Subcomponent Renders a basic html table
   * index: with which field should this be displayed (0 indexed)
   * position: where in the field options:
      * beforeTitle
      * afterTitle
      * afterContent
   * title: the name of the radiobox
   * display: html script tag to show or hide the element
   * content: object of numbers lists (starting at 1) of html strings that are rendered as the table content 
* Input Table Tile: Subcomponent Renders a html table formatted using the field structure with labels and units
   * index: with which field should this be displayed (0 indexed)
   * position: where in the field options:
      * beforeTitle
      * afterTitle
      * afterContent
   * title: the name of the radiobox
   * content: this is an object with integer field names starting at 0. The 0th element is an object that contains a single element called fields that defines a list of header values. The following 1-n objects contain a label tag which has html defining the label to be rendered in the 1st column. Then a values tag that contains a list of lists that are rendered as columns 1 to n Each sublist contains [default value (Number, null, or string) , unit (html), visibility (html script tag value)]
* Batch tile:
   * No config just a title. However, for development the batch tile is unique in that it get passed all the other tiles so it can parse them into a CSV format to creat an input template and output form.


Frontend:
See the directory and inheritance structures below.


The frontend for WA4E-v2-alpha has been built using Lit. It uses a hierarchical object inheritance model to reuse code as often as possible. 


Briefly, AppGeneric contains tools to build an app these tools are orchestrated by config files. TileBase contains tools to build a form or other tile these tools are orchestrated by the app_tiles for form the tiles.


To create a new app the following steps must be followed:
* Add a folder with the new app name in wa4e/public/app_modules wa4e/src/app_modules wa4e-math/app_modules
* Write the wa4e/public/app_modules/new-app/appConfig.mjs file using available app tiles.
   * Export the appConf in module config
* Add an app.js file in wa4e/public/app_modules/new-app/app.js
   * Import the app adding to line 5+ in src/wa4e-v2.js
   * Add the HTML in the div starting on line 38 in src/wa4e-v2.js
* Add the script file in wa4e-math/app_modules/app-name-script.js
   * Export the calculation (and optimisation) in wa4e-math/wa4e-math.mjs
   * Run `bash roll-n-copy.sh` to compile the maths and send it to wa4e/src/local_modules/ 


Backend:
The script files in the wa4e-v2 there is currently little code reuse in them aside from in helper and optimisation but this is limited. Currently writing custom scripts is the way to go this is a priority upgrade for the following work packages. 
The current format is to pass in the whole of appWebComponents then use .find to access the tiles to update.
We make use of stdlib (https://stdlib.io/) for standard functionality, mathjs (https://mathjs.org/docs/index.html) for the vector products, and lodash-es (https://www.npmjs.com/package/lodash-es?activeTab=versions) for convenience.
We use the rollup to move Masonry and Plotly into es6 compatible modules.


All the maths could do with being more function-based to minimise code repetition and make the backend more test-friendly.


Keeping the backend in JS allows for browser-side however using web assembly it is possible we could use other languages better designed for this kind of mathematics.


Reference Materials:


Inheritance Structure:
LitElement:
----StyledElement: Removes dom encapsulation to allow styles to work between tiles
-------- pageFooter
-------- pageHeader
-------- wa4e-v2:
------------ imports: myElements
------------ imports: moduleConf
-------- AppGeneric: The generic template for building apps
------------ App: A specific implementation of AppGeneric
---------------- imports: appConf: Config File
---------------- imports: appCalc: Math module from wa4e-math
---------------- imports: mySubComponents: subComponent extensions of TileBase
---------------- imports: myElements: standard extensions of TileBase
-------- TileBase: The generic template for an appTile
------------ properties: appConf (passed in appGeneric)
------------ properties: appName (passed in appGeneric)
------------ batchTile
------------ derivedInputForm
------------ graphTile
------------ imageTile
------------ inputForm
------------ inputTableTile
------------ optimizationTile
------------ outputForm
------------ radioTile
------------ tableTile
------------ textTile
wa4e-math: rollup from wa4e-v2-maths
---- exports: all calculation scripts
---- exports: all optimisation scripts
---- import-export: Plotly
---- import-export: Masonry
myElements:
---- imports: derivedInputForm
---- imports: graphTile
---- imports: imageTile
---- imports: inputForm
---- imports: optimizationTile
---- imports: outputForm
---- imports: textTile
mySubComponents:
---- imports: batchTile
---- imports: radioTile
---- imports: tableTile
---- imports: inputTableTile
moduleConf:
---- exports: all appConf with appNames


Directory structure reference:
wa4e
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── app_modules
│   │   ├── _test
│   │   ├── caisson
│   │   │   ├── appConfig.mjs
│   │   │   └── index.html
│   │   ├── consolidated-ncv
│   │   │   └── ...
│   │   ├── drag-anchor
│   │   │   └── ...
│   │   ├── mcc-su
│   │   │   └── ...
│   │   ├── ncv
│   │   │   └── ...
│   │   ├── pinpiles
│   │   │   └── ...
│   │   ├── pipe
│   │   │   └── ...
│   │   ├── sliding-plet
│   │   │   └── ...
│   │   ├── vh2m2t
│   │   │   └── ...
│   │   ├── vhm
│   │   │   └── ...
│   │   └── zti
│   │        └── ...
│   └── img
│      └── … .png
├── rollup.config.js
├── src
│   ├── app_modules
│   │   ├── caisson
│   │   │   └── app.js
│   │   ├── consolidated-ncv
│   │   │   └── app.js
│   │   ├── drag-anchor
│   │   │   └── app.js
│   │   ├── mcc-su
│   │   │   └── app.js
│   │   ├── ncv
│   │   │   └── app.js
│   │   ├── pinpiles
│   │   │   └── app.js
│   │   ├── pipe
│   │   │   └── app.js
│   │   ├── sliding-plet
│   │   │   └── app.js
│   │   ├── vh2m2t
│   │   │   └── app.js
│   │   ├── vhm
│   │   │   └── app.js
│   │   ├── zti
│   │   │   └── app.js
│   │   └── moduleConf.js
│   ├── elements
│   │   ├── app_tiles
│   │   │   ├── batchTile.js
│   │   │   ├── graphTile.js
│   │   │   ├── imageTile.js
│   │   │   ├── inputForm.js
│   │   │   ├── inputTableTile.js
│   │   │   ├── optimizationTile.js
│   │   │   ├── outputForm.js
│   │   │   ├── radioTile.js
│   │   │   ├── tableTile.js
│   │   │   ├── testSubTile.js
│   │   │   ├── textTile.js
│   │   │   └── tileBase.js
│   │   ├── general
│   │   │   ├── appGeneric.js
│   │   │   ├── pageFooters.js
│   │   │   └── pageHeaders.js
│   │   ├── homepage
│   │   │   └── menu_tile.js
│   │   ├── myElements.js
│   │   └── mySubComponents.js
│   ├── local_modules
│   │   └── wa4e-math.mjs
│   ├── styles
│   │   └── wa4eStyleElement.js
│   └── wa4e-v2.js
├── web-dev-server.config.mjs
└── web-test-runner.config.mjs


wa4e-math
├── app_modules
│   ├── caisson
│   │   └── caissonScript.js
│   ├── consolidated-ncv
│   │   └── consolidated-ncv-script.js
│   ├── drag-anchor
│   │   └── drag-anchor-script.js
│   ├── mcc-su
│   │   └── mcc-su-script.js
│   ├── ncv
│   │   ├── data-circular.js
│   │   ├── data-strip.js
│   │   └── ncv-script.js
│   ├── pinpiles
│   │   └── pinpiles-script.js
│   ├── pipe
│   │   └── pipe-script.js
│   ├── sliding-plet
│   │   └── sliding-plet-script.mjs
│   ├── vh2m2t
│   │   └── vh2m2t-script.js
│   ├── vhm
│   │   └── vhm-script.js
│   └── zti
│       └── zti-script.js
├── babel.config.json
├── local_modules
│   ├── helper.mjs
│   └── mathCustom.js
├── output
│   └── wa4e-math.mjs
├── package-lock.json
├── package.json
├── roll-n-copy.sh
├── rollup.config.js
└── wa4e-math.mjs
