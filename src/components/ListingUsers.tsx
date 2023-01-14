import React from "react";

const ListingUsers = ({ search }: any) => {
  const results = search?.map((user: any, idx: number) => (
    <div key={idx}>
      <div> {user?.id} </div>
      <div> {user?.name} </div>
      <div> {user?.email} </div>
    </div>
  ));

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
