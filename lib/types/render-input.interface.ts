import { ReactElement } from "react";

export interface RenderInputInterface {
  label?: string;
  element?: ReactElement;
  placeholder?: string;
  name: string;
  value?: string;
  type?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
  disabled?: boolean;
  options?: {
    value: string;
    label: string;
  }[];
}
