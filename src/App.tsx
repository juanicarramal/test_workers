import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [countries, setCountries] = React.useState([
    {name: 'Select All', selected: false},
    {name: 'India', selected: false},
    {name: 'USA', selected: false},
    {name: 'France', selected: false},
  ])

  const handleSelect = (index: number) => {
      if(index === 0) {
        const newCountries = [...countries];
        newCountries[0].selected = !newCountries[0].selected;
        newCountries.forEach((country, index) => {
          if(index !== 0) {
            country.selected = newCountries[0].selected;
          }
        })
        setCountries(newCountries);
        return;
      }
      if(countries[0].selected) {
        const newCountries = [...countries];
        newCountries[0].selected = false;
        setCountries(newCountries);
      }
      const newCountries = [...countries];
      newCountries[index].selected = !newCountries[index].selected;
      setCountries(newCountries);

      if(allSelected()) {
        const newCountries = [...countries];
        newCountries[0].selected = true;
        setCountries(newCountries);
      }
  }

    const allSelected = () => {
        return countries.filter(country => country.selected).length === countries.length - 1;
    }

  return (
    <div className="App">
        <header className="App-header">
            <h1>React Checkbox</h1>
            {countries.map((country, index) => (
                <div className={'Row'}>
                <input type="checkbox" checked={country.selected} onChange={() => handleSelect(index)} />
                {country.name}
                </div>
            ))}
        </header>
    </div>
  );
}

export default App;