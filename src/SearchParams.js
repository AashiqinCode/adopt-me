import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

// Redux
import { connect } from "react-redux";
import changeTheme from "./actionCreators/changeTheme";
import changeLocation from "./actionCreators/changeLocation";

const SearchParams = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    // The main thing useEffect is used for is to handle API's on initial rendering of the page
    // pet.breeds("dog").then(console.log, console.error);
    // console.log("Rendered");
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        // console.log(breeds)
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      console.log("Breeds Updated"),
      (error) => console.error(error)
    );
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location{" "}
          <input
            id="location"
            value={props.location}
            placeholder="Locations"
            onChange={(event) => props.setLocation(event.target.value)}
          />{" "}
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            onChange={(e) => props.setTheme(e.target.value)}
            onBlur={(e) => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chart Reuse</option>
          </select>
        </label>
        <button
          style={{
            backgroundColor: props.theme,
          }}
        >
          {" "}
          Submit{" "}
        </button>{" "}
      </form>{" "}
      <Results pets={pets} />{" "}
    </div>
  );
};

const mapStateToProps = ({ theme, location }) => {
  //Props to this component
  return {
    theme,
    location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => dispatch(changeTheme(theme)),
    setLocation: (location) => dispatch(changeLocation(location)),
    // dispatch(action:<any>)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams); //'connect' is used to do the subscribe thing
