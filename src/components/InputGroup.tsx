import React from "react";
import { SearchIcon, Icon } from "@chakra-ui/icons";
import RecentSearch from "./RecentSearch";

function InputGroup() {
  return (
    <>
      <div className="input-group">
        <div className="search-icon">
          <Icon as={SearchIcon} w={7} h={7} color="gray.400" />
        </div>
        <input type="text" placeholder="Search for address" />
        <div className="search-button">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <RecentSearch
        title={"Calabasas, CA"}
        subtitle="$1.5k+ / 2 Beds / Appt.  ... 3 more "
      />
      <RecentSearch
        title={"Los Ageles, CA"}
        subtitle="$1.5k+ / 2 Beds / Appt.  ... 3 more "
      />
      <RecentSearch
        title={"Armeterdam, CA"}
        subtitle="$1.5k+ / 2 Beds / Appt.  ... 3 more "
      />
    </>
  );
}

export default InputGroup;
