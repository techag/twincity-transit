import React from "react";
import './Input.css';

const Input = (props) => {

    let inputElement = null;
    const onClickHandler = props.clickHandler ? props.clickHandler : () => {};
    const onChangeHandler = props.changeHandler ? props.changeHandler : () => {};

    switch (props.inputType) {
        case 'text':
            inputElement = (
                <input
                    name={props.name}
                    className={props.classes.join(' ')}
                    onClick={e => onClickHandler(e)}
                    defaultValue={props.value}
                    autoComplete="false"
                    placeholder={props.placeholder}
                />
            );

            break;

        case 'dropdown':
            inputElement = (
                <select name={props.name} className={props.classes.join(' ')} onChange={e => onChangeHandler(e)}>
                    <option value="">{props.defaultOption}</option>
                    {props.options.map((option, i) => (
                        <option value={option.key} key={i}>
                            {option.value}
                        </option>
                    ))}
                </select>
            );

    }
  return (
      <div className="input-wrapper">
          {inputElement}
      </div>
  )
};

export default Input;