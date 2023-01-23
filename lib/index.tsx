import { cloneElement, FC, FormEvent, ReactElement, useReducer } from "react";
import RenderSelect from "./components/RenderSelect";
import RenderInput from "./components/RenderInput";
import { RenderInputInterface } from "./types/render-input.interface";

type FormBuilderProps = {
  onSubmit: (e: object) => void;
  className?: string;
  submitButton?: ReactElement;
  input: RenderInputInterface[];
};

const FormBuilder: FC<FormBuilderProps> = ({
  input,
  onSubmit,
  submitButton,
  className,
}) => {
  validateInputs(input);

  const [values, updateValues] = useReducer((state: any, newState: any) => {
    // const [objKey] = Object.keys(newState);

    return { ...state, ...newState };
  }, Object.fromEntries(input.map((i) => [i.name, i.value])));

  const onHandleSubmit = (e: FormEvent, onSubmit: (e: object) => void) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form
      className={className}
      onSubmit={(event) => onHandleSubmit(event, onSubmit)}
    >
      {input.map((i) => {
        if (i.element) {
          return cloneElement(i.element, {
            key: i.name,
            name: i.name,
            value: values[i.name],
            label: i.label,
            placeholder: i.placeholder,
            type: i.type,
            required: i.required,
            disabled: i.disabled,
            onChange: (event: any) => {
              updateValues({ [i.name]: event.target.value });
              i.onChange && i.onChange(event.target.value);
            },
          });
        }

        switch (i.type) {
          case "select":
            return (
              <RenderSelect
                key={i.name}
                props={{
                  ...i,
                  value: values[i.name],
                  onChange: (value: string) => {
                    updateValues({ [i.name]: value });
                    i.onChange && i.onChange(value);
                  },
                  options: i.options || [],
                }}
              />
            );
          default:
            return (
              <RenderInput
                key={i.name}
                props={{
                  name: i.name,
                  value: values[i.name],
                  label: i.label,
                  placeholder: i.placeholder,
                  type: i.type,
                  required: i.required,
                  disabled: i.disabled,
                  onChange: (event: any) => {
                    updateValues({ [i.name]: event.target.value });
                    i.onChange && i.onChange(event.target.value);
                  },
                }}
              />
            );
        }
      })}
      {submitButton ? (
        cloneElement(submitButton, {
          type: "submit",
        })
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
  );
};

const validateInputs = (input: FormBuilderProps["input"]) => {
  const names = input.map((i) => i.name);

  if (names.length !== new Set(names).size) {
    throw new Error(
      "[Lightning Form Builder] - Invalid Inputs with the same name"
    );
  }

  if (input.some((i) => i.type === "select" && !i.options)) {
    throw new Error(
      "[Lightning Form Builder] - Select inputs must have options"
    );
  }

  input.forEach((i) => {
    if (!i.name) {
      throw new Error(
        "[Lightning Form Builder] - Error Input name is required"
      );
    }
  });

  return true;
};

export default FormBuilder;
