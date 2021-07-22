export const appConf = {
  appName: 'ncv',
  appTitle: 'Shallow Foundation NcV',
  appPageTitle: '',
  appDescription:
    'Undrained vertical bearing capacity of strip and circular skirted foundations',
  appWebComponents: [
    {
      type: 'derived-input-tile',
      title: 'Derived Input',
      fields: {
        dD: [null, null, 'd/D (0&#45;1)'],
        A: [null, 'm<sup>2</sup>sup>', 'A'],
        kappsu: [
          null,
          null,
          '&varkappa;<sub>su</sub> = kD/s<sub>um</sub> (0&#45;200)',
        ],
      },
    },
  ],
};
