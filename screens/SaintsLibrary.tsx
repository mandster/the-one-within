import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { SaintsLibraryStyles } from '../theme/SaintsLibraryStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const quotes = [
  { author: 'Rumi', text: 'What you seek is seeking you.' },
  { author: 'Kabir', text: 'I laugh when I hear that the fish in the water is thirsty.' },
  { author: 'Guru Nanak', text: 'Truth is the highest virtue, but higher still is truthful living.' },
  { author: 'Lao Tzu', text: 'To the mind that is still, the whole universe surrenders.' },
  { author: 'Ramana Maharshi', text: 'The question ‘Who am I?’ will destroy all other questions.' },
  { author: 'Mira Bai', text: 'I have found the One my heart loves. I will not lose Him again.' },
];

export default function SaintsLibrary() {
  const { theme, fontSizes } = useTheme();
  const [filter, setFilter] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [tab, setTab] = useState<'all' | 'favorites'>('all');
  const styles = createGlobalStyles(theme);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem('favoriteQuotes');
      if (data) setFavorites(JSON.parse(data));
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  };

  const saveFavorites = async (updated: string[]) => {
    try {
      await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(updated));
      setFavorites(updated);
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  };

  const toggleFavorite = async (quoteText: string) => {
    const updated = favorites.includes(quoteText)
      ? favorites.filter(q => q !== quoteText)
      : [...favorites, quoteText];
    await saveFavorites(updated);
  };

  const filteredQuotes =
    tab === 'all'
      ? quotes.filter(q =>
          q.author.toLowerCase().includes(filter.toLowerCase()) ||
          q.text.toLowerCase().includes(filter.toLowerCase())
        )
      : quotes.filter(q => favorites.includes(q.text));

  return (
    <View style={[styles.container, SaintsLibraryStyles.container(theme.colors)]}>
      <Text style={SaintsLibraryStyles.title(theme.colors, fontSizes)}>
        Blessings of the Saints
      </Text>

      <View style={SaintsLibraryStyles.tabContainer}>
        <TouchableOpacity onPress={() => setTab('all')}>
          <Text style={SaintsLibraryStyles.tabText(tab === 'all', theme.colors, fontSizes)}>
            All Quotes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('favorites')}>
          <Text style={SaintsLibraryStyles.tabText(tab === 'favorites', theme.colors, fontSizes)}>
            Favorites
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'all' && (
        <TextInput
          placeholder="Search by author or keyword..."
          placeholderTextColor={theme.colors.muted}
          style={SaintsLibraryStyles.searchInput(theme.colors, fontSizes)}
          value={filter}
          onChangeText={setFilter}
        />
      )}

      <ScrollView contentContainerStyle={SaintsLibraryStyles.scrollContainer}>
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((item, index) => (
            <View
              key={item.author + index}
              style={SaintsLibraryStyles.quoteCard(theme.colors)}
            >
              <Text style={SaintsLibraryStyles.quoteText(theme.colors, fontSizes)}>
                “{item.text}”
              </Text>
              <View style={SaintsLibraryStyles.quoteFooter}>
                <Text style={SaintsLibraryStyles.authorText(theme.colors, fontSizes)}>
                  — {item.author}
                </Text>
                <TouchableOpacity onPress={() => toggleFavorite(item.text)}>
                  <Ionicons
                    name={favorites.includes(item.text) ? 'star' : 'star-outline'}
                    size={24}
                    color={theme.colors.gold}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={SaintsLibraryStyles.emptyText(theme.colors)}>
            {tab === 'all' ? 'No quotes found matching your search.' : 'No favorite quotes yet.'}
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
