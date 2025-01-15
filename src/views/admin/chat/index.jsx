
import { Box, Grid } from "@chakra-ui/react";

import ChatConvertaions from "views/admin/chat/components/chatConversations" 
import Storage from "views/admin/profile/components/Storage";
 
 
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
         
        <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />


<ChatConvertaions
                  gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
                  minH='365px'
                  pe='20px'
        />  
          </Grid>
       
     
    </Box>
  );
}
