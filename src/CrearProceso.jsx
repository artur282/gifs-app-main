import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CrearProceso = () => {
  const [periodos, setPeriodos] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [nombreProceso, setNombreProceso] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleModalidadChange = (event) => {
    const selectedValue = event.target.value;
    setModalidad(selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Formateao de fechas
    const inicio = startDate ? startDate.toLocaleDateString("es-ES") : "No definido";
    const final = endDate ? endDate.toLocaleDateString("es-ES") : "No definido";
    setCarrera("")
    setDateRange("")
    setNombreProceso("")
    setModalidad("")
    setPeriodos("")

    console.log(`Se registró el proceso: ${nombreProceso} en modalidad ${modalidad} en la carrera ${carrera} durante el periodo ${periodos}. Las fechas son: Inicio: ${inicio}, Final: ${final}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Procesos</h1>

      <label>
        <strong>Periodo Académico</strong>
        <select
          id="periodos"
          value={periodos}
          onChange={(e) => setPeriodos(e.target.value)}
          required
        >
          <option value="" disabled>
            Periodo académico
          </option>
          <option value="20251">20251</option>
          <option value="20252">20252</option>
          <option value="20253">20253</option>
        </select>
      </label>

      <label htmlFor="modalidad">
        <strong>Modalidad</strong>
        <select
          name="modalidad"
          required
          className="input"
          id="modalidad"
          value={modalidad}
          onChange={handleModalidadChange}
        >
          <option value="" disabled>
            Modalidad seleccionada previamente
          </option>
          <option value="Anual" >Anual</option>
          <option value="semestral">Semestral </option>
          <option value="trimestral" >Trimestral</option>
        </select>
      </label>

      <label htmlFor="carrera">
        <strong>Carrera - Institución</strong>
        <select
          name="carrera"
          required
          className="input"
          id="carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        >
          <option value="" disabled>
            Carrera seleccionada previamente
          </option>
          <option value="Ing. Informática - San Juan de los Morros">Ing. Informática - San Juan de los Morros</option>
          <option value="Ing. Informática - Calabozo">Ing. Informática - Calabozo</option>
          <option value="Medicina - San Juan de los Morros">Medicina - San Juan de los Morros</option>
        </select>
      </label>

      <label htmlFor="nombre">
        <strong>Proceso</strong>
        <select
          name="nombreProceso"
          required
          className="input"
          id="nombre"
          value={nombreProceso}
          onChange={(e) => setNombreProceso(e.target.value)}
        >
          <option value="" disabled>
            Seleccione un proceso
          </option>
          <option value="Proceso de Carga de Horario">Proceso de Carga de Horario</option>
          <option value="Proceso de Inscripción por carreras Semestrales">Proceso de Inscripción por carreras Semestrales</option>
          <option value="Proceso de Validación de Inscripción">Proceso de Validación de Inscripción</option>
        </select>
      </label>

      <DatePicker
        selectsRange={true}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      />

      <button type="submit">Enviar</button>
    </form>
  
  );
};

export default CrearProceso;