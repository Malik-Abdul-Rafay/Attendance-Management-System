import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
    const attendanceData = [
        {
            icon: "log-in",
            color: "#00C853",
            label: "Check In",
            time: "10:20 am",
            subText: "On Time",
        },
        {
            icon: "log-out",
            color: "#d32f2f",
            label: "Check Out",
            time: "07:00 pm",
            subText: "Go Home",
        },
        {
            icon: "coffee",
            color: "#F57C00",
            label: "Break Time",
            time: "00:30 min",
            subText: "Avg Time 30 min",
        },
        {
            icon: "calendar",
            color: "#1976D2",
            label: "Total Days",
            time: "28",
            subText: "Working Days",
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>Michael Mitc</Text>
                        <Text style={styles.profileRole}>Lead UI/UX Designer</Text>
                    </View>
                </View>
                <Icon name="bell" size={24} color="#000" style={styles.notificationIcon} />
            </View>

            {/* Date Selector Row */}
            <ScrollView contentContainerStyle={styles.dateSelector} horizontal>
                {['06', '07', '08', '09', '10'].map((day, index) => (
                    <View key={index} style={index === 3 ? styles.selectedDate : styles.date}>
                        <Text style={styles.dateDay}>{['Thu', 'Fri', 'Sat', 'Sun', 'Mon'][index]}</Text>
                        <Text style={styles.dateNumber}>{day}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Attendance Section */}
            <View style={styles.attendanceSection}></View>
            <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Today Attendance</Text>
                </View>
            <View style={styles.attendanceSectionitem}>
                {attendanceData.map((item, index) => (
                    <View key={index} style={styles.attendanceCard}>
                        <View style={styles.iconLabelContainer}>
                            <Icon name={item.icon} size={22} color={item.color} style={styles.iconAtt} />
                            <Text style={styles.cardLabel}>{item.label}</Text>
                        </View>
                        <Text style={styles.attendanceTime}>{item.time}</Text>
                        <Text style={styles.attendanceSubText}>{item.subText}</Text>
                    </View>
                ))}
            </View>

            {/* Activity Log */}
            <View style={styles.activityLog}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Activity</Text>
                </View>

                <View style={styles.activityItem}>
                    <Icon name="log-in" size={20} color="#00C853" style={styles.iconact} />
                    <View style={styles.subTextContainer}>
                    <View>
                        <Text style={styles.activityText}>Check In</Text>
                        <Text style={styles.activitySubText}>April 17, 2023</Text>
                    </View>
                    <View>
                        <Text style={styles.activityText}>10:00 am</Text>
                        <Text style={styles.activitySubText}>On Time</Text>
                    </View>
                    </View>
                </View>
                <View style={styles.activityItem}>
                    <Icon name="log-out" size={20} color="#d32f2f" style={styles.iconact}/>
                    <View style={styles.subTextContainer}>
                    <View>
                        <Text style={styles.activityText}>Check Out
                        </Text>
                        <Text style={styles.activitySubText}>April 17, 2023</Text>
                    </View>
                    <View>
                        <Text style={styles.activityText}>10:00 pm
                        </Text>
                        <Text style={styles.activitySubText}>On Time</Text>
                    </View>
                    </View>
                </View>


            </View>

            {/* Swipe to Check In Button */}
            <TouchableOpacity style={styles.swipeButton}>
                <Icon name="arrow-right" size={24} color="#2196F3"  style={styles.arrowbtt}/>
                <Text style={styles.swipeButtonText}>Swipe to Check In</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingTop: 50,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'Sen-Bold', 
    },
    profileRole: {
        fontSize: 14,
        color: '#8E8E8E',
        fontFamily: 'Sen-Regular', 
    },
    notificationIcon: {
        marginLeft: 'auto',
    },
    dateSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        gap: 10,
    },
    date: {
        alignItems: 'center',
        paddingVertical: 10,
        height: 70,
        width: 70,
        borderRadius: 10,
    },
    selectedDate: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0F7FA',
        borderRadius: 10,
        height: 70,
        width: 70,
    },
    dateDay: {
        fontSize: 16,
        color: '#8E8E8E',
        fontFamily: 'Sen-Regular', 
    },
    dateNumber: {
        fontSize: 18,
        fontFamily: 'Sen-Bold', 
    },
    attendanceSection:{
        marginTop: 20
    },
    attendanceSectionitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        flexWrap: 'wrap',
    },
    attendanceCard: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '47%',
        marginBottom: 20,
    },
    iconLabelContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        marginBottom:6
    },
    iconAtt: {
        backgroundColor: '#F5F5F5',
        padding: 4,
        borderRadius: 6,
    },
    cardLabel: {
        fontSize: 15,
        color: '#8E8E8E',
        marginBottom: 5,
        fontFamily: 'Sen-SemiBold', 
    },
    attendanceTime: {
        fontSize: 20,
        fontFamily: 'Sen-Bold', 
    },
    attendanceSubText: {
        fontSize: 13,
        color: '#8E8E8E',
        marginTop: 5,
        fontFamily: 'Sen-Medium', 
    },
    activityLog: {
        marginTop: 10
    },
    sectionHeader: {
        marginHorizontal: 20,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 19,
        fontFamily: 'Sen-Bold', 
    },

    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor:'#fff',
        marginHorizontal: 20,
        borderRadius: 10,
        padding:15
    },
    iconact:{
        backgroundColor: '#F5F5F5',
        padding: 4,
        borderRadius: 6,
        marginRight: 12,
    },
    subTextContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        flex:1
    },
    activityText: {
        fontSize: 17,
        fontFamily: 'Sen-SemiBold', 
    },
    activitySubText: {
        fontSize: 14,
        color: '#8E8E8E',
        fontFamily: 'Sen-Medium', 
    },
    swipeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        marginHorizontal: 20,
        flexDirection: 'row',
        gap: 15
    },
    swipeButtonText: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Sen-Bold', 
    },
    arrowbtt:{
        backgroundColor: '#fff',
        borderRadius:6,
        padding:5
    },
});


export default HomeScreen;
