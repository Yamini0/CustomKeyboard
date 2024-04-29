import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import Keyboard from '@components/Keyboard';
import { TextWithCaret } from '@components/TextWithCaret';

import { toggleCapsLock } from '@redux/slices/capsLockSlice';
import { addText, deleteText } from '@redux/slices/displayAreaSlice';
import { toggleKeyBoardMode } from '@redux/slices/keyboardMode';
import { AppDispatch, RootState } from '@typings/redux.type';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { caretPosition } = useSelector((state: RootState) => state.displayArea);

  const handleKeyPress = (key: string) => {
    if (key === 'DEL') {
      dispatch(deleteText());
      return;
    }
    dispatch(addText({ text: key, caretPosition }));
  };

  const handleToggleCapsLock = useCallback(() => {
    dispatch(toggleCapsLock());
  }, []);

  const handleToggleMode = useCallback(() => {
    dispatch(toggleKeyBoardMode());
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.wrapper}>
      <Text style={styles.heading}>React Native Keyboard Challenge</Text>
      <View style={styles.textWrapper}>
        <TextWithCaret />
      </View>
      <View style={[styles.keyboardContainer, styles.shadow]}>
        <Keyboard onKeyPress={handleKeyPress} onToggleMode={handleToggleMode} onToggleCapsLock={handleToggleCapsLock} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 42,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  keyboardContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 2,
  },
});
