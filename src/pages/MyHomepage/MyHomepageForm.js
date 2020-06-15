import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomepage } from "../../store/user/selectors";
import { updateMyPage } from "../../store/user/actions";

export default function MyHomepageForm() {
  const homepage = useSelector(selectMyHomepage);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(homepage.title);
  const [description, setDescription] = useState(homepage.description);
  const [backgroundColor, setBackgroundColor] = useState(
    homepage.backgroundColor
  );
  const [color, setColor] = useState(homepage.color);

  function submitForm(e) {
    e.preventDeafult();

    console.log(title, description, backgroundColor, color);
    dispatch(updateMyPage(title, description, backgroundColor, color));
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your page</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title of your page"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="What is your page about"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Background Color</Form.Label>
        <Form.Control
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          type="text"
          placeholder="What color is your page"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.Control
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="What is your page's text color"
        />
      </Form.Group>
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
  );
}
