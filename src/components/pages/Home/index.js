import { useConfigurationContext } from "../../configuration/ConfigurationContext"
import { Container, Row, Col, Button } from "react-bootstrap"
import CharactersList from "../../organisms/CharactersList"
import ChartList from "../../organisms/ChartList"

const Home = () => {

  const { characters, changePage } = useConfigurationContext()

  return (
    !characters ? <p>Characters not found or still loading...</p> :
    <Container>
      <Row>
        <Col md={12}>
          <CharactersList characters={characters.results}  />
        </Col>
        <Col md={12}>
          <ChartList characters={characters.results} />
        </Col>
        <Col md={12} className="d-flex justify-content-between align-items-center">
          <Button disabled={characters.info.prev ? false : true} variant="dark" onClick={() => changePage(characters.info.prev ? characters.info.prev : false)}>
            Previous
          </Button>
          <Button disabled={characters.info.next ? false : true} variant="dark" onClick={() => changePage(characters.info.next ? characters.info.next : false)}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  )
}


export default Home
