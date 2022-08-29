import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formatedItemsTotal = formatMoney(cartItemsTotal);
    const formatedCartTotal = formatMoney(cartTotal);
    const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s" >Total de itens</RegularText>
                <RegularText>R$ {formatedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s" >Entrega</RegularText>
                <RegularText>R$ {formatedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R$ {formatedCartTotal}</RegularText>
            </div>
            {/* <NavLink to="/orderConfirmed" > */}
                <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
            {/* </NavLink> */}
        </ConfirmationSectionContainer>
    );
}