import { Input } from "@nextui-org/react";

const SearchBar = ({ placeholder, startContent, endContent, className, label, radius, value, onValueChange, onKeyDown }) => {
    return (
        <Input
            isClearable
            label={label}
            classNames={className}
            placeholder={placeholder}
            startContent={startContent}
            endContent={endContent}
            radius={radius}
            value={value}
            onValueChange={onValueChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default SearchBar;