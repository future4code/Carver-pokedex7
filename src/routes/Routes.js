import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaginaHome from '../paginas/PaginaHome/PaginaHome'
import { NotFound } from "../paginas/NotFoundPage/NotFound"
import { Pokedex } from '../paginas/PaginaPokedex/PaginaPokedex'
import PaginaDetalhes from '../paginas/PaginaDetalhes/PaginaDetalhes'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PaginaHome} />
                <Route exact path="/pokedex" component={Pokedex} />
                <Route exact path="/pokemonDetails/:id" component={PaginaDetalhes} />
                <Route path="" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


