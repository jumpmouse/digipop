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
      id: 'I',
      naziv: 'Opšta ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'opsta-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          id: 'I_1',
          naziv: 'Demografija',
          opis: 'opis oblasti',
          link: 'demografija',
          URL_slike: '',
          programske_celine: [
            {
              id: 'I_1_1',
              naziv: 'Uvod',
              link: 'uvod',
              URL_slike: '',
              podceline: []
            },
            {
              id: 'I_1_2',
              naziv: 'Demografske tablice',
              link: 'demografske-tablice',
              URL_slike: '',
              podceline: []
            },
            {
              id: 'I_1_3',
              naziv: 'Mortalitet',
              link: 'mortalitet',
              URL_slike: '',
              podceline: [
                {
                  id: 'I_1_3_1',
                  naziv: 'Tipovi preživljavanja',
                  link: 'tipovi-prezivljavanja',
                  URL_slike: '',
                  podceline: []
                }
              ]
            },
            {
              id: 'I_1_4',
              naziv: 'Natalitet',
              link: 'natalitet',
              URL_slike: '',
              podceline: []
            },
            {
              id: 'I_1_5',
              naziv: 'Uzrasna struktura',
              link: 'uzrasna-struktura',
              URL_slike: '',
              podceline: [
                {
                  id: 'I_1_5_1',
                  naziv: 'Dostizanje stabilne uzrasne strukture',
                  link: 'dostizanje-stabilne-uzrasne-strukture',
                  URL_slike: '',
                  podceline: []
                }
              ]
            }
          ]
        },
        {
          id: 'I_2',
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'I_3',
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'I_4',
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        }
      ]
    },
    {
      id: 'II',
      naziv: 'Populaciona ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'populaciona-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          id: 'II_1',
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_2',
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_3',
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_4',
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
