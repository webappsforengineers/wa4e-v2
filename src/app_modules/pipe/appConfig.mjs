import { changeObj } from './onChange.mjs';

export const appConf = {
  appName: 'pipe',
  appTitle: 'Pipeline On-Bottom Stability',
  appPageTitle: 'Offshore Pipeline On-bottom Stability Analysis',
  appDescription: 'Required pipe weight (DNV-based)',
  appColour: '#6fb072',
  appWebComponents: {
    0: {
      type: 'text-tile',
      title: 'About this app:',
      text: {
        subTitle: {
          text: 'Required pipe weight',
          format: 'h5',
        },
        blurb: {
          text: 'Still to do …',
          format: '',
        },
      },
    },
    1: {
      type: 'input-tile',
      title: 'Input',
      fields: {
        'Calculation Parameters': {
          wd: {
            label: 'Water Depth',
            unit: 'm',
            value: 80,
            visible: '',
            lb: '',
            ub: '',
          },
          Hs: {
            label: 'Significant wave height',
            unit: 'm',
            value: 14,
            visible: '',
            lb: '',
            ub: '',
          },
          Tp: {
            label: 'Peak time period',
            unit: 's',
            value: 12,
            visible: '',
            lb: '',
            ub: '',
          },
          Uc: {
            label: 'Steady current velocity',
            unit: 'm/s',
            value: 0.3,
            visible: '',
            lb: '',
            ub: '',
          },
          D: {
            label: 'Pipeline outer diameter',
            unit: 'm',
            value: 0.5,
            visible: '',
            lb: '',
            ub: '',
          },
          pipew: {
            label: 'Pipeline submerged weight',
            unit: 'kN/m',
            value: 3,
            visible: 'none',
            lb: '',
            ub: '',
          },
        },
        'Stability Criterion': {
          mu: {
            label: 'Friction coefficient',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          rsc: {
            label: 'Saftey factor',
            unit: null,
            value: null,
            visible: '',
            lb: '',
            ub: '',
          },
          lateralDisplacementLessThan: {
            label: 'Lateral Displacement',
            unit: 'D (pipe diameter)',
            value: null,
            visible: 'none',
            lb: '',
            ub: '',
          },
        },
      },
      subComponents: {
        0: {
          type: 'radio-tile',
          index: 0,
          position: 'beforeTitle',
          display: '',
          title: 'Task',
          options: {
            evalReqPipeWeight: {
              check_status: '',
              label: 'Evaluate required pipe weight',
              visible: '',
            },
            stabilityDisplacement: {
              check_status: '',
              label: 'Check the stability / calculate the displacement',
              visible: '',
            },
          },
          onChange: changeObj,
          modifyOnClick: true,
        },
        1: {
          type: 'radio-tile',
          index: 1,
          position: 'afterTitle',
          display: '',
          title: ' ',
          options: {
            absLatStaStability: {
              check_status: '',
              label: 'Absolute Lateral Static Stability',
              visible: '',
            },
            genLatStability: {
              check_status: '',
              label: 'Generalised Lateral Stability',
              visible: '',
            },
            dynLatStability: {
              check_status: '',
              label: 'Dynamic Lateral Stability',
              visible: '',
            },
          },
          onChange: {},
          modifyOnClick: true,
        },
        2: {
          type: 'radio-tile',
          index: 1,
          position: 'afterContent',
          display: 'none',
          title: 'Lateral displacement is less than',
          options: {
            halfPipe: {
              check_status: '',
              label: '0.5D (half pipe diameter – virtual stability)',
              visible: '',
            },
            tenPipe: {
              check_status: '',
              label: '10D (10 pipe diameter)',
              visible: '',
            },
          },
        },
      },
    },
    2: {
      type: 'text-tile',
      title: 'Data',
      text: {
        subTitle: {
          text: 'Recommended values from DNV-RP-F109',
          format: 'h4',
        },
        frictionTableTitle: {
          text: 'Friction coefficient:',
          format: '',
        },
        safteyTableTitle: {
          text: 'Safety factor:',
          format: '',
        },
      },
      subComponents: {
        0: {
          type: 'table-tile',
          index: 1,
          position: 'afterTitle',
          display: '',
          title: ' ',
          content: {
            1: ['Sand seabed', '0.6'],
            2: ['Clay seabed', '0.2'],
          },
        },
        1: {
          type: 'table-tile',
          index: 2,
          position: 'afterTitle',
          display: '',
          title: ' ',
          content: {
            1: ['Conservativeness', 'Low', 'Normal', 'High'],
            2: ['Sand and rock', '0.95', '1.50', '2.16'],
            3: ['Clay', '0.95', '1.56', '2.31'],
          },
        },
      },
    },
    3: {
      type: 'text-tile',
      title: 'Output',
      text: {
        result: {
          text: 'N/A',
          format: '',
        },
      },
    },
  },
};
