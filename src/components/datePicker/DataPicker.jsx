import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { setReservation } from "../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { GetHours } from "../../api/reservation/reservation";

const DataPicker = ({ setDay, hours, setHours }) => {
  const { reservation } = useSelector((state) => {
    return state;
  });
  const dataArtist = reservation.reservation.artist.id;
  const dataPackage = reservation.reservation.package.id;
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId="dob">
              <Form.Label>Seleccione Fecha</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="fecha"
                onChange={async (e) => {
                  let initialHours = [
                    "8:00",
                    "9:30",
                    "11:00",
                    "12:30",
                    "16:00",
                    "17:30",
                    "19:00",
                  ];
                  setDay(e.target.value);
                  const dataHours = await GetHours({
                    dataPackage,
                    dataArtist,
                    day: e.target.value,
                  });
                  console.log("hoursssss");
                  console.log(hours);
                  console.log("*-/****");
                  console.log(dataHours);
                  if (dataHours.length > 0) {
                    dataHours.forEach((e) => {
                      const index = initialHours.indexOf(e.time);
                      if (index > -1) {
                        initialHours.splice(index, 1);
                      }
                    });
                  }

                  // eslint-disable-next-line no-unused-expressions
                  /*console.log(newHours.length);
                  newHours =
                    newHours.length === 0
                      ? [
                          "8:00",
                          "9:30",
                          "11:00",
                          "12:30",
                          "16:00",
                          "17:30",
                          "19:00",
                        ]
                      : newHours;*/
                  setHours(initialHours);
                  console.log("nuevo arreglo");
                  console.log(initialHours);
                }}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPicker;
