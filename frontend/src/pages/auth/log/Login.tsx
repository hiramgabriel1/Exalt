import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";

const Login = () => {
	const handlerSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		alert("esperando que el pinche hiram termine de resolver el conflicto");
	};

	return (
		<Box
			backgroundColor={"blackAlpha.900"}
			color={"white"}
			minHeight={"100vh"}
			display={"flex"}
			flexDir={"column"}
			gap={12}
			alignItems={"center"}
		>
			<h1>Dale Hiram termina la API/REST HDP</h1>

			<form onSubmit={handlerSubmit}>
				<FormControl
					display={"flex"}
					flexDirection={"column"}
					border={"1px solid white"}
					width={"600px"}
					padding={"2rem"}
					gap={"9"}
				>
					<div>
						<FormLabel>Email </FormLabel>
						<Input type="text" size="sm" />
						<FormHelperText>Hiram eres un pendejo</FormHelperText>
					</div>
					<div>
						<FormLabel>Password</FormLabel>
						<Input type="password" size="sm" />
						<FormHelperText>Hiram eres un pendejo</FormHelperText>
					</div>
					<Button
						alignSelf={"center"}
						width={"200px"}
						color={"white"}
						backgroundColor={"transparent"}
						border={"1px solid white"}
						_hover={{
							bg: "white",
							color: "black",
						}}
						type="submit"
					>
						Enviar
					</Button>
				</FormControl>
			</form>
		</Box>
	);
};

export default Login;
