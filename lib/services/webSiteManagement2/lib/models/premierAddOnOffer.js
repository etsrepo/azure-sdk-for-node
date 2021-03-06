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
 * Initializes a new instance of the PremierAddOnOffer class.
 * @constructor
 * Premier add-on offer.
 *
 * @member {string} [sku] SKU.
 *
 * @member {string} [product] Product.
 *
 * @member {string} [vendor] Vendor.
 *
 * @member {string} [premierAddOnOfferName] Name.
 *
 * @member {boolean} [promoCodeRequired] <code>true</code> if promotion code is
 * required; otherwise, <code>false</code>.
 *
 * @member {number} [quota] Quota.
 *
 * @member {string} [webHostingPlanRestrictions] App Service plans this offer
 * is restricted to. Possible values include: 'None', 'Free', 'Shared',
 * 'Basic', 'Standard', 'Premium'
 *
 * @member {string} [privacyPolicyUrl] Privacy policy URL.
 *
 * @member {string} [legalTermsUrl] Legal terms URL.
 *
 * @member {string} [marketplacePublisher] Marketplace publisher.
 *
 * @member {string} [marketplaceOffer] Marketplace offer.
 *
 */
class PremierAddOnOffer extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PremierAddOnOffer
   *
   * @returns {object} metadata of PremierAddOnOffer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PremierAddOnOffer',
      type: {
        name: 'Composite',
        className: 'PremierAddOnOffer',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'properties.sku',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'properties.product',
            type: {
              name: 'String'
            }
          },
          vendor: {
            required: false,
            serializedName: 'properties.vendor',
            type: {
              name: 'String'
            }
          },
          premierAddOnOfferName: {
            required: false,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          promoCodeRequired: {
            required: false,
            serializedName: 'properties.promoCodeRequired',
            type: {
              name: 'Boolean'
            }
          },
          quota: {
            required: false,
            serializedName: 'properties.quota',
            type: {
              name: 'Number'
            }
          },
          webHostingPlanRestrictions: {
            required: false,
            serializedName: 'properties.webHostingPlanRestrictions',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'Free', 'Shared', 'Basic', 'Standard', 'Premium' ]
            }
          },
          privacyPolicyUrl: {
            required: false,
            serializedName: 'properties.privacyPolicyUrl',
            type: {
              name: 'String'
            }
          },
          legalTermsUrl: {
            required: false,
            serializedName: 'properties.legalTermsUrl',
            type: {
              name: 'String'
            }
          },
          marketplacePublisher: {
            required: false,
            serializedName: 'properties.marketplacePublisher',
            type: {
              name: 'String'
            }
          },
          marketplaceOffer: {
            required: false,
            serializedName: 'properties.marketplaceOffer',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PremierAddOnOffer;
