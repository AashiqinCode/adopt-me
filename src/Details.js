import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";
class Details extends React.Component {
  state = {
    loading: true,
    showModal: false,
  };

  //ComponentDidMount is like useEffect,used for Data fetching while use API's
  componentDidMount() {
    // throw new Error("lol new");
    pet.animal(this.props.id).then(({ animal }) => {
      console.log("The Clicked Animal: ", animal),
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breed,
          loading: false,
        });
    }),
      console.error;
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal }); // true/false

  // Can be done with 'redirect' as well
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1> loading.. </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} /> <h1> {name} </h1>{" "}
        <h2> {`${animal} - ${breed} - ${location}`} </h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={this.toggleModal}
              style={{
                backgroundColor: theme,
              }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p> {description} </p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundaries>
      <Details {...props} />
    </ErrorBoundaries>
  );
}
