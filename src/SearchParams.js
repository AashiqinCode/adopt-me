import React, { useState } from "react";

import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // console.log(ANIMALS);

  const [location, setLocation] = useState("Delhi ,IN");
  const [breeds, setBreeds] = useState([]);
  // const [animal, setAnimal] = useState("Dog");
  // const [breed, setBreed] = useState("");

  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "Dog", breeds);
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
