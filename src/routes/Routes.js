import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { NotFound } from "../pages/NotFound";
import { Pokedex } from '../pages/Pokedex'
import { PokemonDetails } from '../pages/PokemonDetails'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pokedex" component={Pokedex} />
                <Route exact path="/pokemonDetails" component={PokemonDetails} />
                <Route path="" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


