import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentAboutHabilitySection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_hability_sections';
  info: {
    displayName: 'HabilitySection';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    Porcentaje: Schema.Attribute.Component<'shared.info-porcentaje', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentAboutKypSection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_kyp_sections';
  info: {
    displayName: 'KYPSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    List: Schema.Attribute.Component<'shared.list-item', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentAboutMisionAndVision extends Struct.ComponentSchema {
  collectionName: 'components_component_about_mision_and_visions';
  info: {
    displayName: 'Mision&Vision';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    gallery: Schema.Attribute.Media<'images' | 'files', true>;
    ListItem: Schema.Attribute.Component<
      'shared.icon-and-title-and-description',
      true
    >;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentAboutValoresSection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_valores_sections';
  info: {
    displayName: 'ValoresSection';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    List: Schema.Attribute.Component<'shared.title-and-description', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentContactContactSection extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    InfoContact: Schema.Attribute.Component<
      'shared.icon-and-title-and-description',
      true
    >;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_about_sections';
  info: {
    description: '';
    displayName: 'AboutSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'files' | 'images'>;
    List: Schema.Attribute.Component<'shared.list-item', true>;
    subtitle: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeCardFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_home_card_features';
  info: {
    displayName: 'CardFeatures';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_choose_sections';
  info: {
    description: '';
    displayName: 'ChooseSection';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    ItemsInfo: Schema.Attribute.Component<
      'shared.icon-and-title-and-description',
      true
    >;
    NumberInfo: Schema.Attribute.Component<'shared.card-number', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeFaqsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_faqs_sections';
  info: {
    displayName: 'FaqsSection';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    Faqs: Schema.Attribute.Component<'shared.faqs', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_header_sections';
  info: {
    displayName: 'HeaderSection';
  };
  attributes: {
    Boton: Schema.Attribute.Component<'menu.menu-button', true>;
    description: Schema.Attribute.Text;
    etiqueta: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    Titulo_1: Schema.Attribute.String;
    Titulo_2: Schema.Attribute.String;
  };
}

export interface ComponentHomeOurServicesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_home_our_services_sections';
  info: {
    displayName: 'OurServicesSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-info', true>;
    etiqueta: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentHomeOurTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_our_team_sections';
  info: {
    description: '';
    displayName: 'OurTeamSection';
  };
  attributes: {
    Team: Schema.Attribute.Component<'shared.card-team', true>;
  };
}

export interface ComponentHomeTestomoniosSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_home_testomonios_sections';
  info: {
    displayName: 'TestomoniosSection';
  };
  attributes: {
    CardTestominios: Schema.Attribute.Component<'shared.testimonicos', true>;
    etiqueta: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    sections: Schema.Attribute.Relation<'oneToMany', 'api::section.section'>;
    title: Schema.Attribute.String;
  };
}

export interface MenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    background: Schema.Attribute.String & Schema.Attribute.DefaultTo<'009ca6'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCardInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_infos';
  info: {
    description: '';
    displayName: 'CardInfo';
    icon: 'information';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files'>;
    titulo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCardNumber extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_numbers';
  info: {
    description: '';
    displayName: 'CardNumber';
  };
  attributes: {
    number: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedCardTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_teams';
  info: {
    description: '';
    displayName: 'CardTeam';
    icon: 'dashboard';
  };
  attributes: {
    img: Schema.Attribute.Media<'files' | 'images'>;
    job: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedFaqs extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface SharedIconAndTitleAndDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_and_title_and_descriptions';
  info: {
    description: '';
    displayName: 'Icon&Title&Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedInfoPorcentaje extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_porcentajes';
  info: {
    displayName: 'InfoPorcentaje';
  };
  attributes: {
    description: Schema.Attribute.Text;
    porcentaje: Schema.Attribute.BigInteger;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'listItem';
    icon: 'check';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedRedesSociales extends Struct.ComponentSchema {
  collectionName: 'components_shared_redes_sociales';
  info: {
    displayName: 'Redes Sociales';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedTestimonicos extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonicos';
  info: {
    displayName: 'Testimonicos';
    icon: 'discuss';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'files' | 'images'>;
    name: Schema.Attribute.String;
    services: Schema.Attribute.String;
  };
}

export interface SharedTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_and_descriptions';
  info: {
    displayName: 'Title&Description';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-about.hability-section': ComponentAboutHabilitySection;
      'component-about.kyp-section': ComponentAboutKypSection;
      'component-about.mision-and-vision': ComponentAboutMisionAndVision;
      'component-about.valores-section': ComponentAboutValoresSection;
      'component-contact.contact-section': ComponentContactContactSection;
      'component-home.about-section': ComponentHomeAboutSection;
      'component-home.card-features': ComponentHomeCardFeatures;
      'component-home.choose-section': ComponentHomeChooseSection;
      'component-home.faqs-section': ComponentHomeFaqsSection;
      'component-home.header-section': ComponentHomeHeaderSection;
      'component-home.our-services-section': ComponentHomeOurServicesSection;
      'component-home.our-team-section': ComponentHomeOurTeamSection;
      'component-home.testomonios-section': ComponentHomeTestomoniosSection;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'shared.card-info': SharedCardInfo;
      'shared.card-number': SharedCardNumber;
      'shared.card-team': SharedCardTeam;
      'shared.faqs': SharedFaqs;
      'shared.icon-and-title-and-description': SharedIconAndTitleAndDescription;
      'shared.info-porcentaje': SharedInfoPorcentaje;
      'shared.list-item': SharedListItem;
      'shared.redes-sociales': SharedRedesSociales;
      'shared.testimonicos': SharedTestimonicos;
      'shared.title-and-description': SharedTitleAndDescription;
    }
  }
}
