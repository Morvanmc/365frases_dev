import React from "react";
import { View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

const BannerAd = () => {
const adUnitID = 'ca-app-pub-2482722286056863/1757486644'
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AdMobBanner
          adUnitID={adUnitID}
          bannerSize="banner"
          servePersonalizedAds={true}
        />
      </View>
    );
  };
  
  export default BannerAd;