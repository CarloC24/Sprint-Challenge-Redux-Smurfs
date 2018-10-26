import React from 'react';

export default props => {
  return (
    <div>
      <h1>Smurfs List</h1>
      {props.smurfs.map(item => {
        return (
          <div onClick={() => props.getSmurf(item)}>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <h1>{item.height}</h1>
            <button onClick={() => props.delete(item.id)}>Delete Smurf</button>
          </div>
        );
      })}
    </div>
  );
};
