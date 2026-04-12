import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { loginSchema } from "@/src/validations/loginSchema";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Gamepad2, Lock, Mail, MessageCircle } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { loginMock } from "../../services/authService";
import { styles } from '../../styles/authStyleSheet';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleWhatsApp() {
    Linking.openURL("https://wa.me/5582986554328");
  }

  function handleGmail() {
    Linking.openURL("mailto:gamerelics-feedback@gmail.com");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
      >

        {/* TOP SCREEN */}
        <View style={styles.topContainer}>
          <Image
            source={require("../../assets/imgs/LoginBgImage-1.jpg")}
            style={styles.backgroundImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "#0f0f0f"]}
            style={styles.gradient}
          />

          <View style={styles.topContent}>
            <View style={styles.iconBox}>
              <Gamepad2 size={24} color="#7c3aed" />
            </View>

            <Text style={styles.topTitle}>GameRelics</Text>
            <Text style={styles.topSubtitle}>
              Sua coleção pessoal de jogos
            </Text>
          </View>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <Text style={styles.formTitle}>
            Entrar
          </Text>

          <Text style={styles.formSubtitle}>
            Acesse sua coleção
          </Text>

          {/* VALIDATION */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {

              const user = loginMock(values.email, values.password);

              if (user) {
                console.log("Login sucesso:", user);

                router.push("/");
              } else {
                console.log("Credenciais inválidas");
              }

            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* E-mail */}
                <Input label="E-mail" placeholder="seu@email.com" icon={Mail}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={
                    touched.email && errors.email
                      ? errors.email
                      : undefined
                  } />

                {/* Password */}
                <Input label="Senha" placeholder="••••••••" icon={Lock}
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  } />

                <TouchableOpacity>
                  <Text style={styles.forgot}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <Button
                  title="Entrar"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>

          {/* Create Account Redirection */}
          <View style={styles.authTextRow}>
            <Text style={styles.authText}>
              Não tem conta?
            </Text>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.authLink}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerFeedback}>
            <Text style={styles.titleFeedback}>Feedback</Text>

            <View style={styles.iconsContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleWhatsApp}
              >
                <MessageCircle size={24} color={colorsPalette.primary} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleGmail}
              >
                <Mail size={24} color={colorsPalette.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>

  );
}