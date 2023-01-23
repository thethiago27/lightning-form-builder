## Lightning Form Builder

The easiest way to build forms
Lightning Form Builder is flexible with any input component, you can use your favorite framework library to build your forms

### Example

```javascript
const input = [
  {
    name: "email",
    value: "",
    label: "Email",
    required: true,
    placeholder: "Email",
  },
  {
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
    <div>
        <LightningMarkdown
        input={input}
        onSubmit={(values) => {
            console.log(values);
        }}
        />
    </div>
);
```

It will be rendered as:

![Example](https://res.cloudinary.com/dcwh5gcbr/image/upload/v1674505056/Captura_de_tela_de_2023-01-23_16-17-26_afw0v7.png)

Cool, isn't it?

## With Chakra UI

```javascript
import { Input } from "@chakra-ui/react";

const input = [
  {
    name: "email",
    element: <Input/>
    value: "",
    label: "Email",
    required: true,
    placeholder: "Email",
  }
];

return (
  <div>
    <LightningMarkdown
      input={input}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  </div>
);
```

### Features

- [x] Input Text
- [x] Select
- [ ] Mask
- [ ] TextArea
- [ ] Checkbox
- [ ] Radio
- [ ] Custom Hooks

### Installation

```bash
npm install lightning-form-builder
```

### Usage

Live Demo: https://stackblitz.com/edit/js-va7j6t?file=index.js

### License

MIT

### Author

thethiago27
