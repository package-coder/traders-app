import { StyleSheet, View } from "react-native";
import {
	Text,
	Stack,
	TextInput,
	Button,
	IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import auth from "../services/auth";

const LoginScreen = ({ navigation }) => {
	const { handleSubmit, control } = useForm({});

	const onSubmit = (data) => {
		auth
			.login(data?.email, data?.password)
			.then(() => navigation.navigate({ name: "Home", merge: true }))
			.catch((e) => alert(e));
	};

	const [securePassword, setSecurePassword] = useState(true);

	return (
		<Stack direction="column" spacing={40} style={style.container}>
			<Text variant="h5">User Management</Text>
			<View>
				<ControlledTextField
					placeholder="Email"
					variant="outlined"
					inputMode="email"
					controllerProps={{
						control,
						name: "email",
						rules: {
							required: "This field is required",
							pattern: {
								value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
								message: "Invalid format",
							},
						},
					}}
				/>
				<ControlledTextField
					secureTextEntry={securePassword}
					placeholder="Password"
					variant="outlined"
					trailing={(props) => (
						<IconButton
							onPress={() => setSecurePassword(!securePassword)}
							icon={(props) => <Icon name="eye" {...props} />}
							{...props}
						/>
					)}
					controllerProps={{
						control,
						name: "password",
						rules: { required: "This field is required" },
					}}
				/>
				<Button
					variant="text"
					title="Forgot Password?"
					uppercase={false}
					titleStyle={{
						fontSize: 12,
					}}
					style={{
						alignSelf: "flex-start",
						padding: 0,
					}}
				/>
			</View>
			<Button
				pressableContainerStyle={style.buttonContainer}
				titleStyle={style.buttonTitle}
				uppercase={false}
				variant="contained"
				title="Login"
				onPress={handleSubmit(onSubmit)}
			/>
			<Stack direction="column" spacing={4}>
				<Button
					pressableContainerStyle={style.buttonContainer}
					titleStyle={style.buttonTitle}
					uppercase={false}
					variant="outlined"
					title="Continue with Google"
					leading={<IconButton icon={<Icon name="google" />} />}
					onPress={auth.loginWithGoogle}
				/>
				<Button
					pressableContainerStyle={style.buttonContainer}
					titleStyle={style.buttonTitle}
					uppercase={false}
					variant="outlined"
					title="Continue with Apple"
					leading={<IconButton icon={<Icon name="apple" />} />}
				/>
			</Stack>
		</Stack>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		margin: 32,
	},
	buttonContainer: {
		paddingVertical: 8,
	},
});

function ControlledTextField({ controllerProps, ...others }) {
	return (
		<Controller
			{...controllerProps}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<View style={{ margin: 3 }}>
					<TextInput
						{...others}
						value={value}
						onChangeText={onChange}
						style={{ margin: 0 }}
						error
					/>
					{error?.message && (
						<Text variant="body2" style={{ fontSize: 11, color: "red" }}>
							{error?.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
}

export default LoginScreen;
