import PropTypes from "prop-types";
import { FC, HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { FieldErrors } from "react-hook-form";

import { AnyComponent } from "@types";

import { ReactComponent as EyeIcon, } from "../../../assets/icons/eye.svg";
import { ReactComponent as XCircle, } from "../../../assets/icons/XCircle.svg";
import { Icon } from "../../atoms";

/**
 * A component to display a field input.
 * It can be an input or a textarea.
 *
 * @param tag - The tag to use for the component.
 * @param label - The label of the field.
 * @param name - The name of the field.
 *
 * @param type - The type of the field.
 * @param status - The status of the field.
 *
 * @returns {JSX.Element}
 */
interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  tag?: "input" | "textarea";
  label: string;
  icon?: ReactNode;

  // React hook forms
  register?: Function;
  name: string;
  errors?: FieldErrors;
  rules?: object;

  // basics
  type?: HTMLInputTypeAttribute;
  status?: "default" | "danger" | "success" | "warning";
}

export const StatusVariants = {
  default: "",
  danger: "border-2 border-danger _:focus:border-danger",
  success: "border-success _:focus:border-success",
  warning: "border-2 border-warning _:focus:border-warning",
};

export const Field: FC<FieldProps> = ({
  tag = "input",
  label,
  icon,

  // React hook forms
  register = () => {},
  name,
  errors,
  rules = {},

  // basics
  className = "",
  type = "text",
  placeholder = " ",
  status = "default",
  ...rest
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const DynamicTag = tag || (`${tag}` as keyof AnyComponent);

  const currentRules = rules ? rules : { required: true };

  return (
    <div className={["mb-6 min-w-[240px]", className].join(" ")}>
      <div className="relative min-h-[52px] w-full">
        <DynamicTag
          className={[
            "peer min-h-[52px] rounded-sm px-[15px] pt-4 font-sans text-sm font-normal outline outline-0",
            "border-alt text-50 h-full w-full border bg-white leading-6",
            "disabled:cursor-not-allowed disabled:border disabled:border-grey-dark disabled:bg-grey disabled:text-variants-50",
            "placeholder-shown:border-alt",
            "focus:border-black focus:outline-0",
            "transition-all",
            tag === "textarea" && "_:min-h-[156px] _:pt-6",
            type === "password" && "_:pr-16",
            StatusVariants[status],
            errors && errors[name] && "_:border-2 _:border-danger",
          ].join(" ")}
          aria-invalid={errors && errors[name] ? "true" : "false"}
          type={!isRevealed ? type : "text"} // Force type to text to show password
          {...{ placeholder, name, ...rest }}
          {...register(name, currentRules)}
        />
        <label
          htmlFor={name}
          className={[
            "pointer-events-none absolute left-4 top-2 flex h-full w-full select-none text-[12px] font-normal leading-[1.5] transition-all",
            "peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.5] text-gray-400 dark:text-gray-500",
            "peer-focus:top-2 peer-focus:text-[12px] peer-focus:leading-[1.5] peer-focus:after:scale-x-100",
            "peer-disabled:text-variants-50 peer-disabled:peer-placeholder-shown:text-variants-50",
          ].join(" ")}
        >
          {label}
        </label>
        {type === "password" && (
          <button
            onClick={() => setIsRevealed((prev) => !prev)}
            className={[
              "min-w-8 min-h-8 bg-tranparent absolute right-0 top-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full px-1 py-1 text-variants-50",
              "-translate-x-1/2 -translate-y-1/2 transition-colors hover:bg-grey hover:text-black disabled:pointer-events-none",
            ].join(" ")}
          >
            <Icon as={EyeIcon} />
          </button>
        )}
        {icon && (
          <Icon
            as={icon}
            className="_:min-w-4 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 _:w-4"
          />
        )}
      </div>
      {errors && errors[name] ? <div className="bg-red-100 border px-4 py-3" role="alert">
        <span><span className="text-red-500"><Icon as={XCircle} className="mb-0.5 mr-2 inline-flex" /></span>{errors[name]?.message}</span>
      </div> : null}
    </div>
  );
};

Field.propTypes = {
  tag: PropTypes.oneOf(["input", "textarea"]),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["default", "danger", "success", "warning"]),
};
