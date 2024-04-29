import { KeyType } from '@utils/enums';

export interface Key {
  displayLabel: string;
  key: string;
  type: KeyType;
}
export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onToggleMode: () => void;
  onToggleCapsLock: () => void;
}

export interface KeyProps {
  keyData: Key[];
  handleKeyPress: (key: Key) => () => void;
}
