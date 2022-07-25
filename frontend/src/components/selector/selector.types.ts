export interface SelectorBlockTypes {
    data: NodeTypes[],
    setPin: (id: number) => void,
    unsetPin: (id: number) => void,
}

export interface NodeTypes {
    id: number;
    value: string;
    setPin?: (id: number) => void;
    unsetPin?: (id: number) => void;
}
