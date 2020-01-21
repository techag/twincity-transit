import React from "react";
import './Input.css';
import searchImg from '../../assets/images/search-gray.svg';

const Input = (props) => {

    let inputElement = null;
    const onClickHandler = props.clickHandler ? props.clickHandler : () => {};
    const onChangeHandler = props.changeHandler ? props.changeHandler : () => {};

    switch (props.inputType) {
        case 'text':
            inputElement = (
                <input
                    id={props.id || ''}
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
                <select name={props.name} className={props.classes.join(' ')} onChange={e => onChangeHandler(e)} id={props.id || ''} value={props.selected}>
                    <option value="">{props.defaultOption}</option>
                    {props.options.map((option, i) => (
                        <option value={option.key} key={i}>
                            {option.value}
                        </option>
                    ))}
                </select>
            );
            break;

        case 'searchInput':
            inputElement = (
                <>
                    <input
                        id={props.id || ''}
                        name={props.name}
                        className={props.classes.join(' ')}
                        defaultValue={props.value}
                        autoComplete="false"
                        placeholder={props.placeholder}
                        onChange={e => onChangeHandler(e)}
                    />
                    <span className="search-icon" onClick={e => onClickHandler(e)}>
                        <img alt="" className="search-icon-img" src={searchImg}/>
                    </span>
                </>
            );

    }
    return (
        <div className="input-wrapper">
            {inputElement}
        </div>
    )
};

export default Input;