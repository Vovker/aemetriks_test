import React from "react";

export interface InputTypes {
    type: string;
    name: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
