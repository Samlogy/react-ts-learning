import React, { useMemo } from "react";

const ListingUsers = ({ search }: any) => {
  // improve performence (avoid too much rendering + long list)
  const results = useMemo(
    () =>
      search?.map((user: any, idx: number) => (
        <div key={idx}>
          <div> {user?.id} </div>
          <div> {user?.name} </div>
          <div> {user?.email} </div>
        </div>
      )),
    [search]
  );

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Users</p>
    </article>
  );

  return <div> {content}</div>;
};

export default ListingUsers;
