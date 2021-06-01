import { useConfigurationContext } from "../../configuration/ConfigContext"
import { Container, Row, Col } from "react-bootstrap"
import CharactersList from "../../organisms/CharactersList"
import ChartList from "../../organisms/ChartList"

const Home = () => {

  const { characters } = useConfigurationContext()

  return (
    <Container>
      <Row>
        <Col md={12}>
            <CharactersList characters={characters.results}  />
        </Col>
        <Col md={12}>
          <ChartList characters={characters} />
        </Col>
      </Row>
    </Container>
  )
}


export default Home
