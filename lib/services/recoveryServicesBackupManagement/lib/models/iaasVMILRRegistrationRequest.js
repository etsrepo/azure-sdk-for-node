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
 * Initializes a new instance of the IaasVMILRRegistrationRequest class.
 * @constructor
 * Restore files or folders from a backup copy, or recovery point, of an IaaS
 * (or Azure) VM.
 *
 * @member {string} [recoveryPointId] The ID of the IaaS VM recovery point used
 * to restore the files or folders.
 *
 * @member {string} [virtualMachineId] The fully qualified Resource Manager ID
 * of the VM used to restore the files or folders.
 *
 * @member {string} [initiatorName] The iSCSI initiator name.
 *
 * @member {boolean} [renewExistingRegistration] Whether to renew the existing
 * registration with the iSCSI server.
 *
 */
class IaasVMILRRegistrationRequest extends models['ILRRequest'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IaasVMILRRegistrationRequest
   *
   * @returns {object} metadata of IaasVMILRRegistrationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IaasVMILRRegistrationRequest',
      type: {
        name: 'Composite',
        className: 'IaasVMILRRegistrationRequest',
        modelProperties: {
          objectType: {
            required: true,
            serializedName: 'objectType',
            type: {
              name: 'String'
            }
          },
          recoveryPointId: {
            required: false,
            serializedName: 'recoveryPointId',
            type: {
              name: 'String'
            }
          },
          virtualMachineId: {
            required: false,
            serializedName: 'virtualMachineId',
            type: {
              name: 'String'
            }
          },
          initiatorName: {
            required: false,
            serializedName: 'initiatorName',
            type: {
              name: 'String'
            }
          },
          renewExistingRegistration: {
            required: false,
            serializedName: 'renewExistingRegistration',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = IaasVMILRRegistrationRequest;