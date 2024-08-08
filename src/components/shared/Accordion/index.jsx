import { Accordion, AccordionItem } from "@nextui-org/react";
import { IndicatorIcon } from "../../../assets/images/images";
import { useState } from "react";


const SpecialAccordion = () => {
    return (
        <AccordionItem
            key="1"
            title="t">
            <hr />
            123456
        </AccordionItem>
    )
}

export const CustomeAccordionItem = ({ key, title, classNames, content, textValue, indicator, onPress }) => {
    return (
        <Accordion variant="splitted"
            // selectedKeys={selectedKeys}
            // onSelectionChange={setSelectedKeys}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                            height: {
                                duration: 0.5,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 2.5,
                            },
                        },
                    },
                    exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                            height: {
                                easings: "ease",
                                duration: 0.4,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 0.2,
                            },
                        },
                    },
                },
            }}
        >
            <AccordionItem
                key="1"
                title="t">
                <hr />
                {content}
            </AccordionItem>
        </Accordion>
    )
}

const CustomeAccordion = ({ selectedKeys, setSelectedKeys, children }) => {
    return (
        <Accordion variant="splitted"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                            height: {
                                duration: 0.5,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 2.5,
                            },
                        },
                    },
                    exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                            height: {
                                easings: "ease",
                                duration: 0.4,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 0.2,
                            },
                        },
                    },
                },
            }}
        >
            {children}
        </Accordion>
    )
}

export default CustomeAccordion;