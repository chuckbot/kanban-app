import React from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((lists, i) => (
        <Column text={lists.text} key={lists.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
