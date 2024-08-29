import React, { useState } from 'react';
// import { EyeIcon } from '../../../assets/Icons';

const Input = ({
    label,
    type,
    placeholder,
    name,
    required,
    value,
    onChange,
    onKeyDown,
    onFocus,
    onPaste,
    ref,
    maxLength,
    minLength,
    error,
    errorMsg,
    disabled,
    acceptText,
    autoFocus,
    startContent,
    endContent
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleEyeIconClick = () => {
        setPasswordVisible(!passwordVisible);
    };

    if (acceptText === 'alphabets') {
        value = value?.replace(/[^A-Za-z]/ig, '');
    } else if (acceptText === 'number') {
        value = value?.replace(/[^0-9]/ig, '');
    }

    return (
        <div className="mt-1 pb-1 relative w-full">
            {label ? (
                <label htmlFor="email" className={`absolute -top-[10px] left-2 bg-white px-[2px] text-[12px] font-medium ${error ? 'text-error00' : 'text-text01'} select-none`}>
                    {label}
                </label>
            ) : null}
            <input
                autoComplete="off"
                name={name}
                placeholder={placeholder}
                type={passwordVisible ? "text" : type}
                required={required}
                className={`w-full appearance-none border ${name === 'priceDownPerc' ? 'rounded-t-none rounded-e' : name === 'downPayment' ? 'rounded-e-none rounded-s' : 'rounded'} ${error ? ' disabled:bg-white border-error00 hover:border-error00 focus:border-error00 focus:ring-error00' : 'border-secondary02 hover:border-primary00 focus:border-primary00 focus:ring-primary00'} px-5 h-9 placeholder-text03 focus:outline-none text-sm placeholder:text-sm`}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onPaste={onPaste}
                ref={ref}
                maxLength={maxLength}
                minLength={minLength}
                disabled={disabled}
                autoFocus={autoFocus}
            />
            <div className='absolute top-[11px] left-2 bg-lime-400'>
                {startContent}
            </div>
            <div className='absolute top-[12px] right-2 bg-red-400'>
                {endContent}
            </div>
            {type === 'password' && (
                <div className={`absolute right-[1.5px] top-1/2 -translate-y-1/2 cursor-pointer w-[40px] h-[34px] flex justify-center items-center rounded-[3px] ${passwordVisible ? '-scale-[1] translate-all duration-500' : 'translate-all duration-500'}`}
                    onClick={handleEyeIconClick}
                >
                    {/*<EyeIcon width={24} height={24} />*/}
                </div>
            )}

            <p className='text-error00 text-xs pl-1 absolute'>{error && errorMsg}</p>
        </div>
    )
}

export default Input