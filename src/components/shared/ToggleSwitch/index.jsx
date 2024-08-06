import { Switch } from "@nextui-org/react";
const ToggleSwitch = ({ color, startContent, endContent, label, value, width, height, size, className, thumbIcon, onValueChange, selected }) => {
    return (
        <Switch
            color={color}
            startContent={startContent}
            endContent={endContent}
            value={value}
            width={width}
            height={height}
            size={size}
            classNames={className}
            onValueChange={onValueChange}
            selected={selected}
            thumbIcon={thumbIcon}
        >{label}</Switch>
    )
}

export default ToggleSwitch;