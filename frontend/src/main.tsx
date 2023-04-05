import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { colors } from "./chakraUi/theme/theme";
import { router } from "./router/Root";

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme} resetCSS>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>,
);
