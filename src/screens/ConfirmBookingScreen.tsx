import BaseText from "components/BaseText";
import ButtonPrimary from "components/ButtonPrimary";
import SecondaryText from "components/SecondaryText";
import SlotSelector from "components/SlotSelector";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { Colors } from "services/Colors";
import { Fonts } from "services/Fonts";
import t from "services/translate";
import getCenter from "services/TestCenterService";
import ButtonIcon from "components/ButtonIcon";

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    marginTop: 20
  }
});

export default function ConfirmBookingScreen(props) {
  const { availableSlot } = props.route.params;
  const center = getCenter(availableSlot.testCenterId);
  const isWeb = Platform.OS !== "android" && Platform.OS !== "ios";
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/map-test-center.png")}
        style={isWeb ? { height: 375 } : { width: "100%" }}
        resizeMode="cover"
      />
      <View style={{ alignItems: "center" }}>
        <BaseText
          text={center.name}
          style={{ fontFamily: Fonts.bold, fontSize: 20, marginBottom: 10 }}
        />
        <SecondaryText text={center.address} style={{ textAlign: "center" }} />
        <TouchableOpacity>
          <BaseText
            text={t("booking-confirmation.get-direction")}
            style={{
              marginTop: 20,
              color: Colors.oceanBlue,
              textDecorationLine: "underline"
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 80,
          width: 300,
          alignSelf: "center"
        }}
      >
        <SlotSelector
          disabled={true}
          label={availableSlot.dayOfWeek}
          labelRight={availableSlot.time}
          onPress={() => null}
          selected={true}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16
          }}
        >
          <ButtonIcon
            onPress={() => props.navigation.goBack()}
            iconName="arrowleft"
          />
          <ButtonPrimary
            style={{ flex: 1, marginLeft: 12 }}
            iconName={"arrowright"}
            label={t("booking-confirmation.confirm")}
            onPress={() =>
              props.navigation.navigate("BookingDetails", { availableSlot })
            }
          />
        </View>
      </View>
      <SecondaryText
        style={{ textAlign: "center", marginTop: 70 }}
        text={t("booking-confirmation.disclaimer")}
      />
    </View>
  );
}
