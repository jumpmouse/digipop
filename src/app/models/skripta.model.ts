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
  id: string;
  naziv: string;
  link: string;
  opis: string;
  kratki_opis: string;
  URL_slike?: string;
  oblasti: Oblast[];
}

export interface Oblast {
  id: string;
  naziv: string;
  opis: string;
  link: string;
  URL_slike?: string;
  programske_celine?: ProgramskaCelina[];
}

export interface ProgramskaCelina {
  id: string;
  naziv: string;
  link: string;
  tekst?: string;
  URL_slike?: string;
  podceline?: ProgramskaCelina[];
}

export interface PredmetForEditing {
  naziv: string;
  opis: string;
  kratki_opis: string;
  URL_slike?: string;
}

export interface OblastForEditing {
  naziv: string;
  opis: string;
  URL_slike?: string;
  programske_celine?: ProgramskaCelinaForEditing[];
}

export interface ProgramskaCelinaForEditing {
  naziv: string;
  tekst?: string;
  URL_slike?: string;
  podceline?: ProgramskaCelinaForEditing[];
}
