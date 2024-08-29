import { AccordionItem } from "@nextui-org/react"

const CustomeAccordionItem = ({ key, title, classNames, content, textValue, indicator, onPress }) => {
    return (
        <AccordionItem
            key={key}
            title={title}
            classNames={classNames}
            textValue={textValue}
            indicator={indicator}
            onPress={onPress}
        >
            <hr />
            {content}
        </AccordionItem>
    )
}
export default CustomeAccordionItem;