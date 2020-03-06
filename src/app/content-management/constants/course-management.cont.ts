import {
  Predmet,
  Oblast,
  ProgramskaCelina,
  PredmetForEditing,
  OblastForEditing,
  ProgramskaCelinaForEditing
} from '@app/models/skripta.model';

export const EmptyCourse: Predmet = {
  id: '',
  naziv: 'Dodaj novi predmet',
  kratki_opis: '',
  opis: '',
  link: 'new-course',
  URL_slike: '',
  oblasti: []
};

export const EmptySection: Oblast = {
  id: '',
  naziv: 'Dodaj novu oblast',
  opis: '',
  link: 'new-section',
  URL_slike: '',
  programske_celine: []
};

export const EmtySubSection: ProgramskaCelina = {
  id: '',
  naziv: 'Dodaj novu sekciju',
  link: 'new-subsection',
  URL_slike: '',
  podceline: []
};

export const EmptyCourseForEditing: PredmetForEditing = {
  naziv: 'true',
  kratki_opis: '',
  opis: ''
};

export const EmptySectionForEditing: OblastForEditing = {
  naziv: 'true',
  opis: '',
  programske_celine: null
};

export const EmtySubSectionForEditing: ProgramskaCelinaForEditing = {
  naziv: 'true',
  tekst: '',
  podceline: []
};
