import { CreditCard } from "phosphor-react";
import { ReactNode } from "react";
import { PaymentMethodContainer } from "./styles";

interface PaymentMethodInputProps {
    icon: ReactNode;
    text: string
}

export function PaymentMethodInput({ icon, text }: PaymentMethodInputProps) {
    return (
        <PaymentMethodContainer>
            {icon}
            {text}
        </PaymentMethodContainer>
    );
}