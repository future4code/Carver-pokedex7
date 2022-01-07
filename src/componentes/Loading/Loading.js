import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";
import { prymaryColor } from "../colors/colors";

const Container = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 20%;
`

function Loading() {
    return (
        <Container>
            <PacmanLoader
                color= {prymaryColor}
                size={30}
            />
        </Container>
    )
}

export default Loading;