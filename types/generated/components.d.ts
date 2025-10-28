import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    button_primary_text: Schema.Attribute.String & Schema.Attribute.Required;
    button_primary_url: Schema.Attribute.String & Schema.Attribute.Required;
    button_secondary_text: Schema.Attribute.String & Schema.Attribute.Required;
    button_secondary_url: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardHome extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_homes';
  info: {
    displayName: 'Card-home';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['sub', 'cont', 'prest']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardsHome extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards_homes';
  info: {
    displayName: 'Cards-home';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'options';
    icon: 'alien';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.card-home': SharedCardHome;
      'shared.cards-home': SharedCardsHome;
      'shared.media': SharedMedia;
      'shared.options': SharedOptions;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
