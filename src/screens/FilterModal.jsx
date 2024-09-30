import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const FilterModal = () => {
  const [approved, setApproved] = useState(false);
  const [unapproved, setUnapproved] = useState(false);
  const [pending, setPending] = useState(false);

  const [sickLeave, setSickLeave] = useState(false);
  const [plannedLeave, setPlannedLeave] = useState(false);
  const [holiday, setHoliday] = useState(false);

  const [visible, setVisible] = useState(true);
  const [onClose, setOnClose] = useState(false);

  const resetFilters = () => {
    setApproved(false);
    setUnapproved(false);
    setPending(false);
    setSickLeave(false);
    setPlannedLeave(false);
    setHoliday(false);
  };

  // Custom checkbox component
  const CustomCheckbox = ({ label, isChecked, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
        </View>
        <Text style={styles.checkboxLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          <View style={styles.dragIndicator} />
          <View style={styles.titleCloseContainer}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <Ionicons name="close" size={22} color="#FF7F74" />
          </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Status</Text>
          <CustomCheckbox
            label="Approved"
            isChecked={approved}
            onPress={() => setApproved(!approved)}
          />
          <CustomCheckbox
            label="Unapproved"
            isChecked={unapproved}
            onPress={() => setUnapproved(!unapproved)}
          />
          <CustomCheckbox
            label="Pending"
            isChecked={pending}
            onPress={() => setPending(!pending)}
          />

          <Text style={styles.subtitle}>Leave Type</Text>
          <CustomCheckbox
            label="Sick Leave"
            isChecked={sickLeave}
            onPress={() => setSickLeave(!sickLeave)}
          />
          <CustomCheckbox
            label="Planned Leave"
            isChecked={plannedLeave}
            onPress={() => setPlannedLeave(!plannedLeave)}
          />
          <CustomCheckbox
            label="Holiday"
            isChecked={holiday}
            onPress={() => setHoliday(!holiday)}
          />

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={resetFilters} style={[styles.button, styles.resetButton]}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.applyButton]}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  titleCloseContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 20,
  },
  closeIcon: {
    borderWidth:2,
    borderRadius: 20,
    borderColor:'#FF7F74',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Sen-Bold',
    
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    fontFamily: 'Sen-Bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderWidth: 2,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 20
  },
  checked: {
    backgroundColor: '#007bff',
  },
  checkboxLabel: {
    fontSize: 17,
    fontFamily: 'Sen-Medium',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: '#FF7F74',
  },
  applyButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Sen-Bold',
    color: 'white',
    fontSize:16
  },
});

export default FilterModal;
