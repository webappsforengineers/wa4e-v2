/* eslint-disable no-sparse-arrays */
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
      fields: {
        'Calculation Parameters': {
          wd: [80, 'm', 'Water Depth', ''],
          Hs: [14, 'm', 'Significant wave height', ''],
          Tp: [12, 's', 'Peak time period', ''],
          Uc: [0.3, 'm/s', 'Steady current velocity', ''],
          D: [0.5, 'm', 'Pipeline outer diameter', ''],
          pipew: [3, 'kN/m', 'Pipeline submerged weight', 'none'],
        },
        'Stability Criterion': {
          mu: [null, null, 'Friction coefficient', ''],
          rsc: [null, null, 'Saftey factor', ''],
          lateralDisplacementLessThan: [
            null,
            'D (pipe diameter)',
            'LateralDisplacement',
            'none',
          ],
        },
      },
      subComponents: [
        {
          type: 'radio-tile',
          index: 0,
          position: 'beforeTitle',
          display: '',
          title: 'Task',
          options: {
            evalReqPipeWeight: ['', 'Evaluate required pipe weight', ''],
            stabilityDisplacement: [
              '',
              'Check the stability / calculate the displacement',
              '',
            ],
          },
          onChange: {
            evalReqPipeWeight: {
              fields: {
                'Calculation Parameters': {
                  pipew: [3, 'kN/m', 'Pipeline submerged weight', 'none'],
                },
              },
              subComponents: {
                1: {
                  type: 'radio-tile',
                  index: 1,
                  position: 'afterTitle',
                  display: '',
                  title: ' ',
                  options: {
                    absLatStaStability: [
                      '',
                      'Absolute Lateral Static Stability',
                      '',
                    ],
                    genLatStability: ['', 'Generalised Lateral Stability', ''],
                    dynLatStability: ['', 'Dynamic Lateral Stability', ''],
                  },
                  onChange: {
                    absLatStaStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', ''],
                          rsc: [null, null, 'Saftey factor', ''],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            'none',
                          ],
                        },
                      },
                      subComponents: {
                        2: {
                          display: 'none',
                        },
                      },
                    },
                    genLatStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', 'none'],
                          rsc: [null, null, 'Saftey factor', 'none'],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            'none',
                          ],
                        },
                      },
                      subComponents: {
                        2: {
                          display: '',
                        },
                      },
                    },
                    dynLatStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', 'none'],
                          rsc: [null, null, 'Saftey factor', 'none'],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            '',
                          ],
                        },
                      },
                      subComponents: {
                        2: {
                          display: 'none',
                        },
                      },
                    },
                  },
                  modifyOnClick: true,
                },
              },
            },
            stabilityDisplacement: {
              fields: {
                'Calculation Parameters': {
                  pipew: [3, 'kN/m', 'Pipeline submerged weight', ''],
                },
                'Stability Criterion': {
                  lateralDisplacementLessThan: [
                    null,
                    'D (pipe diameter)',
                    'LateralDisplacement',
                    'none',
                  ],
                },
              },
              subComponents: {
                1: {
                  type: 'radio-tile',
                  index: 1,
                  position: 'afterTitle',
                  display: '',
                  title: ' ',
                  options: {
                    absLatStaStability: [
                      '',
                      'Absolute Lateral Static Stability',
                      '',
                    ],
                    genLatStability: ['', 'Generalised Lateral Stability', ''],
                    dynLatStability: ['', 'Dynamic Lateral Stability', ''],
                  },
                  onChange: {
                    absLatStaStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', ''],
                          rsc: [null, null, 'Saftey factor', ''],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            'none',
                          ],
                        },
                      },
                      subComponents: {
                        1: {
                          onChange: {
                            absLatStaStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            genLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            dynLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                          },
                        },
                        2: {
                          display: 'none',
                        },
                      },
                    },
                    genLatStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', 'none'],
                          rsc: [null, null, 'Saftey factor', 'none'],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            'none',
                          ],
                        },
                      },
                      subComponents: {
                        1: {
                          onChange: {
                            absLatStaStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            genLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            dynLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                          },
                        },
                        2: {
                          display: 'none',
                        },
                      },
                    },
                    dynLatStability: {
                      fields: {
                        'Stability Criterion': {
                          mu: [null, null, 'Friction coefficient', 'none'],
                          rsc: [null, null, 'Saftey factor', 'none'],
                          lateralDisplacementLessThan: [
                            null,
                            'D (pipe diameter)',
                            'LateralDisplacement',
                            'none',
                          ],
                        },
                      },
                      subComponents: {
                        1: {
                          onChange: {
                            absLatStaStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            genLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                            dynLatStability: {
                              subComponents: {
                                2: {
                                  display: 'none',
                                },
                              },
                            },
                          },
                        },
                        2: {
                          display: 'none',
                        },
                      },
                    },
                  },
                  modifyOnClick: true,
                },
                2: {
                  display: 'none',
                },
              },
            },
          },
          modifyOnClick: true,
        },
        {
          type: 'radio-tile',
          index: 1,
          position: 'afterTitle',
          display: '',
          title: ' ',
          options: {
            absLatStaStability: ['', 'Absolute Lateral Static Stability', ''],
            genLatStability: ['', 'Generalised Lateral Stability', ''],
            dynLatStability: ['', 'Dynamic Lateral Stability', ''],
          },
          onChange: {
            absLatStaStability: {
              fields: {
                'Stability Criterion': {
                  mu: [null, null, 'Friction coefficient', ''],
                  rsc: [null, null, 'Saftey factor', ''],
                  lateralDisplacementLessThan: [
                    null,
                    'D (pipe diameter)',
                    'LateralDisplacement',
                    'none',
                  ],
                },
              },
              subComponents: {
                2: {
                  display: 'none',
                },
              },
            },
            genLatStability: {
              fields: {
                'Stability Criterion': {
                  mu: [null, null, 'Friction coefficient', 'none'],
                  rsc: [null, null, 'Saftey factor', 'none'],
                  lateralDisplacementLessThan: [
                    null,
                    'D (pipe diameter)',
                    'LateralDisplacement',
                    'none',
                  ],
                },
              },
              subComponents: {
                2: {
                  display: '',
                },
              },
            },
            dynLatStability: {
              fields: {
                'Stability Criterion': {
                  mu: [null, null, 'Friction coefficient', 'none'],
                  rsc: [null, null, 'Saftey factor', 'none'],
                  lateralDisplacementLessThan: [
                    null,
                    'D (pipe diameter)',
                    'LateralDisplacement',
                    '',
                  ],
                },
              },
              subComponents: {
                2: {
                  display: 'none',
                },
              },
            },
          },
          modifyOnClick: true,
        },
        {
          type: 'radio-tile',
          index: 1,
          position: 'afterContent',
          display: 'none',
          title: 'Lateral displacement is less than',
          options: {
            halfPipe: ['', '0.5D (half pipe diameter – virtual stability)', ''],
            tenPipe: ['', '10D (10 pipe diameter)', ''],
          },
        },
      ],
    },
  ],
};
