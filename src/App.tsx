import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  //useState 
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      {alertVisible && 
      <Alert onClose={() => setAlertVisible(false)}>
        Hello <span>World</span>
      </Alert>
      }
      
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="success" onClick={() => setAlertVisible(true)}>Add</Button>
    </div>
  );
}

export default App;
