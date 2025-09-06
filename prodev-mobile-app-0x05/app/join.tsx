import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { styles as s } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";


export default function Join() {
return (
<View style={s.container}>
<View style={s.iconsection}>
<View />
<Text style={{ fontSize: 18, fontWeight: "500" }}>Join now</Text>
<Link href="/" style={{ fontSize: 16 }}>Close</Link>
</View>


<View style={s.titleTextGroup}>
<Text style={s.titleText}>Create account</Text>
<Text style={s.subText}>Book faster, save favorites, and more</Text>
</View>


<View style={s.formGroup}>
<Text style={s.formLabel}>Email</Text>
<TextInput placeholder="name@example.com" keyboardType="email-address" style={s.formControl} />


<Text style={s.formLabel}>Password</Text>
<View style={s.formPasswordControl}>
<TextInput placeholder="••••••••" secureTextEntry style={s.passwordControl} />
<Text>👁️</Text>
</View>


<TouchableOpacity style={s.primaryButton}>
<Text style={s.buttonText}>Create account</Text>
</TouchableOpacity>


<Text style={s.forgotPasswordText}>Forgot password?</Text>


<View style={s.dividerGroup}>
<View style={s.divider} />
<Text style={s.dividerText}>OR</Text>
<View style={s.divider} />
</View>


<View style={s.secondaryButtonGroup}>
<TouchableOpacity style={s.secondaryButton}>
<Image source={GOOGLELOGO} />
<Text style={s.secondaryButtonText}>Continue with Google</Text>
</TouchableOpacity>
<TouchableOpacity style={s.secondaryButton}>
<Image source={FACEBOOKLOGO} />
<Text style={s.secondaryButtonText}>Continue with Facebook</Text>
</TouchableOpacity>
</View>
</View>


<View style={s.signupgroup}>
<Text style={s.signupTitleText}>Already have an account? </Text>
<Link href="/signin" style={s.signupSubTitleText}>Sign in</Link>
</View>
</View>
);
}
