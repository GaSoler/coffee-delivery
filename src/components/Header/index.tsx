import logo from '../../assets/imgs/logo.svg'
import { CartButton, GeoLocaleButton, HeaderContent } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <header>
            <HeaderContent>
                <img src={logo} alt="" />
                <nav>
                    <GeoLocaleButton 
                        type="button"
                    >
                        <MapPin size={20} weight="fill" />
                        <span>São Paulo, SP</span>
                    </GeoLocaleButton>
                    <CartButton 
                        type="button">
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>
                </nav>
            </HeaderContent>
        </header>
    );
}