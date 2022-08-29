import { InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export function PaymentMethodInput({ icon, label, id, ...props }: PaymentMethodInputProps) {
    return (
        <PaymentMethodContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodContainer>
    );
}