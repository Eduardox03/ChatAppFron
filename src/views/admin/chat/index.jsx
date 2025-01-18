import { Box, Grid } from "@chakra-ui/react";
import ChatConvertaions from "views/admin/chat/components/chatConversations";
import Storage from "views/admin/profile/components/Storage";

import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",             // En pantallas pequeñas, el grid será de una sola columna.
          lg: "2fr 1fr",          // En pantallas grandes, el chat ocupará dos tercios y el otro componente un tercio.
        }}
        templateRows={{
          base: "repeat(3, 1fr)",  // En pantallas pequeñas, tendremos tres filas iguales.
          lg: "1fr",               // En pantallas grandes, una sola fila.
        }}
        gap={{ base: "20px", xl: "20px" }}
        height="100vh"             // Esto asegura que el grid ocupe toda la altura de la pantalla
      >
        <ChatConvertaions
          gridArea={{ base: "1 / 1 / 3 / 2", lg: "1 / 1 / 2 / 3" }} // En pantallas pequeñas, el chat ocupa toda la fila, en pantallas grandes ocupa dos tercios del espacio.
          minH="365px"
          pe="20px"
        />
       
      </Grid>
    </Box>
  );
}
