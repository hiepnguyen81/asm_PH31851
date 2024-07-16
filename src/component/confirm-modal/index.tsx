import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../app-button';
import {S, TS, color, ms} from '../../themes';

interface NotificationAppProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  titleModal: string;
  cancleButton: string;
  confirmButton: string;
  onPressCancel: () => void;
  onPressConfirm: () => void;
}

const ConfirmModal: React.FC<NotificationAppProps> = ({
  titleModal,
  cancleButton,
  confirmButton,
  onPressCancel,
  onPressConfirm,
}) => (
  <View style={styles.modalContainer}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>{titleModal}</Text>
      <View style={styles.modalButtonContainer}>
        <AppButton
          title={cancleButton}
          onPress={onPressCancel}
          customStyleButton={styles.button}
          customStyleText={styles.buttonText}
        />
        <AppButton
          title={confirmButton}
          onPress={onPressConfirm}
          customStyleButton={{
            ...styles.button,
            borderWidth: ms(0.3),
            backgroundColor: color.black,
          }}
          customStyleText={{...styles.buttonText, color: color.black}}
        />
      </View>
    </View>
  </View>
);

export default ConfirmModal;

const styles = StyleSheet.create({
  modalContainer: {
    ...S.centerAll,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    marginHorizontal: ms(20),
    backgroundColor: color.black,
    borderRadius: ms(20),
    padding: ms(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: ms(15),
    textAlign: 'center',
    ...TS.textSmRegular,
    fontSize: ms(20),
  },
  modalButtonContainer: {
    ...S.flexColumn,
    rowGap: ms(10),
  },
  button: {
    backgroundColor: color.primary[500],
    borderRadius: ms(20),
    padding: ms(10),
    elevation: 2,
    marginHorizontal: ms(5),
  },
  buttonCancel: {
    backgroundColor: color.primary[500],
    borderRadius: ms(20),
    padding: ms(10),
    elevation: 2,
    marginHorizontal: ms(5),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
