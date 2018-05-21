import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar, Image, ScrollView, TextInput, SectionList } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={styles.header}>
          <StatusBar hidden={false} />
          <Image source={require('./assets/menu.png')} style={styles.headerButton} />
          <Text style={styles.headerTitle}>🚀 Get Started</Text>
          <View style={styles.headerButtonGroup}>
            <Image source={require('./assets/actions.png')} style={styles.headerButton} />
            <Image source={require('./assets/share.png')} style={styles.headerButton}/>
            <Image source={require('./assets/history.png')} style={styles.headerButton} />
          </View>
        </View>
        <ScrollView>
          <Text style={styles.pageIcon}>🚀</Text>
          <Text style={styles.pageTitle}>Get Started</Text>
          <View style={styles.searchBox}>
            <Image source={require('./assets/search.png')} style={styles.searchImage} />
            <TextInput style={styles.searchText}
              placeholder="Quick find...">
            </TextInput>
          </View>
          <Text style={styles.bodyText}>Create a new page, open, or add to an existing page or database</Text>
          <View style={styles.pageRow}>
            <Text style={styles.pageRowText}>New Page</Text>
          </View>
          <SectionList
          sections={[
            {title: 'Recent Pages', data: ['Recent page', 'Another page', 'A third page', 'A fourth page']},
            {title: 'Favorites', data: ['First favorite', 'Another favorite', 'A third favorite', 'A fourth favorite']},
          ]}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            renderItem={({item}) => <Text style={styles.pageRow}>{item}</Text>}
            keyExtractor={(item, index) => index}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 45,
    borderBottomColor: '#E6E6E6',
    alignItems: 'center',
  },
  headerButton: {
    maxWidth: 18,
    maxHeight: 22,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  headerTitle: {
    fontSize: 14,
    color: '#424242',
    marginLeft: 16,
  },
  headerButtonGroup: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingRight: 15,
    alignItems: 'center',
  },
  pageIcon: {
    fontSize: 78,
    marginLeft: 27,
    marginTop: 72,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#424242',
    marginLeft: 27,
  },
  searchBox: {
    flexDirection: 'row',
    height: 44,
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderColor: 'rgba(196, 196, 196, 0.5)',
    borderRadius: 2,
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    marginBottom:48,
    alignItems: 'center',
  },
  searchImage: {
    maxWidth: 16,
    resizeMode: 'contain',
    marginLeft: 14,
    marginRight: 10,
  },
  searchText: {
    fontSize: 14,
    flex: 1,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.04,
    color: '#C4C4C4',
    marginLeft: 27,
    marginBottom: 16,
  },
  pageRow: {
    height: 44,
    backgroundColor: '#F7F7F7',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 4,
    marginTop: 4,
  },
  pageRowText: {
    fontSize: 14,
    color: '#C4C4C4',
  },
  sectionHeader: {
    paddingTop: 4,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#C4C4C4',
  },
});
