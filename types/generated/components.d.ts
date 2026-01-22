import type { Schema, Struct } from '@strapi/strapi';

export interface FunctionalComponentPackage extends Struct.ComponentSchema {
  collectionName: 'components_functional_component_packages';
  info: {
    displayName: 'package';
    icon: 'layer';
  };
  attributes: {
    discountedPrice: Schema.Attribute.Decimal;
    minutes: Schema.Attribute.Integer;
    price: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'functional-component.package': FunctionalComponentPackage;
    }
  }
}
