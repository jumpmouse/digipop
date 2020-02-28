export interface ContentMetaData {
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
}
export interface Skripta {
  naslov: string;
  podnaslov: string;
  opis_ukratko: string;
  opis: string;
  predmeti?: Predmet[];
}

export interface Predmet {
  naziv: string;
  link: string;
  opis: string;
  kratki_opis: string;
  URL_slike?: string;
  oblasti: Oblast[];
}

export interface Oblast {
  naziv: string;
  opis: string;
  link: string;
  URL_slike?: string;
  programske_celine: ProgramskaCelina[];
}

export interface ProgramskaCelina {
  naziv: string;
  link: string;
  tekst: string;
  URL_slike?: string;
  podceline?: ProgramskaCelina[];
}
