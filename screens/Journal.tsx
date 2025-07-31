// screens/Journal.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import uuid from 'react-native-uuid';

interface JournalEntry {
  id: string;
  text: string;
  date: string;
}

const STORAGE_KEY = '@journal_entries';
const DRAFT_KEY = '@journal_draft';

const Journal = () => {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // ✅ One-time cleaner (optional: uncomment for one run if needed)
  // const cleanStorage = async () => {
  //   const data = await AsyncStorage.getItem(STORAGE_KEY);
  //   if (data) {
  //     const parsed = JSON.parse(data);
  //     const cleaned = parsed.filter((entry: any) => typeof entry?.text === 'string');
  //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  //   }
  // };

  useEffect(() => {
    // cleanStorage(); // ← only once if needed
    loadEntries();
    loadDraft();
  }, []);

  useEffect(() => {
    const saveDraft = async () => {
      await AsyncStorage.setItem(DRAFT_KEY, text);
    };
    saveDraft();
  }, [text]);

  const loadEntries = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) setEntries(JSON.parse(data));
  };

  const loadDraft = async () => {
    const draft = await AsyncStorage.getItem(DRAFT_KEY);
    if (draft) setText(draft);
  };

  const saveEntries = async (newEntries: JournalEntry[]) => {
    setEntries(newEntries);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newEntries));
  };

  const handleSave = () => {
    if (!text.trim()) return;
    const now = new Date().toLocaleString();

    const newEntry: JournalEntry = {
      id: editingId ?? uuid.v4().toString(),
      text,
      date: now,
    };

    const updatedEntries = editingId
      ? entries.map((e) => (e.id === editingId ? newEntry : e))
      : [newEntry, ...entries];

    saveEntries(updatedEntries);
    setText('');
    setEditingId(null);
    AsyncStorage.removeItem(DRAFT_KEY);
    Keyboard.dismiss();
  };

  const handleEdit = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setText(entry.text);
  };

  const handleDelete = (id: string) => {
    Alert.alert('Delete Entry', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const updated = entries.filter((entry) => entry.id !== id);
          await saveEntries(updated);
          if (editingId === id) {
            setEditingId(null);
            setText('');
          }
        },
      },
    ]);
  };

  // ✅ Safer filtering
  const filteredEntries = (entries || []).filter((entry) => {
    const entryText = typeof entry?.text === 'string' ? entry.text : '';
    return entryText.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>

      <TextInput
        placeholder="Search your thoughts..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={[styles.subHeading, { marginBottom: 12 }]}
        placeholderTextColor={theme.colors.textMuted}
      />

      <TextInput
        placeholder="Write what's on your mind..."
        value={text}
        onChangeText={setText}
        style={[styles.textInput, { height: 120 }]}
        multiline
        placeholderTextColor={theme.colors.textMuted}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{editingId ? 'Update' : 'Save'}</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleEdit(item)}
            onLongPress={() => handleDelete(item.id)}
            style={styles.card}
          >
            <Text style={styles.practiceTitle}>{item.date}</Text>
            <Text style={styles.practiceSubtitle}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Journal;
