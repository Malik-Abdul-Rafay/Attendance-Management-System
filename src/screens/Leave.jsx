import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const pastLeavesData = [
  {
    id: '1',
    date: 'Apr 15, 2023 - Apr 18, 2023',
    applyDays: '3 Days',
    leaveBalance: 16,
    approvedBy: 'Martin Deo',
    status: 'Rejected',
  },
  {
    id: '2',
    date: 'Mar 10, 2023 - Mar 12, 2023',
    applyDays: '2 Days',
    leaveBalance: 19,
    approvedBy: 'Martin Deo',
    status: 'Approved',
  },
  {
    id: '3',
    date: 'Mar 10, 2023 - Mar 12, 2023',
    applyDays: '2 Days',
    leaveBalance: 19,
    approvedBy: 'Martin Deo',
    status: 'Pending',
  },
];

const upcomingLeavesData = [
  {
    id: '1',
    date: 'Apr 15, 2023 - Apr 18, 2023',
    applyDays: '3 Days',
    leaveBalance: 16,
    approvedBy: 'Martin Deo',
    status: 'Rejected',
  },
  {
    id: '2',
    date: 'Mar 10, 2023 - Mar 12, 2023',
    applyDays: '2 Days',
    leaveBalance: 19,
    approvedBy: 'Martin Deo',
    status: 'Approved',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const renderUpcomingLeaveItem = ({ item }) => (
    <View style={styles.pastLeaveCard}>
      <Text style={styles.date}>Date: {item.date}</Text>
      <Text style={styles.applyDays}>Apply Days: {item.applyDays}</Text>
      <Text style={styles.leaveBalance}>Leave Balance: {item.leaveBalance}</Text>
      <Text style={styles.approvedBy}>Approved By: {item.approvedBy}</Text>
      <Text style={[styles.status, item.status === 'Approved' ? styles.approved : styles.rejected]}>
        {item.status}
      </Text>
    </View>
  );

  // Past Leaves Item
  const renderPastLeaveItem = ({ item }) => (
    <View style={styles.pastLeaveCard}>
      <Text style={styles.date}>Date: {item.date}</Text>
      <Text style={styles.applyDays}>Apply Days: {item.applyDays}</Text>
      <Text style={styles.leaveBalance}>Leave Balance: {item.leaveBalance}</Text>
      <Text style={styles.approvedBy}>Approved By: {item.approvedBy}</Text>
      <Text style={[styles.status, item.status === 'Approved' ? styles.approved : styles.rejected]}>
        {item.status}
      </Text>
    </View>
  );


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Leaves</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <MaterialIcons name="settings" size={24} color="black" />
        </View>
      </View>

      {/* Leave Summary Cards */}
      <View style={styles.statusCardsContainer}>
        <View style={[styles.statusCard, styles.blueBorder]}>
          <View style={styles.statusTitle}><Text style={styles.statusTitleText}>Leave</Text><Text style={styles.statusTitleText}>Balance</Text></View>
          <Text style={[styles.statusNumber,style={color:'blue'}]}>20</Text>
        </View>
        <View style={[styles.statusCard, styles.greenBorder]}>
          <View style={styles.statusTitle}><Text style={styles.statusTitleText}>Leave</Text><Text style={styles.statusTitleText}>Approved</Text></View>
          <Text style={[styles.statusNumber,style={color:'green'}]}>02</Text>
        </View>
        <View style={[styles.statusCard, styles.aquaBorder]}>
          <View style={styles.statusTitle}><Text style={styles.statusTitleText}>Leave</Text><Text style={styles.statusTitleText}>Pending</Text></View>
          <Text style={[styles.statusNumber,style={color:'#17a2b8'}]}>04</Text>
        </View>
        <View style={[styles.statusCard, styles.redBorder]}>
          <View style={styles.statusTitle}><Text style={styles.statusTitleText}>Leave</Text><Text style={styles.statusTitleText}>Cancelled</Text></View>
          <Text style={[styles.statusNumber,style={color:'red'}]}>10</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Upcoming')} style={[styles.inactiveTab ,activeTab === 'Upcoming' && styles.activeTab]}>
          <Text style={activeTab === 'Upcoming' ? styles.activeTabText : styles.inactiveTabText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Past')} style={[styles.inactiveTab ,activeTab === 'Past' && styles.activeTab]}>
          <Text style={activeTab === 'Past' ? styles.activeTabText : styles.inactiveTabText}>Past</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional rendering of tabs */}
      {activeTab === 'Upcoming' && (
        <FlatList
          data={upcomingLeavesData}
          renderItem={renderUpcomingLeaveItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {activeTab === 'Past' && (
        <FlatList
          data={pastLeavesData}
          renderItem={renderPastLeaveItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 50,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Sen-Bold', 
    },
    headerIcons: {
      flexDirection: 'row',
      gap: 16,
    },
    statusCardsContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        paddingHorizontal:20
    },
    statusCard: {
      borderRadius: 8,
      margin: 4,
      backgroundColor: '#f8f9fa',
      width: '47%',
      padding: 6
    },
    blueBorder: {
      borderColor: '#007bff',
      borderWidth: 1,
    },
    greenBorder: {
      borderColor: '#28a745',
      borderWidth: 1,
    },
    aquaBorder: {
      borderColor: '#17a2b8',
      borderWidth: 1,
    },
    redBorder: {
      borderColor: '#dc3545',
      borderWidth: 1,
    },
    statusTitle: {
        flexDirection: 'column',
        marginBottom: 8,
    },
    statusTitleText:{
        fontSize: 18,
        fontFamily: 'Sen-SemiBold', 
        color: 'black',
    },
    statusNumber: {
      fontSize: 24,
      fontFamily: 'Sen-Bold', 
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 15,
      borderRadius: 8,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    activeTab: {
      backgroundColor: '#007bff',
    },
    inactiveTab: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12
    },
    activeTabText: {
      color: '#fff',
      fontFamily: 'Sen-SemiBold', 
      fontSize: 15.5
    },
    inactiveTabText: {
      color: '#6c757d',
      fontFamily: 'Sen-SemiBold', 
      fontSize: 15.5

    },
    leaveCard: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#dee2e6',
    },
    name: {
      fontSize: 16,
      marginBottom: 8,
      fontFamily: 'Sen-Bold', 
    },
    date: {
      fontSize: 14,
      color: '#6c757d',
      marginBottom: 8,
      fontFamily: 'Sen-Regular', // Using Sen-Regular font
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rejectBtn: {
      padding: 8,
      backgroundColor: '#dc3545',
      borderRadius: 8,
    },
    rejectText: {
      color: '#fff',
      fontFamily: 'Sen-Medium', 
    },
    acceptBtn: {
      padding: 8,
      backgroundColor: '#28a745',
      borderRadius: 8,
    },
    acceptText: {
      color: '#fff',
      fontFamily: 'Sen-Medium', 
    },
    listContainer: {
      paddingBottom: 100,
    },
    pastLeaveCard: {
      backgroundColor: '#f8f9fa',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    applyDays: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-Regular', // Using Sen-Regular font
    },
    leaveBalance: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-Regular', // Using Sen-Regular font
    },
    approvedBy: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-Regular', // Using Sen-Regular font
    },
    status: {
      fontSize: 14,
      marginTop: 8,
      fontFamily: 'Sen-Medium', 
    },
    approved: {
      color: '#28a745',
    },
    rejected: {
      color: '#dc3545',
    },
    approvedText: {
      color: '#28a745',
      fontFamily: 'Sen-SemiBold', 
    },
  });
  