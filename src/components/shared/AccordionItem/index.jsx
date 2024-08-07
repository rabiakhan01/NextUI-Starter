import { AccordionItem } from "@nextui-org/react";

const AccordItem = ({ classNames, onClick, ariaLabel, startContent, content }) => {
    return (
        <AccordionItem
            startContent={startContent}
            classNames={classNames}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <hr></hr>
            <p className='p-4'>{content}</p>
        </AccordionItem>
    )
}

export default AccordItem;