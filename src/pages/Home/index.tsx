import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconWithInfo, MainContainer, SectionContent } from "./styles";

export function HomePage() {
    return (
        <MainContainer>
            <SectionContent>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

                <div>
                    <IconWithInfo>
                        <ShoppingCart weight="fill" /><span>Compra simples e segura</span>
                    </IconWithInfo>
                    <IconWithInfo>
                        <Package weight="fill" /><span>Embalagem mantém o café intacto</span>
                    </IconWithInfo>
                    <IconWithInfo>
                        <Timer weight="fill" /><span>Entrega rápida e rastreada</span>
                    </IconWithInfo>
                    <IconWithInfo>
                        <Coffee weight="fill" /><span>O café chega fresquinho até você</span>
                    </IconWithInfo>
                </div>
            </SectionContent>

            

            <img src="src\assets\imgs\coffee-bg.png" alt="Copo de café com grãos de café ao fundo" />
        </MainContainer>
    );
}