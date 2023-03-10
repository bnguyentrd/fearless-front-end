import React from "react";
import "./App.css";
import Nav from "./Nav";
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="conferences/new" element={<ConferenceForm />} />
        <Route path="attendees/new" element={<AttendConferenceForm />} />
        <Route path="locations/new" element={<LocationForm />} />
        <Route path="attendees" element={<AttendeesList attendees={props.attendees} />} />
        <Route path="presentations/new" element={<PresentationForm />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;