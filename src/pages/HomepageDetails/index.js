import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Homepage from "../../components/Homepage";
import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";
import { fetchHomepageId } from "../../store/homepageDetails/actions";
import { selectHomepageDetails } from "../../store/homepageDetails/selectors";

export default function HomepageDetails() {
  const { id } = useParams();
  console.log(id)
  const homepage = useSelector(selectHomepageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepageId(id));
  }, [dispatch, id]);

  return (
    <>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel homepage={homepage} />
      </Container>
    </>
  );
}
