import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailRow = ({ label, value }: { label: string, value: string | string[] | undefined }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function ResultScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const isSuccess = params.status === 'valid';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isSuccess ? '#F0F4F8' : '#FDEBEB' }]}>
      <View style={styles.content}>
        <FontAwesome 
          name={isSuccess ? 'check-circle' : 'times-circle'} 
          size={80} 
          color={isSuccess ? '#1DD3B0' : '#E74C3C'}
        />
        <Text style={[styles.title, { color: isSuccess ? '#2c3e50' : '#E74C3C' }]}>
          {isSuccess ? 'VALID BOOKING' : 'BOOKING NOT FOUND'}
        </Text>
        <View style={styles.detailsContainer}>
          <DetailRow label="Name:" value={params.name} />
          <DetailRow label="Reservation ID:" value={params.reservationId} />
          <DetailRow label="Check-in:" value={params.checkIn} />
          <DetailRow label="Package:" value={params.package} />
          <DetailRow label="Guests:" value={params.guests} />
        </View>

        {isSuccess && (
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Admit 1 Guest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Admit Group</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>OK - Scan Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 35,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20, 
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  label: {
    fontSize: 16,
    color: '#8E8E93',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50', 
    textAlign: 'right',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#3498DB', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#007AFF', 
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});