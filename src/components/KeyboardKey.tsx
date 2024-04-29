import { KeyProps } from '@typings/keyboard.type';
import { RootState } from '@typings/redux.type';
import { KeyType } from '@utils/enums';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const KeyboardKey = ({ keyData, handleKeyPress }: KeyProps) => {
  const capsLockEnabled = useSelector((state: RootState) => state.capsLock.capsLockEnabled);

  return keyData.map((key, index) => (
    <TouchableOpacity
      activeOpacity={0.3}
      key={index}
      style={[styles.key, key.type === KeyType.SPESCHAR && styles.specialKey]}
      onPress={handleKeyPress(key)}>
      <Text style={styles.keyText}>{capsLockEnabled ? key.displayLabel : key.displayLabel.toLowerCase()}</Text>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  key: {
    padding: 4,
    margin: 5,
    height: 50,
    width: 50,
    borderWidth: 0.8,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  specialKey: {
    backgroundColor: '#DDD',
    height: 50,
    width: 63,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
