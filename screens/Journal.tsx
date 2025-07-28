// Journal.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../theme/ThemeContext';
import { JournalStyles } from '../theme/JournalStyles';

// Define the type for a single journal entry
interface JournalEntry {
  content: string;
  timestamp: string; // Or Date, depending on how you want to store/display it
}

export default function Journal() {
  const [text, setText] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const { theme, fontSizes } = useTheme(); // Destructure fontSizes here as well

  console.log('Journal.tsx - theme:', theme); // Add this
  console.log('Journal.tsx - fontSizes:', fontSizes); // Add this

  useEffect(() => {
    // ... (rest of your useEffect and loadEntries)
  }, []);

  const saveEntry = async () => {
    // ... (rest of your saveEntry)
  };

  return (
    <View style={[JournalStyles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[JournalStyles.title, { color: theme.colors.text }]}>Your Realizations</Text>

      <TextInput
        style={[JournalStyles.input, { borderColor: theme.colors.gold, color: theme.colors.text }]}
        multiline
        placeholder="Write what you realized..."
        placeholderTextColor={theme.colors.muted}
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={[JournalStyles.button, { backgroundColor: theme.colors.gold }]} onPress={saveEntry}>
        <Text style={[JournalStyles.buttonText, { color: theme.colors.background }]}>Save</Text>
      </TouchableOpacity>

      {entries.length === 0 ? (
        <View style={JournalStyles.emptyState}>
          <Text style={{ color: theme.colors.muted, fontSize: fontSizes.md }}>No entries yet. Start writing your insights.</Text> {/* Use fontSizes here */}
        </View>
      ) : (
        <ScrollView style={{ marginTop: 20 }}>
          {entries.map((entry, idx) => (
            <View key={idx} style={[JournalStyles.card, { backgroundColor: theme.colors.card }]}>
              <Text style={{ color: theme.colors.text, fontSize: fontSizes.md }}>{entry.content}</Text>
              <Text style={{ color: theme.colors.muted, fontSize: fontSizes.sm, marginTop: 5 }}>
                {entry.timestamp}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}