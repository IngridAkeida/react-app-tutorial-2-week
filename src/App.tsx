import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";


function App() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="success" onClick={() => console.log("clicked")}>Add</Button>
    </div>
  );
}

export default App;
