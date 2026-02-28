import { colorsPalette } from "@/src/themes/colorsPalette";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Eye, EyeOff, Gamepad2, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from './authStyleSheet';

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

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
            <Gamepad2 size={32} color="#7c3aed" />
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
          Criar conta
        </Text>

        <Text style={styles.formSubtitle}>
          Crie sua conta para registrar seus jogos
        </Text>

        {/* Nome */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.inputWrapper}>
            <Gamepad2 size={18} color={colorsPalette.textSecondary} style={styles.iconLeft} />
            <TextInput
              placeholder="Seu nome"
              placeholderTextColor={colorsPalette.textSecondary}
              style={styles.input}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputWrapper}>
            <Mail size={18} color={colorsPalette.textSecondary} style={styles.iconLeft} />
            <TextInput
              placeholder="seu@email.com"
              placeholderTextColor={colorsPalette.textSecondary}
              style={styles.input}
            />
          </View>
        </View>

        {/* Senha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputWrapper}>
            <Lock size={18} color={colorsPalette.textSecondary} style={styles.iconLeft} />

            <TextInput
              secureTextEntry={!showPassword}
              placeholder="••••••••"
              placeholderTextColor={colorsPalette.textSecondary}
              style={[styles.input, { paddingRight: 40 }]}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconRight}
            >
              {showPassword ? (
                <EyeOff size={18} color={colorsPalette.textSecondary} />
              ) : (
                <Eye size={18} color={colorsPalette.textSecondary} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>

        {/* Toggle */}
        <View style={styles.authTextRow}>
          <Text style={styles.authText}>
            Já possui uma conta?
          </Text>

          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={styles.authLink}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}