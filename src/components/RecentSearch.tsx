import React from "react";
import { Icon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  title: String;
  subtitle: String;
}

function RecentSearch({ title, subtitle }: Props) {
  return (
    <div className="recent-search">
      <div className="title">{title}</div>
      <div className="sub-info">
        <div className="subtitle">{subtitle}</div>
        <Icon as={ChevronRightIcon} color="gray.400" w={"7"} height="7" />
      </div>
    </div>
  );
}

export default RecentSearch;
