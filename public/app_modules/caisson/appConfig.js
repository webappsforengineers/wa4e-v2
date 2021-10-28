/* eslint-disable no-sparse-arrays */
export const appConf = {
  appName: 'caisson',
  appTitle: 'Suction Caisson',
  appPageTitle: 'Suction Caisson Installation and Uplift Capacity',
  appDescription: 'Installation and uplift capacity',
  appColour: '#f4e786',
  appWebComponents: [
    {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Undrained installation resistance, plug stability and uplift capacity of a suction caisson',
          format: 'h5',
        },
        blurb: {
          text:
            'This app enables prediction of undrained installation resistance, undrained uplift capacity and plug stability of a suction caisson in a fine grained deposit. Linearly increasing shear strength profiles with or without a surficial crust are permitted. The analysis is simplified and does not explicitly capture the effects internal stiffeners (either additional bearing resistance from the additional projected bearing area, or reduced internal wall friction from extrusion above stiffeners). The method is based on simple equations of wall friction and bearing resistance at the caisson tip. For sealed uplift capacity the tool is intended for caissons of sufficient embedment depth that a confined bearing failure occurs at tip level with the effect of wall friction superposed. The tool is not intended for prediction of sealed uplift resistance of shallow suction can or bucket foundations that would fail with a reverse end bearing mechanism that would reach the mudline. Undrained uniaxial vertical uplift mobilising full reverse end bearing can be approximated with the Shallow Foundations NcV app (assuming tensile reverse bearing capacity is of equal magnitude to compression bearing capacity). This app is appropriate for predicting the installation resistance for shallow suction cans as only compressive tip bearing and wall friction are mobilised; equally the app can be used to predict vented vertical uplift resistance of suction cans as these mechanisms only mobilised wall friction and/or plug weight. \n' +
            'The method presented was developed based on findings from a joint industry project described in “Suction anchors for deepwater applications”, by Andersen, K. et al. (2002), a keynote paper presented at the first International Symposium on Frontiers in Offshore Geotechnics <a href="https://www.taylorfrancis.com/books/mono/10.1201/NOE0415390637">(Ed. Gourvenec & Cassidy) </a>. The theoretical methods are presented in the text books <a href="https://www.taylorfrancis.com/books/mono/10.1201/9781315272474"> “Offshore Geotechnical Engineering” by Randolph, M.F. and Gourvenec, S. (2011, 2017)</a>, and <a href="https://www.taylorfrancis.com/books/mono/10.1201/9780429423840"> “Intermediate Offshore Foundations” by Kay, Gourvenec, Palix & Alderlieste (2021)</a>, and are the recommended methods in international standards, e.g. ISO 19901-4.  \n',
          format: '',
        },
      },
    },
    {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Caisson Properties': {
          L: [24, 'm', 'L', ''],
          Do: [6, 'm', 'D<sub>o</sub>', ''],
          t: [0.1, 'm', 't', ''],
          W: [1500, 'kn', 'W&#39;', ''],
          Nctips: [7.5, null, 'N<sub>c,tips</sub>', ''],
          Ncplug: [9, null, 'N<sub>c,plug</sub>', ''],
          ao: [0.4, null, 'a<sub>o</sub>', ''],
          ai: [0.4, null, 'a<sub>i</sub>', ''],
        },
        'Soil Properties': {
          Sum: [5, 'kPa', 'S<sub>um</sub>', ''],
          z: [5, 'm', 'z&#39;', ''],
          ksu: [1, 'kPa/m', 'k<sub>su</sub>', ''],
          alpha: [0.8, null, '&alpha;<sub>t</sub>', ''],
          gamma: [6, 'kN/m<sup>3</sup>', '&gamma;&#39;', ''],
        },
      },
      subComponents: [],
      helpText: 'Helpful text!',
    },
    {
      type: 'image-tile',
      img_pth: 'caisson-figure.png',
      img_w: '600px',
      img_h: '600px',
    },
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        '': {
          LDo: [null, null, 'L/D<sub>o</sub>', ''],
          Di: [null, 'm', 'D<sub>i</sub>', ''],
          Atip: [null, 'm<sup>2</sup>', 'A<sub>tip</sub>', ''],
          Aplug: [null, 'm<sup>2</sup>', 'A<sub>plug</sub>', ''],
          Wplug: [null, 'kN', 'W&#39;<sub>plug</sub>', ''],
          Wcaisson: [null, 'kN', 'W&#39;<sub>caisson</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'output-tile',
      title: 'Output',
      fields: {
        Installation: {
          Q: [null, 'kN', 'Q', ''],
          MRS: [null, 'kN', 'Max Required Suction', ''],
          MPS: [null, 'kN', 'Max Permissible Suction', ''],
          MFPS: [null, null, 'Min FoS Plug Stability', ''],
        },
        Capacity: {
          Vult1: [null, 'kN', 'V<sub>ult,1</sub>', ''],
          VT1: [null, 'kN', 'V<sub>T,1</sub>', ''],
          Vult2: [null, 'kN', 'V<sub>ult,2</sub>', ''],
          VT2: [null, 'kN', 'V<sub>T,2</sub>', ''],
          Vult3: [null, 'kN', 'V<sub>ult,3</sub>', ''],
          VT3: [null, 'kN', 'V<sub>T,3</sub>', ''],
        },
      },
      subComponents: [],
    },
    {
      type: 'graph-tile',
      fields: {
        z: null,
        suz: null,
        q_total: null,
        req_suction: null,
        fos: null,
      },
      plots: {
        plotSuKpc: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            title: '',
            xaxis: {
              title: 'S<sub>u</sub> (kPa)',
              side: 'top',
              rangemode: 'tozero',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: false,
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['suz', 'z'],
          addLines: false,
          data: [],
        },
        plotPenRes: {
          dataFun(a, b, c) {
            return [
              {
                name: 'Required Suction',
                x: a,
                y: c,
              },
              {
                name: 'Penetration Resistance',
                x: b,
                y: c,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: '',
            xaxis: {
              title: 'kN',
              side: 'top',
              ticksuffix: ' kN',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            showlegend: true,
            mode: 'lines',
            line: { shape: 'spline' },
            legend: {
              traceorder: 'normal',
            },
          },
          args: ['req_suction', 'q_total', 'z'],
          addLines: false,
          data: [],
        },
        plotFosStability: {
          dataFun(a, b) {
            return [
              {
                x: a,
                y: b,
              },
            ];
          },
          layout: {
            type: 'scatter',
            title: '',
            showlegend: false,
            xaxis: {
              title: 'FoS Plug Stability',
              side: 'top',
            },
            yaxis: {
              title: 'z (m)',
              autorange: 'reversed',
            },
            mode: 'lines',
            line: { shape: 'spline' },
          },
          args: ['fos', 'z'],
          addLines: false,
          data: [],
        },
      },
      updateConf: {
        noNewData: false,
        clearData: false,
      },
    },
    {
      type: 'batch-tile',
      title: 'Batch Calculation',
    },
  ],
};
