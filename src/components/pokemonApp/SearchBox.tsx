import { useDispatch, useSelector } from "react-redux";
// import { usePokemon } from ../store/storeContext";
// import { usePokemon } from "../../store/StoreZustand";
import { selectSearch, setSearch } from "../../store/storeReduxToolkit";
import { useSnapshot } from "valtio";
import { search } from "../../store/storeValtio";
export default function SearchBox() {
  // context logic
  // const { search, setSearch } = usePokemon();

  // zustand logic
  // const search = usePokemon((state) => state.search);
  // const setSearch = usePokemon((state) => state.setSearch);

  // redux toolkit
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  const onSearch = (e: any) => dispatch(setSearch(e.target.value));

  // valtio logic
  //   const snap = useSnapshot(search);
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      //   value={snap.query}
      onChange={(e) => onSearch(e)}
      // onChange={(e) => setSearch(e.target.value)}
      //   onChange={(e) => (search.query = e.target.value)}
    />
  );
}
