// tslint:disable: max-line-length
import { Skripta } from '@app/models/skripta.model';

export const SadrzajSripte: Skripta = {
  naslov: 'E-SKRIPTA',
  podnaslov: 'iz predmeta Opšta ekologija životinja i Populaciona ekologija životinja',
  opis_ukratko:
    'Kratki opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  opis:
    'Opširan opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  predmeti: [
    {
      naziv: 'Opšta ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'opsta-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          naziv: 'Demografija',
          opis: 'opis oblasti',
          link: 'demografija',
          URL_slike: '',
          programske_celine: [
            {
              naziv: 'Uvod',
              link: 'uvod',
              URL_slike: '',
              tekst: 'tekst uvoda',
              podceline: []
            },
            {
              naziv: 'Demografske tablice',
              link: 'demografske-tablice',
              URL_slike: '',
              tekst: 'tekst demografskih tablica',
              podceline: []
            },
            {
              naziv: 'Mortalitet',
              link: 'mortalitet',
              URL_slike: '',
              tekst: 'tekst programske celine',
              podceline: [
                {
                  naziv: 'Tipovi preživljavanja',
                  link: 'tipovi-prezivljavanja',
                  URL_slike: '',
                  tekst: 'tekst programske celine',
                  podceline: []
                }
              ]
            },
            {
              naziv: 'Natalitet',
              link: 'natalitet',
              URL_slike: '',
              tekst: 'tekst programske celine',
              podceline: []
            },
            {
              naziv: 'Uzrasna struktura',
              link: 'uzrasna-struktura',
              URL_slike: '',
              tekst: 'tekst programske celine',
              podceline: [
                {
                  naziv: 'Dostizanje stabilne uzrasne strukture',
                  link: 'dostizanje-stabilne-uzrasne-strukture',
                  URL_slike: '',
                  tekst: 'tekst programske celine',
                  podceline: []
                }
              ]
            }
          ]
        },
        {
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        }
      ]
    },
    {
      naziv: 'Populaciona ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'populaciona-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        },
        {
          naziv: 'Oblast 4',
          opis: 'opis oblasti',
          link: 'oblast-4',
          URL_slike: '',
          programske_celine: []
        }
      ]
    }
  ]
};
