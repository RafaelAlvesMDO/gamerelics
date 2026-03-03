import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Gamepad2, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from '../../styles/authStyleSheet';

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

        {/* Name */}
        <Input label="Nome" placeholder="Seu nome" icon={Gamepad2} />

        {/* E-mail */}
        <Input label="E-mail" placeholder="seu@email.com" icon={Mail} />

        {/* Password */}
        <Input label="Senha" placeholder="••••••••" icon={Lock} secureTextEntry />


        {/* Register Button */}
        <Button title="Criar conta" onPress={() => console.log('FUNCIONANDO - CADASTRO')}></Button>

        {/* Login Redirection */}
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