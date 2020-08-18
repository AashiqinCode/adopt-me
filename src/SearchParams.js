import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Delhi ,IN");

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
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
      <h2>{location}</h2>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Locations"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
