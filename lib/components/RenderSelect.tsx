import { FC, ReactElement } from "react";

type RenderSelect = {
  value?: string;
  element?: ReactElement;
  onChange?: (value: string) => void;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
};

type RenderSelectProps = {
  props: RenderSelect;
};

const RenderSelect: FC<RenderSelectProps> = ({ props }) => {
  return (
    <select
      value={props.value}
      onChange={(e: any) =>
        props.onChange ? props.onChange(e.target.value) : null
      }
    >
      {props.options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};

export default RenderSelect;
