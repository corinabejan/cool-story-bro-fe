import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";

export default function StoryForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("https://source.unsplash.com/1600x900/?");

  function submitForm(e) {
    e.preventDefault();
    console.log(name, content, imageUrl);
    dispatch(postStory(name, content, imageUrl));
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Post a cool story</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name of your story"
        required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="the content of your story"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image Url</Form.Label>
        <Form.Control 
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        type="text"
        placeholder="A picture says more than a thousand words"
        />
         {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post !
        </Button>
      </Form.Group>
    </Form>
  )
}
