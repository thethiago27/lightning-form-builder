import { FC } from "react";
import { RenderInputInterface } from "../types/render-input.interface";

type RenderInputProps = {
  props: RenderInputInterface;
};

const RenderInput: FC<RenderInputProps> = ({ props }) => {
  return (
    <label key={props.name}>
      {props.label?.length ? props.label : props.name}
      <input
        type={props.type || "text"}
        name={props.name}
        value={props.value}
        onChange={(e: any) =>
          props.onChange ? props.onChange(e.target.value) : null
        }
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required={props.required}
        disabled={props.disabled}
      />
    </label>
  );
};

export default RenderInput;
