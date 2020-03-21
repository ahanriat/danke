import BaseText from 'components/BaseText';
import ButtonPrimary from 'components/ButtonPrimary';
import ButtonSecondary from 'components/ButtonSecondary';
import SecondaryText from 'components/SecondaryText';
import InputText from 'components/TextInput';
import * as React from 'react';
import { Image, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Colors } from 'services/Colors';
import { Fonts } from 'services/Fonts';
import t from 'services/translate';


interface Styles {
  container: ViewStyle
  text: TextStyle
  secondary: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontWeight: '900'
  },
  secondary: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.blueGrey,
  }
});

export default function DiagnosisResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/doctor-illu.png')}
        style={{ width: 175, height: 139 }}
      />
      <BaseText text={t('test-result')} style={{ marginTop: 33, fontFamily: Fonts.bold }} />
      <BaseText text={t('test-result-positive')}  />
      <ButtonPrimary
        style={{ marginVertical: 30 }}
        label={t('find-closest-test-centers')}
        iconName={'arrowright'}
        onPress={() => navigation.navigate('LoadingLocation')}
      />
      
      <Image source={require('../../assets/icons/warning-icon.png')} />
      <SecondaryText text={'allow-location'} /> 
      <SecondaryText text={'we-dont-store-dataas'} />
    </View>
  );
}