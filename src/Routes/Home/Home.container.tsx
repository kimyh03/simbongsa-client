import React, { useState } from "react";
import { useQuery } from "react-apollo";
import Loader from "../../Components/Loader";
import UseInput from "../../Hooks/UseInput";
import List from "./components/List";
import Filter from "./components/Filter";
import { GET_POSTS } from "./Home.queries";

export default () => {
  const [categories, setCategories] = useState<{ list: string[] }>({
    list: [],
  });
  const [rigions, setRigions] = useState<{ list: string[] }>({
    list: [],
  });
  const [page, setPage] = useState(1);
  const [openOnly, setOpenOnly] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading } = useQuery(GET_POSTS, {
    variables: {
      categories: categories.list,
      rigions: rigions.list,
      page,
      openOnly,
      searchTerm,
    },
  });

  const SearchTermInput = UseInput("");
  const onSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSearchTerm(String(SearchTermInput.value));
  };

  const onClickCategory = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedCategory = event.currentTarget.value;
    const exist = categories.list.includes(selectedCategory);
    let array;
    if (exist) {
      array = categories.list;
      array = array.filter((item) => item !== selectedCategory);
      setCategories({ list: array });
    } else {
      array = [...categories.list, selectedCategory];
      setCategories({ list: array });
    }
  };

  const onClickRigion = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedRigion = event.currentTarget.value;
    const exist = rigions.list.includes(selectedRigion);
    let array;
    if (exist) {
      array = rigions.list;
      array = array.filter((item) => item !== selectedRigion);
      setRigions({ list: array });
    } else {
      array = [...rigions.list, selectedRigion];
      setRigions({ list: array });
    }
  };

  const onClickPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const selectedPage = event.currentTarget.value;
    setPage(+selectedPage);
  };

  const onCheckIsOpen = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.preventDefault();
    setOpenOnly(!openOnly);
  };

  return (
    <>
      <Filter
        onSearch={onSearch}
        onClickCategory={onClickCategory}
        onClickRigion={onClickRigion}
        onCheckIsOpen={onCheckIsOpen}
        categories={categories.list}
        rigions={rigions.list}
        SearchTermInput={SearchTermInput}
      />
      {!loading && data?.getPosts ? (
        <List onClickPage={onClickPage} data={data.getPosts} />
      ) : (
        <Loader height="40vh" />
      )}
    </>
  );
};
