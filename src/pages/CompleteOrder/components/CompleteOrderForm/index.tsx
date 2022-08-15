import { TitleText } from "../../../../components/Typography";
import { CompleteOrdemFormContainer } from "./styles";

export function CompleteOrderForm() {
    return (
        <CompleteOrdemFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>
        </CompleteOrdemFormContainer>
    );
}