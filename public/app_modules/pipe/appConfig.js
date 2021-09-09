export const appConf = {
  appName: 'pipe',
  appTitle: 'Pipeline On-Bottom Stability',
  appPageTitle: 'Offshore Pipeline On-bottom Stability Analysis',
  appDescription: 'Required pipe weight (DNV-based)',
  appColour: '#6fb072',
  appWebComponents: [
    {
      type: 'input-tile',
      title: 'Input',
      fields: {},
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'beforeTitle',
          title: 'Task',
          options: {},
          onChange: {},
        },
        {
          type: 'radio-tile',
          index: 1,
          position: 'afterTitle',
          title: 'Task',
          options: {},
          onChange: {},
        },
        {
          type: 'radio-tile',
          index: -1,
          position: 'end',
          title: 'Lateral displacement is less than',
          options: {},
          onChange: {},
        },
      ],
    },
  ],
};
