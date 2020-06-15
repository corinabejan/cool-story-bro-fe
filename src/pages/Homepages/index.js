import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { fetchHomepages } from '../../store/user/actions'
import { selectHomepages } from '../../store/user/selectors'
import Homepage from '../../components/Homepage'

export default function Homepages() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages);

  useEffect(() => {
    dispatch(fetchHomepages());
  }, [dispatch]);

  return (
    <>
    <Jumbotron>
      <h1>Homepages</h1>
    </Jumbotron>
    <Container>
      {homepages.map(homepage = > (
        <Homepage 
        key={homepage.id}
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={true}
        />
      ))}
    </Container>
    </>
  )
}