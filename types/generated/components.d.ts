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
    description: '';
    displayName: 'ContactSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    img_contact_form: Schema.Attribute.Media<'images' | 'files'>;
    InfoContact: Schema.Attribute.Component<
      'shared.icon-and-title-and-description',
      true
    >;
    titulo: Schema.Attribute.String;
  };
}

export interface ComponentContactSedeSection extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_sede_sections';
  info: {
    description: '';
    displayName: 'SedeSection';
  };
  attributes: {
    Maps: Schema.Attribute.Component<'shared.maps', true>;
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
    description: '';
    displayName: 'CardFeatures';
  };
  attributes: {
    Card: Schema.Attribute.Component<
      'shared.icon-and-title-and-description',
      true
    >;
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

export interface ComponentServiceDescriptionService
  extends Struct.ComponentSchema {
  collectionName: 'components_component_service_description_services';
  info: {
    displayName: 'DescriptionService';
  };
  attributes: {
    description: Schema.Attribute.Text;
    etiqueta: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shared.list-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentServiceHeaderService extends Struct.ComponentSchema {
  collectionName: 'components_component_service_header_services';
  info: {
    displayName: 'HeaderService';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentServiceProcessService extends Struct.ComponentSchema {
  collectionName: 'components_component_service_process_services';
  info: {
    displayName: 'ProcessService';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-process', true>;
    etiqueta: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentServiceProductsService
  extends Struct.ComponentSchema {
  collectionName: 'components_component_service_products_services';
  info: {
    description: '';
    displayName: 'ProductsService';
  };
  attributes: {
    ProductServiceCard: Schema.Attribute.Component<
      'shared.card-product-service',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentServiceSubscripsService
  extends Struct.ComponentSchema {
  collectionName: 'components_component_service_subscrips_services';
  info: {
    displayName: 'SubscripsService';
  };
  attributes: {
    Button: Schema.Attribute.Component<'menu.menu-button', false>;
    subtitle: Schema.Attribute.Text;
    title_1: Schema.Attribute.String;
    title_2: Schema.Attribute.String;
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
    icon: Schema.Attribute.Media<'images' | 'files'>;
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

export interface SharedCardProcess extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_processes';
  info: {
    displayName: 'CardProcess';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files'>;
    numberprocess: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardProductService extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_product_services';
  info: {
    description: '';
    displayName: 'CardProductService';
    icon: 'bell';
  };
  attributes: {
    Button: Schema.Attribute.Component<'menu.menu-button', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    img: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedMaps extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    description: '';
    displayName: 'Maps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    direccion: Schema.Attribute.Text;
    link_iframe_maps: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    og_description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    og_type: Schema.Attribute.String;
    og_url: Schema.Attribute.String;
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
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
      'component-contact.sede-section': ComponentContactSedeSection;
      'component-home.about-section': ComponentHomeAboutSection;
      'component-home.card-features': ComponentHomeCardFeatures;
      'component-home.choose-section': ComponentHomeChooseSection;
      'component-home.faqs-section': ComponentHomeFaqsSection;
      'component-home.header-section': ComponentHomeHeaderSection;
      'component-home.our-services-section': ComponentHomeOurServicesSection;
      'component-home.our-team-section': ComponentHomeOurTeamSection;
      'component-home.testomonios-section': ComponentHomeTestomoniosSection;
      'component-service.description-service': ComponentServiceDescriptionService;
      'component-service.header-service': ComponentServiceHeaderService;
      'component-service.process-service': ComponentServiceProcessService;
      'component-service.products-service': ComponentServiceProductsService;
      'component-service.subscrips-service': ComponentServiceSubscripsService;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'shared.card-info': SharedCardInfo;
      'shared.card-number': SharedCardNumber;
      'shared.card-process': SharedCardProcess;
      'shared.card-product-service': SharedCardProductService;
      'shared.card-team': SharedCardTeam;
      'shared.faqs': SharedFaqs;
      'shared.icon-and-title-and-description': SharedIconAndTitleAndDescription;
      'shared.info-porcentaje': SharedInfoPorcentaje;
      'shared.list-item': SharedListItem;
      'shared.maps': SharedMaps;
      'shared.open-graph': SharedOpenGraph;
      'shared.redes-sociales': SharedRedesSociales;
      'shared.seo': SharedSeo;
      'shared.testimonicos': SharedTestimonicos;
      'shared.title-and-description': SharedTitleAndDescription;
    }
  }
}
