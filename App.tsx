import React from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View>
        <Pressable
          onPress={async () => {
            const subject = 'Hello!';
            const body = 'Hello World';

            Linking.canOpenURL(
              `mailto:feedback@company.com?subject=${subject}&body=${body}`,
            ).then(supported => {
              if (supported) {
                Linking.openURL(
                  `mailto:feedback@company.com?subject=${subject}&body=${body}`,
                );
              } else {
                console.log('Link not supported');
              }
            });
          }}>
          <Text style={{color: '#ffffff', padding: 20}}>test</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default App;
