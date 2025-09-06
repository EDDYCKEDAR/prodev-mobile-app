import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
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
<Text style={s.buttonText}>Sign in</Text>
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
<Text style={s.signupTitleText}>New here? </Text>
<Link href="/join" style={s.signupSubTitleText}>Create account</Text>
</View>
</View>
);
}
