import React from "react";

// TYPES:
// object type
type objType = {
  name: string;
  isAlive: boolean;
  age: number;
  something: any; // special type (any type)
  skills: string[]; // array of strings
  stuff: string | number | boolean; // union type (can either str, number, bool)
  getName: () => string; // function
  setName: (name: string) => void;
  isManager?: boolean; // optional type (?)
};

// ENUM
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

// TYPE vs INTERFACE
// alias type: can be used: primitives, object, array, (complex stuff)
// interface type: can be used: object only - extend / implement interface

// CASTING: (work only if the value provided is the same type we cast)
// 1/
let x: unknown = "hello";
console.log((x as string).length); // casting x -> type string

// 2/ (do not work with react)
// let x: unknown = 'hello';
// console.log((<string>x).length);

// CLASS:
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the

// TUPLES:
// A tuple is a typed array with a pre-defined length and types for each index. (know length & type values)
let tuple: [number, boolean, string, () => void];
tuple = [5, false, "Sam", () => console.log("hello")];

// GENERIC:
// Generics makes it easier to write reusable code
// generics: classes, functions & type aliases
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
// createPair<number, string>(27, "sam");

// utility
// Partial: all properties are optional
// Required: all properties are required
// Omit: remove keys from an object
// Pick: removes all but the specified keys from an object type
// Exclude: exclude specified types from object
// Record - ReturnType - Parameters
function Types() {
  return <div>Types</div>;
}

export default Types;
