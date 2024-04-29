import { Key } from '@typings/keyboard.type';
import { Dimensions } from 'react-native';
import { KeyType } from './enums';

export const AlphabetKeys: Key[] = [
  {
    displayLabel: 'A',
    key: 'A',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'B',
    key: 'B',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'C',
    key: 'C',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'D',
    key: 'D',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'E',
    key: 'E',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'F',
    key: 'F',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'G',
    key: 'G',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'H',
    key: 'H',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'I',
    key: 'I',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'J',
    key: 'J',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'K',
    key: 'K',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'L',
    key: 'L',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'M',
    key: 'M',
    type: KeyType.CHAR,
  },

  {
    displayLabel: 'N',
    key: 'N',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'O',
    key: 'O',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'P',
    key: 'P',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'Q',
    key: 'Q',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'R',
    key: 'R',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'S',
    key: 'S',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'T',
    key: 'T',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'U',
    key: 'U',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'V',
    key: 'V',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'W',
    key: 'W',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'X',
    key: 'X',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'Y',
    key: 'Y',
    type: KeyType.CHAR,
  },
  {
    displayLabel: 'Z',
    key: 'Z',
    type: KeyType.CHAR,
  },
];

export const NumericKeys: Key[] = [
  {
    displayLabel: '1',
    key: '1',
    type: KeyType.NUM,
  },
  {
    displayLabel: '2',
    key: '2',
    type: KeyType.NUM,
  },
  {
    displayLabel: '3',
    key: '3',
    type: KeyType.NUM,
  },
  {
    displayLabel: '4',
    key: '4',
    type: KeyType.NUM,
  },
  {
    displayLabel: '5',
    key: '5',
    type: KeyType.NUM,
  },
  {
    displayLabel: '6',
    key: '6',
    type: KeyType.NUM,
  },
  {
    displayLabel: '7',
    key: '7',
    type: KeyType.NUM,
  },
  {
    displayLabel: '8',
    key: '8',
    type: KeyType.NUM,
  },
  {
    displayLabel: '9',
    key: '9',
    type: KeyType.NUM,
  },
  {
    displayLabel: '0',
    key: '0',
    type: KeyType.NUM,
  },
];

export const SpecialCharacters: Key[] = [
  {
    displayLabel: 'Toggle',
    key: 'toggle',
    type: KeyType.SPESCHAR,
  },
  {
    displayLabel: 'Delete',
    key: 'del',
    type: KeyType.SPESCHAR,
  },
  {
    displayLabel: 'Caps',
    key: 'caps',
    type: KeyType.SPESCHAR,
  },
];

export const deviceWidth = Dimensions.get('window').width;
