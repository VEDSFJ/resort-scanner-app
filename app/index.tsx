import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScannerScreenUI() {
  const router = useRouter();

  const showValidResult = () => {
    router.push({
      pathname: '/result',
      params: { 
        status: 'valid', 
        name: 'Johnny Sins',
        reservationId: 'RES-12345',
        checkIn: 'June 22, 2025',
        package: 'Day Time (8am-4pm)',
        guests: '0 / 5 Admitted'
      } 
    });
  };
  
  const showInvalidResult = () => {
    router.push({
      pathname: '/result',
      params: { 
        status: 'invalid', 
        name: 'HatdOgooo',
        reservationId: 'RES-99999',
        checkIn: 'N/A',
        package: 'N/A',
        guests: 'N/A'
      } 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>GM Dumago Staff Scanner</Text>
        <View style={styles.scannerBox} />
        <Text style={styles.instructions}>Point camera at guest&#39;s QR code</Text>
        
        <View style={styles.testButtonsContainer}>
          <TouchableOpacity style={styles.testButton} onPress={showValidResult}>
            <Text style={styles.testButtonText}>Simulate Valid Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.testButton, {backgroundColor: '#E74C3C'}]} onPress={showInvalidResult}>
            <Text style={styles.testButtonText}>Simulate Invalid Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 90,
  },
  scannerBox: {
    width: 280,
    height: 280,
    borderWidth: 2,
    borderColor: '#1DD3B0',
    borderRadius: 12,
    bottom: 40,
  },
  instructions: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
    bottom: 40,
  },
  testButtonsContainer: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
  },
  testButton: {
    backgroundColor: '#1DD3B0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    bottom: 10,
  },
  testButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});