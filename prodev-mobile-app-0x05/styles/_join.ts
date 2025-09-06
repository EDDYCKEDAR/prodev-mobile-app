// styles/_join.ts
import { StyleSheet } from "react-native";

export const joinStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-300
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#16a34a", // Tailwind green-600
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 18,
  },
  footerLink: {
    color: "#2563eb", // Tailwind blue-600
    fontWeight: "600",
  },
});
