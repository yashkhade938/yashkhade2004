import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';

export default function ExamImageResizer() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ExamFormat</Text>
        <Text style={styles.headerSubtitle}>Perfect dimensions. Every time.</Text>
      </View>

      {/* Editor / Canvas Area */}
      <View style={styles.canvasContainer}>
        {imageLoaded ? (
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x400' }} 
            style={styles.previewImage} 
          />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>No Image Selected</Text>
            <Text style={styles.placeholderSubText}>Tap below to start</Text>
          </View>
        )}
      </View>

      {/* Smart Presets */}
      <View style={styles.presetContainer}>
        <Text style={styles.sectionLabel}>EXAM PRESETS</Text>
        <View style={styles.presetRow}>
          <TouchableOpacity style={styles.presetButton}>
            <Text style={styles.presetText}>Passport Photo</Text>
            <Text style={styles.presetSubText}>3.5 x 4.5 cm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.presetButton}>
            <Text style={styles.presetText}>Signature</Text>
            <Text style={styles.presetSubText}>Under 50KB</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Primary Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => setImageLoaded(true)}
        >
          <Text style={styles.primaryButtonText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Clean, light gray background
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  canvasContainer: {
    flex: 1,
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3, // For Android shadow
    overflow: 'hidden',
  },
  placeholder: {
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  placeholderSubText: {
    fontSize: 14,
    color: '#D1D5DB',
    marginTop: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  presetContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 1,
    marginBottom: 12,
  },
  presetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  presetButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  presetText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  presetSubText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 16,
  },
  primaryButton: {
    flex: 2,
    backgroundColor: '#0D9488', // Trustworthy Teal
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
});