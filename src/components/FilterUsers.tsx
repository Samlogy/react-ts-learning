import React, { useCallback, useRef } from "react";

function FilterUsers({ users, setSearch }: any) {
  const handleSubmit = (e: any) => e.preventDefault();

  // no optimization
  const onHandleChange = (e: any) => {
    const target = e.target;
    let value = target.type == "checkbox" ? target.checked : target.value;
    if (!value) return setSearch(users);
    value.toLowerCase();

    const result = users?.filter(
      (user: any) =>
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
    );

    console.log(result);

    setSearch(result);
  };
  // timeout fct 500ms
  const debounceV1 = (e: any) => {
    setTimeout(() => {
      onHandleChange(e);
    }, 500);
  };

  // memoize + timeout fct 500ms
  const debounceV2 = useCallback(debounceV1, []);

  // callBack + timeout (500ms) + clear fct
  const debounceV3 = (func: any) => {
    let timer: any;
    return (...args: any) => {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 650);
    };
  };
  const optimizedV3 = useCallback(debounceV3(onHandleChange), []);

  // use loadash --> import { debounce } from "lodash";

  const debounceV4 = useRef(debounceV1).current;
  // timeout + callback + ref
  const debounceV5 = useRef(useCallback(debounceV1, [])).current;
  // version + ref
  const debounceV6 = useRef(optimizedV3).current; //useDebounce(debounceV3(onHandleChange), 500)
  // same as V6 by with custom hook instead of fct
  const debounceV7 = useDebounce(onHandleChange, 500);

  // useDebugValue
  //   useDebugValue("Filter cpt");
  return (
    <div>
      <h2> Example Debouncing </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Name or Email"
          onChange={onHandleChange}
        />
      </form>
    </div>
  );
}

export default FilterUsers;

export const debounce = (func: any, delay = 1000) => {
  let debounceHandler: any;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceHandler);
    debounceHandler = setTimeout(() => func.apply(context, args), delay);
  };
};

export const throttle = (func: any, limit = 1000) => {
  let inThrottle: any;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

function useDebounce(fn: any, delay = 500) {
  let debounced = useCallback(debounce(fn, delay), []);
  return useRef(debounced).current;
}
