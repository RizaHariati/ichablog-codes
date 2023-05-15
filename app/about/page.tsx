import { FullNameType } from "@/types/projectsTypes";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [keyword, setKeyword] = useState<FullNameType | null>(null);
  return (
    <div>
      <h2>PersonListProps</h2>
      <p>{keyword?.first}</p>
      <p>{keyword?.last}</p>
    </div>
  );
};

export default page;
