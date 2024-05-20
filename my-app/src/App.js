import React, { useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Reservations from './components/Reservations';
import { Routes, Route } from 'react-router-dom';

const hours = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const initialFormState = {
  date: '',
  hours: { hours },
};

function reducer(formState, action) {
  switch (action.type) {
    case 'choose_date': {
      return {
        ...formState,
        date: action.selectedDate,
      }
    }
    case 'choose_time': {
      return {
        ...formState,
        hours: action.selectedHour,
      }
    }
    case 'clear_form': {
      return {
        ...formState,
        hours: "17:00",
        date: "",
      }
    }
    default:
      return formState;
  }
}

function App() {

  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const updateTime = (e) => {
    dispatch({
      type: "choose_time",
      selectedHour: e.target.value,
    })
  };

  const updateDate = (e) => {
    dispatch({
      type: "choose_date",
      selectedDate: e.target.value,
    })
  }

  const resetForm = () => {
    dispatch({
      type: "clear_form",
    })
  }

  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<Reservations
            availableTimes={formState}
            hours={hours}
            selectedDateValue={updateDate}
            selectedTimeValue={updateTime}
            resetForm={resetForm}
          />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
