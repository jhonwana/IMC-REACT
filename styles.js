import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050a30",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: 720,
    minWidth: 350,
    width: "80%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1F0535",
    textShadowColor: "#CCCCCC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    color: "#1F0535",
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#1F0535",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1F0535",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultArea: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    paddingTop: 10,
  },
  resultLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F0535",
    textShadowColor: "#CCCCCC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#1F0535",
  },
});

export default styles;
