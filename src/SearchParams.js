import React, { useState } from "react";

import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // console.log(ANIMALS);

  const [location, setLocation] = useState("Delhi ,IN");
  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
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
        <label htmlFor="animal">
          Animal
          <select
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* Breed */}
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed} //This value is sent to the server
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option>All</option>
            {breeds.map((breedString) => (
              <option key={breedString} value={breedString}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
