import FormBuilder from "../lib";
import { Button, Input, Container, Flex } from "@chakra-ui/react";

const Main = () => {
  const input = [
    {
      name: "email",
      element: <Input marginBottom={4} />,
      value: "",
      label: "Email",
      required: true,
      placeholder: "Email",
    },
    {
      element: <Input />,
      name: "password",
      label: "Password",
      placeholder: "Senha",
      value: "",
      required: true,
    },
    {
      name: "account_type",
      label: "Type of Account",
      value: "",
      type: "select",
      options: [
        {
          value: "personal",
          label: "Personal",
        },
        {
          value: "Business",
          label: "Business",
        },
      ],
      required: true,
    },
  ];

  return (
    <Container marginTop={4}>
      <Flex justifyContent="center" flexDirection="column">
        <FormBuilder
          onSubmit={(values) => {
            console.log(values);
          }}
          submitButton={
            <Button colorScheme="teal" size="lg" type="submit">
              Enviar
            </Button>
          }
          input={input}
        />
      </Flex>
    </Container>
  );
};

export default Main;
