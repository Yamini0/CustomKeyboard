import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { AlphabetKeys, NumericKeys, SpecialCharacters, deviceWidth } from '@utils/contants';
import { Key, KeyboardProps } from '@typings/keyboard.type';
import { KeyBoardType, KeyType } from '@utils/enums';
import { KeyboardKey } from './KeyboardKey';
import { RootState } from '@typings/redux.type';

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, onToggleMode, onToggleCapsLock }) => {
  const keyBoardModes = useSelector((state: RootState) => state.keyBoardMode.keyBoardMode);
  const capsLockEnabled = useSelector((state: RootState) => state.capsLock.capsLockEnabled);

  const isAlpabeticalKeyboard = keyBoardModes === KeyBoardType.ALPHABETICAL;

  const handleKeyPress = (key: Key) => () => {
    if (key.type === KeyType.SPESCHAR && key.key === 'toggle') {
      onToggleMode();
      return;
    }

    if (key.type === KeyType.SPESCHAR && key.key === 'del') {
      onKeyPress('DEL');
      return;
    }

    if (key.type === KeyType.SPESCHAR && key.key === 'caps') {
      onToggleCapsLock();
      return;
    }

    onKeyPress(capsLockEnabled ? key.displayLabel : key.displayLabel.toLowerCase());
  };

  const renderKeys = (keys: Key[]) => {
    return <KeyboardKey keyData={keys} handleKeyPress={handleKeyPress} />;
  };

  return (
    <View style={styles.container}>
      {isAlpabeticalKeyboard ? (
        <View style={styles.row}>{renderKeys(AlphabetKeys)}</View>
      ) : (
        <View style={styles.row}>{renderKeys(NumericKeys)}</View>
      )}
      <View style={[styles.footerSpecialKey, { left: isAlpabeticalKeyboard ? deviceWidth / 4.2 : deviceWidth / 3 }]}>
        <View style={styles.row}>
          {renderKeys(!isAlpabeticalKeyboard ? [...SpecialCharacters.slice(0, 2)] : SpecialCharacters)}
        </View>
      </View>
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  specialKeyText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerSpecialKey: {
    flexDirection: 'row',
    marginTop: 18,
  },
});
