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
    <View style={styles.dateStatusContainer}>
      <View>
      <Text style={styles.date1}>Date:</Text>
      <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={[styles.status, item.status === 'Approved' ? styles.approved : styles.rejected]}>
        {item.status}
      </Text>
      </View>
      <View style={styles.text1text2Container}>
      <View>
      <Text style={styles.text1}>Apply Days: </Text>
      <Text style={styles.text2}>{item.applyDays}</Text>
      </View>
      <View>
      <Text style={styles.text1}>Leave Balance: </Text>
      <Text style={styles.text2}>{item.leaveBalance}</Text>
      </View>
      <View>
      <Text style={styles.text1}>Approved By: </Text>
      <Text style={styles.text2}>{item.approvedBy}</Text>
      </View>
      </View>
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
      justifyContent: 'center',
      marginTop: 20,
      borderRadius: 8,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      borderBottomColor: '#6c757d',
      borderBottomWidth: 1,
    },
    
    
    activeTab: {
      borderBottomWidth:2,
      paddingBottom: 12,
    },
    inactiveTab: {
      width:'50%'
    },
    activeTabText: {
      fontFamily: 'Sen-SemiBold', 
      fontSize: 18,
      textAlign:'center'
      
    },
    inactiveTabText: {
      color: '#6c757d',
      fontFamily: 'Sen-SemiBold', 
      fontSize: 18,
      textAlign:'center'

    },
    pastLeaveCard: {
      backgroundColor: '#F3F3F3',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      marginHorizontal:20
    },
    dateStatusContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between'
        },
    date: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Sen-Bold', 
      marginTop:2,
    },
    date1: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-SemiBold', 
    },
    text1text2Container:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    text1: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-Regular', 
    },
    text2:{
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sen-Regular', 
    },
    status: {
      fontSize: 14,
      fontFamily: 'Sen-SemiBold',
      padding:5,
      borderRadius:90,
    },
    approved: {
      color: '#28a745',
      backgroundColor: '#f5fcfb'
    },
    rejected: {
      color: '#dc3545',
      backgroundColor: '#fff6f5'
    },
    approvedText: {
      color: '#28a745',
      fontFamily: 'Sen-SemiBold', 
    },
  });
  