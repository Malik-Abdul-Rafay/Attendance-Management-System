import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
import Icon1 from 'react-native-vector-icons/Entypo';

import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';

const ApplyLeaveScreen = () => {
  const [leaveType, setLeaveType] = useState('Medical Leave');
  const [contactNumber, setContactNumber] = useState('(603) 555-0123');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [reason, setReason] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const applyLeave = () => {
    setShowSuccessModal(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.chevronIconContainer}>
          <Icon1 name="chevron-small-left" size={30} color="#000" />
        </View>

        <Text style={styles.title}>Apply Leave</Text>
      </View>

      {/* Title Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Sick Leave" value="Sick Leave" />
      </View>

      {/* Leave Type Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Leave Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={leaveType}
            onValueChange={(itemValue) => setLeaveType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Medical Leave" value="Medical Leave" />
            <Picker.Item label="Casual Leave" value="Casual Leave" />
            <Picker.Item label="Maternity Leave" value="Maternity Leave" />
            <Picker.Item label="Paternity Leave" value="Paternity Leave" />
            <Picker.Item label="Sick Leave" value="Sick Leave" />
          </Picker>
        </View>
      </View>

      {/* Contact Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact Number</Text>
        <TextInput style={styles.input} value={contactNumber} />
      </View>

      {/* Start Date Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Start Date</Text>
        <TouchableOpacity style={styles.input} onPress={() => setShowStartDatePicker(true)}>
          <Text>{startDate.toDateString()}</Text>
          <FontAwesome name="calendar" size={22} color="black" />
        </TouchableOpacity>
        {showStartDatePicker && (
          <DateTimePicker value={startDate} mode="date" display="default" onChange={onChangeStartDate} />
        )}
      </View>

      {/* End Date Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>End Date</Text>
        <TouchableOpacity style={styles.input} onPress={() => setShowEndDatePicker(true)}>
          <Text>{endDate.toDateString()}</Text>
          <FontAwesome name="calendar" size={22} color="black" />
        </TouchableOpacity>
        {showEndDatePicker && (
          <DateTimePicker value={endDate} mode="date" display="default" onChange={onChangeEndDate} />
        )}
      </View>

      {/* Reason for Leave Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reason for Leave</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline={true}
          placeholder="I need to take a medical leave."
          value={reason}
          onChangeText={setReason}
        />
      </View>

      {/* Apply Leave Button */}
      <TouchableOpacity style={styles.button} onPress={applyLeave}>
        <Text style={styles.buttonText}>Apply Leave</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal visible={showSuccessModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.successIcon}>
              <Text style={styles.checkmark}>✔</Text>
            </View>
            <Text style={styles.modalTitle}>Leave Applied Successfully</Text>
            <Text style={styles.modalSubTitle}>Your leave has been applied successfully.</Text>
            <TouchableOpacity style={styles.button} onPress={() => setShowSuccessModal(false)}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingBottom: 20,
  },
  chevronIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16.5,
    color: '#555',
    marginBottom: 8,
    fontFamily: 'Sen-SemiBold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Sen-Regular',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
    fontFamily: 'Sen-Regular',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sen-SemiBold',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#333',
    fontFamily: 'Sen-Regular',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  successIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Sen-Regular',
  },
  modalTitle: {
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'Sen-Bold',
  },
  modalSubTitle: {
    fontSize: 15,
    fontFamily: 'Sen-Medium',
    textAlign: 'center'
  },
});


export default ApplyLeaveScreen;
