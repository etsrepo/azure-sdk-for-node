/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the DeployedApplicationHealthReport class.
 * @constructor
 * The report of the deployed application health
 *
 */
class DeployedApplicationHealthReport extends models['HealthReport'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedApplicationHealthReport
   *
   * @returns {object} metadata of DeployedApplicationHealthReport
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedApplicationHealthReport',
      type: {
        name: 'Composite',
        className: 'DeployedApplicationHealthReport',
        modelProperties: {
          sourceId: {
            required: false,
            serializedName: 'SourceId',
            type: {
              name: 'String'
            }
          },
          property: {
            required: false,
            serializedName: 'Property',
            type: {
              name: 'String'
            }
          },
          healthState: {
            required: false,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          timeToLiveInMilliSeconds: {
            required: false,
            serializedName: 'TimeToLiveInMilliSeconds',
            type: {
              name: 'String'
            }
          },
          sequenceNumber: {
            required: false,
            serializedName: 'SequenceNumber',
            type: {
              name: 'String'
            }
          },
          removeWhenExpired: {
            required: false,
            serializedName: 'RemoveWhenExpired',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedApplicationHealthReport;
