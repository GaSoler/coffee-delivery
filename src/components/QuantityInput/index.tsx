import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
    size?: "medium" | "small";
}

export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
    const [quantityCoffee, setQuantityCoffee] = useState(0);

    function handleCoffeeIncrement() {
        setQuantityCoffee(quantityCoffee + 1);
    }

    function handleCoffeeDecrement() {
        if (quantityCoffee > 0) setQuantityCoffee(quantityCoffee - 1);
    }

    return (
        <QuantityInputContainer size={size}>
            <IconWrapper>
                <Minus size={14} weight="fill" onClick={handleCoffeeDecrement} />
            </IconWrapper>
            <input type="number" min={0} readOnly value={quantityCoffee} />  
            <IconWrapper>
                <Plus size={14} weight="fill" onClick={handleCoffeeIncrement} />
            </IconWrapper>    
        </QuantityInputContainer>
    );
}