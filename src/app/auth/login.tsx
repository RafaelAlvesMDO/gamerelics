import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { loginSchema } from "@/src/validations/loginSchema";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Formik } from "formik";
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

export default function Login() {
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
            console.log(values);
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
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>

        {/* Create Account Redirection */}
        <View style={styles.authTextRow}>
          <Text style={styles.authText}>
            Não tem conta?
          </Text>

          <TouchableOpacity onPress={() => router.push("/auth/register")}>
            <Text style={styles.authLink}>
              Criar conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}