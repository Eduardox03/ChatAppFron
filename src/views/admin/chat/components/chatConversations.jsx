import {
  Box,
  Text,
  Input,
  Button,
  useColorModeValue,
  Flex,
  Avatar,
  Stack,
  Divider,
  VStack,
  IconButton,
  InputGroup,
  Kbd,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import dayjs from 'dayjs';
import AllUsers from 'apis/users';
import obtenerDatos from 'apis/chat';

export default function ChatConvertaions(props) {
  const { ...rest } = props;
  const [data, setData] = useState([]);
  const [usersList, setUsers] = useState([]);

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Estado para el usuario seleccionado

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    const response = obtenerDatos();
    setData(response.data);
    return response.data;
  }, [data]);

  useEffect(() => {
    const response = AllUsers();
    setUsers(response.data);
    return response.data;
  }, [usersList]);

  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );

  const users = [
    {
      name: 'Eduardo Mosquera',
      online: true,
      lastMessage: '¡Hola! ¿Cómo estás?',
      lastMessageDate: '2025-01-15T12:30:00',
    },
    {
      name: 'Rodolfo Fernando',
      online: false,
      lastMessage: 'Nos vemos mañana.',
      lastMessageDate: '2025-01-17T08:00:00',
    },
    {
      name: 'Cristian Murillo',
      online: true,
      lastMessage: 'Estoy ocupado, luego te hablo.',
      lastMessageDate: '2025-01-18T09:15:00',
    },
    {
      name: 'Fernando Huertado',
      online: true,
      lastMessage: '¿Qué tal el trabajo?',
      lastMessageDate: '2025-01-17T14:45:00',
    },
    {
      name: 'Juliana Lopez',
      online: false,
      lastMessage: 'Gracias por la ayuda.',
      lastMessageDate: '2025-01-16T18:30:00',
    },
    {
      name: 'Laura Viveros',
      online: true,
      lastMessage: '¡Genial!',
      lastMessageDate: '2025-01-18T11:00:00',
    },
    {
      name: 'Duban Toro',
      online: true,
      lastMessage: '¿Cuándo vamos a comer?',
      lastMessageDate: '2025-01-15T15:00:00',
    },
    {
      name: 'Bernardo Casas',
      online: false,
      lastMessage: 'Revisaré eso después.',
      lastMessageDate: '2025-01-14T20:30:00',
    },
    {
      name: 'Sofia Ruiz',
      online: true,
      lastMessage: '¡Nos vemos mañana!',
      lastMessageDate: '2025-01-18T10:00:00',
    },
    {
      name: 'Carlos Mendoza',
      online: false,
      lastMessage: 'Hablamos después.',
      lastMessageDate: '2025-01-13T22:00:00',
    },
    {
      name: 'Maria Perez',
      online: true,
      lastMessage: 'Estoy en reunión, te llamo luego.',
      lastMessageDate: '2025-01-18T13:00:00',
    },
    {
      name: 'Jorge Hernandez',
      online: false,
      lastMessage: 'Te mando el reporte más tarde.',
      lastMessageDate: '2025-01-12T17:30:00',
    },
    {
      name: 'Paola Sánchez',
      online: true,
      lastMessage: '¿Nos reunimos en la tarde?',
      lastMessageDate: '2025-01-17T15:00:00',
    },
    {
      name: 'Raul García',
      online: false,
      lastMessage: 'Voy a descansar un rato.',
      lastMessageDate: '2025-01-10T09:00:00',
    },
    {
      name: 'Lina Morales',
      online: true,
      lastMessage: '¡Eso suena bien!',
      lastMessageDate: '2025-01-18T14:45:00',
    },
    {
      name: 'Andres González',
      online: false,
      lastMessage: 'Nos ponemos en contacto pronto.',
      lastMessageDate: '2025-01-09T18:30:00',
    },
    {
      name: 'Lucia Romero',
      online: true,
      lastMessage: 'Estoy lista para la reunión.',
      lastMessageDate: '2025-01-18T16:00:00',
    },
  ];

   const userMessages = {
    'Eduardo Mosquera': [
      { sender: 'Eduardo Mosquera', text: '¡Hola! ¿Cómo estás?' },
      { sender: 'user', text: 'Bien, ¿y tú?' },
      { sender: 'Eduardo Mosquera', text: 'Todo bien, gracias.' },
      { sender: 'user', text: 'Qué bueno, ¿algún plan para el fin de semana?' },
      { sender: 'Eduardo Mosquera', text: 'Sí, voy a ir a la playa.' },
    ],
    'Rodolfo Fernando': [
      { sender: 'Rodolfo Fernando', text: 'Nos vemos mañana.' },
      { sender: 'user', text: '¡Perfecto!' },
      { sender: 'Rodolfo Fernando', text: 'A las 10 AM, ¿te parece?' },
      { sender: 'user', text: 'Claro, nos vemos ahí.' },
    ],
    'Cristian Murillo': [
      { sender: 'Cristian Murillo', text: 'Estoy ocupado, luego te hablo.' },
      { sender: 'user', text: 'Está bien, luego hablamos.' },
    ],
    'Fernando Huertado': [
      { sender: 'Fernando Huertado', text: '¿Qué tal el trabajo?' },
      { sender: 'user', text: 'Bien, aunque estoy un poco cansado.' },
      {
        sender: 'Fernando Huertado',
        text: 'Ya, yo también, pero hay que seguir.',
      },
    ],
    'Juliana Lopez': [
      { sender: 'Juliana Lopez', text: 'Gracias por la ayuda.' },
      { sender: 'user', text: 'De nada, siempre a la orden.' },
    ],
    'Laura Viveros': [
      { sender: 'Laura Viveros', text: '¡Genial!' },
      { sender: 'user', text: 'Me alegra que te guste.' },
    ],
    'Duban Toro': [
      { sender: 'Duban Toro', text: '¿Cuándo vamos a comer?' },
      { sender: 'user', text: 'El viernes, ¿te parece?' },
      { sender: 'Duban Toro', text: 'Perfecto, ¿a qué hora?' },
      { sender: 'user', text: 'A las 12:00.' },
    ],
    'Bernardo Casas': [
      { sender: 'Bernardo Casas', text: 'Revisaré eso después.' },
      { sender: 'user', text: 'Entendido.' },
    ],
    'Sofia Ruiz': [
      { sender: 'Sofia Ruiz', text: '¡Nos vemos mañana!' },
      { sender: 'user', text: 'Claro, ¡hasta mañana!' },
    ],
    'Carlos Mendoza': [
      { sender: 'Carlos Mendoza', text: 'Hablamos después.' },
      { sender: 'user', text: 'Está bien, nos hablamos luego.' },
    ],
    'Maria Perez': [
      { sender: 'Maria Perez', text: 'Estoy en reunión, te llamo luego.' },
      { sender: 'user', text: 'Sin problema, nos hablamos luego.' },
    ],
    'Jorge Hernandez': [
      { sender: 'Jorge Hernandez', text: 'Te mando el reporte más tarde.' },
      { sender: 'user', text: 'Perfecto, espero el reporte.' },
    ],
    'Paola Sánchez': [
      { sender: 'Paola Sánchez', text: '¿Nos reunimos en la tarde?' },
      { sender: 'user', text: 'Sí, ¿a las 4?' },
      { sender: 'Paola Sánchez', text: '¡Perfecto!' },
    ],
    'Raul García': [
      { sender: 'Raul García', text: 'Voy a descansar un rato.' },
      { sender: 'user', text: 'Nos hablamos luego entonces.' },
    ],
    'Lina Morales': [
      { sender: 'Lina Morales', text: '¡Eso suena bien!' },
      { sender: 'user', text: '¡Me alegra que te guste!' },
    ],
    'Andres González': [
      { sender: 'Andres González', text: 'Nos ponemos en contacto pronto.' },
      { sender: 'user', text: 'Ok, estaré esperando.' },
    ],
    'Lucia Romero': [
      { sender: 'Lucia Romero', text: 'Estoy lista para la reunión.' },
      { sender: 'user', text: 'Perfecto, empecemos.' },
    ],
  };
  const loggedUser = { User: 'Eduardo mosquera', online: true };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setMessages(userMessages[user.name] || []);
  };

  return (
    <Flex {...rest} direction="column" w="100%" h="100%">
      {/* Contenedor general */}
      <Box
        w="100%"
        bg={useColorModeValue('gray.100', 'gray.700')}
        p={4}
        borderRadius="8px"
        boxShadow={cardShadow}
        display="flex"
        flexDirection="row"
        h="100%"
      >
        <Box
          w="30%" // Asegúrate que la barra lateral de usuarios tenga el 25% del ancho
          p={4}
          borderRight="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          boxShadow={cardShadow}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            color="white"
            p={3}
            mb={4}
            borderRadius="8px"
            display="flex" // Utilizamos flexbox para que los elementos estén en fila
            alignItems="center" // Alineación vertical centrada
            justifyContent="space-between" // Espaciado entre los elementos
          >
            {/* Avatar con el indicador de estado */}
            <Box position="relative">
              <Avatar size="md" name={loggedUser.User} mr={3} />
              {/* Indicador de en línea dentro del avatar */}
              <Box
                position="absolute"
                bottom="20px"
                right="5px"
                width="20px"
                height="20px"
                borderRadius="50%"
                bg={loggedUser.online ? 'green.400' : 'red.400'}
                border="2px solid white"
              />
            </Box>

            <InputGroup
              flex="1"
              startElement={<LuSearch />}
              endElement={<Kbd>⌘K</Kbd>}
            >
              <Input placeholder="Search contacts" />
            </InputGroup>
          </Box>
          <Flex justify="stretch" align="center" w="100%">
            <Divider
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              orientation="horizontal"
              flex="1"
            />
          </Flex>

          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Chat
          </Text>
          <VStack
            spacing={4}
            align="start"
            overflowY="auto" // Activa el desplazamiento vertical
            maxHeight="100%"
          >
            {users.map((user, index) => (
              <Flex
                key={index}
                align="center"
                justify="space-between"
                width="100%"
                padding="5px 0"
                onClick={() => handleSelectUser(user)} // Función al hacer click en un usuario
                cursor="pointer" // Cambio de cursor al pasar sobre el usuario
              >
                <Flex align="center" width="100%" padding="5px 0">
                  <Box position="relative">
                    <Avatar size="md" name={user.name} mr={3} />
                    {/* Indicador de en línea dentro del avatar */}
                    <Box
                      position="absolute"
                      bottom="20px"
                      right="5px"
                      width="20px"
                      height="20px"
                      borderRadius="50%"
                      bg={user.online ? 'green.400' : 'red.400'}
                      border="2px solid white"
                    />
                  </Box>

                  <VStack align="start" ml={3}>
                    <Flex align="center">
                      <Text fontSize="md" fontWeight="semibold">
                        {user.name}
                      </Text>
                      {/* Tiempo transcurrido */}
                      <Text fontSize="sm" color="gray.400" ml={2}>
                        {dayjs(user.lastMessageDate).format('DD MM YY')}
                      </Text>
                    </Flex>
                    {/* Último mensaje debajo del nombre */}
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      maxWidth="200px" // Puedes ajustar el valor según sea necesario
                      isTruncated // Esto corta el texto y pone "..." si es muy largo
                    >
                      {user.lastMessage}
                    </Text>
                  </VStack>
                </Flex>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box
          style={{
            height: '80vh',
            width: '100%',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <Box
            color="white"
            p={3}
            mb={4}
            borderRadius="8px"
            display="flex" // Utilizamos flexbox para que los elementos estén en fila
            alignItems="center" // Alineación vertical centrada
            justifyContent="space-between" // Espaciado entre los elementos
          >
            {/* Avatar con el indicador de estado */}
            <Box position="relative">
              <Avatar size="md" name={loggedUser.User} mr={3} />
              {/* Indicador de en línea dentro del avatar */}
              <Box
                position="absolute"
                bottom="20px"
                right="5px"
                width="20px"
                height="20px"
                borderRadius="50%"
                bg={loggedUser.online ? 'green.400' : 'red.400'}
                border="2px solid white"
              />
            </Box>

            <InputGroup flex="5" left={3}>
              <Text
                fontSize="xl" // You can adjust the size to 'xl', '2xl', or a custom value
                fontWeight="bold" // This will make the text bold
                color="gray.500"
                maxWidth="200px"
                textColor={'black'}
                isTruncated
              >
                {loggedUser.User}
              </Text>
            </InputGroup>
          </Box>
          <Flex justify="stretch" align="center" w="100%">
            <Divider
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              orientation="horizontal"
              flex="1"
            />
          </Flex>

          <Flex direction="column" h="full" justify="flex-end">
            <Stack spacing={4} overflowY="auto">
              {messages.map((message, index) => (
                <Flex
                  key={index}
                  direction={message.sender === 'user' ? 'row-reverse' : 'row'}
                  align="flex-start"
                  justify={
                    message.sender === 'user' ? 'flex-end' : 'flex-start'
                  }
                  width="100%" // Asegura que los mensajes ocupen todo el ancho
                >
                  {/* Avatar del remitente */}
                  <Avatar
                    size="sm"
                    name={message.sender === 'user' ? 'Tú' : message.sender}
                    ml={message.sender === 'user' ? 2 : 0} // Márgenes para ajustar la posición del avatar
                    mr={message.sender !== 'user' ? 2 : 0} // Márgenes para ajustar la posición del avatar
                  />

                  {/* Burbuja del mensaje */}
                  <Box
                    bg={message.sender === 'user' ? 'blue.500' : 'gray.200'}
                    color={message.sender === 'user' ? 'white' : 'gray.700'}
                    maxWidth="80%" // Limita el tamaño del mensaje (puedes ajustarlo según sea necesario)
                    width="auto" // Deja que el mensaje ocupe el espacio disponible
                    borderRadius="lg"
                    padding="10px"
                    boxShadow="md"
                    ml={message.sender === 'user' ? 0 : 2} // Añadir margen izquierdo si el mensaje no es del usuario
                    mr={message.sender !== 'user' ? 0 : 2} // Añadir margen derecho si el mensaje no es del usuario
                    style={
                      message.sender === 'user'
                        ? {
                            textAlign: 'right',
                            marginLeft: 'auto',
                            marginRight: 0,
                          }
                        : {}
                    }
                  >
                    <Text>{message.text}</Text>
                  </Box>
                </Flex>
              ))}
            </Stack>

            <Divider my={6} />
            <Flex align="center">
              <IconButton
                icon={<FaSmile />}
                aria-label="Añadir emoji"
                colorScheme="gray"
                variant="ghost"
                mr={2}
              />
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                size="lg"
                mr={2}
                borderRadius="full"
                bg={useColorModeValue('gray.100', 'gray.600')}
              />
              <Button
                onClick={handleSendMessage}
                colorScheme="blue"
                borderRadius="full"
                size="lg"
                px={6}
              >
                Enviar
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
