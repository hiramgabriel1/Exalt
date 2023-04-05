import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";

const Login = () => {
	return (
		<Box
			backgroundColor={"blackAlpha.800"}
			color={"white"}
			minHeight={"100vh"}
			display={"flex"}
			flexDir={"column"}
			gap={12}
			alignItems={"center"}
		>
			<h1>Dale Hiram termina la API/REST HDP</h1>
			<FormControl border={"1px solid white"} width={"600px"} padding={"2rem"}>
				<FormLabel>Email address</FormLabel>
				<Input type="text" size="sm" />
				<FormHelperText>Hiram eres un pendejo</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default Login;
