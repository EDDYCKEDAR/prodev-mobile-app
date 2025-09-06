import { ImageBackground, View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { styles as s } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";


export default function Index() {
return (
<View style={s.container}>
<ImageBackground source={BACKGROUNDIMAGE} resizeMode="cover" style={s.backgroundImageContainer}>
<View style={s.logoContainer}>
<Image source={HEROLOGO} />
</View>


<View style={s.titleContainer}>
<Text style={s.titleText}>Discover Your Next Stay</Text>
<View style={s.titleSubTextContainer}>
<Text style={s.titleSubText}>
Book beautiful places around the world in seconds.
</Text>
</View>
</View>


<View style={{ marginTop: 48, gap: 16, paddingHorizontal: 20 }}>
<View style={s.buttonGroup}>
<Link href="/join" asChild>
<TouchableOpacity style={s.buttonPrimary}>
<Text style={s.buttonPrimaryText}>Join now</Text>
</TouchableOpacity>
</Link>
<Link href="/signin" asChild>
<TouchableOpacity style={s.buttonSecondary}>
<Text style={s.buttonSecondaryText}>Sign in</Text>
</TouchableOpacity>
</Link>
</View>
<View style={s.buttonGroupSubText}>
<Text style={s.titleSubText}>By continuing, you agree to our</Text>
<Text style={[s.titleSubText, { textDecorationLine: "underline" }]}>Terms</Text>
</View>
</View>
</ImageBackground>
</View>
);
}
