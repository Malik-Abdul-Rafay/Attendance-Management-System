import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const teamMembers = [
  {
    id: '1',
    name: 'Jane Hawkins',
    email: 'janehawkins@demo.com',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Brooklyn Simmons',
    email: 'brooklynsimmons@demo.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Leslie Alexander',
    email: 'lesliealexander@demo.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Ronald Richards',
    email: 'ronaldrichards@demo.com',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '5',
    name: 'Jenny Wilson',
    email: 'jennywilson@demo.com',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

export default function TeamMembers() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter team members based on search query
  const filteredTeamMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <TouchableOpacity onPress={() => handleOpenModal(item)}>
        <Icon name="ellipsis-vertical" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedMember(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Members</Text>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Team Members List */}
      <FlatList
        data={filteredTeamMembers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Member</Text>
      </TouchableOpacity>

      {/* Action Modal */}
      {selectedMember && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.modalAction}>
              <Icon name="call-outline" size={24} color="black" />
              <Text style={styles.modalActionText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalAction}>
              <Icon name="trash-outline" size={24} color="red" />
              <Text style={styles.modalActionText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeModal} onPress={handleCloseModal}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  modalAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  modalActionText: {
    marginLeft: 16,
    fontSize: 18,
  },
  closeModal: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  closeModalText: {
    color: '#007bff',
    fontSize: 18,
  },
});

