const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const getTipodocumento = async (req, res) => {
  const response = await pool.query("SELECT * FROM tipo_documentos");
  res.send(response.rows);
};

const getTipodocumentos = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM tipo_documentos WHERE id=" + req.params.tipo_documentos_id
  );
  res.send(response.rows[0]);
};
const getCliente = async (req, res) => {
  const response = await pool.query("SELECT * FROM clientes");
  res.send(response.rows);
};

const getClientes = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM clientes WHERE id=" + req.params.clientes_id
  );
  res.send(response.rows[0]);
};
const getMascotas = async (req, res) => {
  const cliente = req.query.cliente;
  let response;

  if (cliente > 0) {
    response = await pool.query("SELECT * FROM mascotas WHERE propietario_id=" + cliente);
  } else {
    response = await pool.query("SELECT * FROM mascotas");
  }

  res.send(response.rows);
};

const getMascota = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM mascotas WHERE id=" + req.params.mascotas_id
  );
  res.send(response.rows[0]);
};
const getReservas = async (req, res) => {
  const mascotas = req.query.mascotas;
  let response;

  if (mascotas && mascotas !== '') {
    response = await pool.query("SELECT r.id, r.fecha_hora, s.nombre AS servicio, m.nombre AS mascota FROM reservas AS r INNER JOIN servicios s ON s.id=r.servicio_id INNER JOIN mascotas m ON m.id=r.mascota_id WHERE r.mascota_id IN(" + mascotas + ")");
  } else {
    response = await pool.query("SELECT r.id, r.fecha_hora, s.nombre AS servicio, m.nombre AS mascota FROM reservas AS r INNER JOIN servicios s ON s.id=r.servicio_id INNER JOIN mascotas m ON m.id=r.mascota_id");
  }

  res.send(response.rows);
};

const getReserva = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM reservas WHERE id=" + req.params.reservas_id
  );
  res.send(response.rows[0]);
};
const getServicio = async (req, res) => {
  const response = await pool.query("SELECT * FROM servicios");
  res.send(response.rows);
};

const getServicios = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM servicios WHERE id=" + req.params.servicios_id
  );
  res.send(response.rows[0]);
};
const getTiposMascota = async (req, res) => {
  const response = await pool.query("SELECT * FROM tipo_mascotas");
  res.send(response.rows);
};

const getTipoMascota = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM tipo_mascotas WHERE id=" + req.params.tipo_mascota_id
  );
  res.send(response.rows[0]);
};

const createTipoDocumento = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO tipo_documentos (tipo) VALUES ('" +
    req.body.tipo_documento +
    "')"
  );
  res.send("Creado");
};
const createClientes = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO clientes (nombre, apellido, documento, telefono, direccion, correo_electronico, contrasena, tipo_documento_id) VALUES ('" +
    req.body.nombre +
    "', '" +
    req.body.apellido +
    "', '" +
    req.body.documento +
    "', '" +
    req.body.telefono +
    "', '" +
    req.body.direccion +
    "', '" +
    req.body.correo_electronico +
    "', '" +
    req.body.contrasena +
    "', '" +
    req.body.tipo_documento_id +
    "')"
  );
  res.send("Creado");
};

const createMascotas = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO mascotas (nombre, raza, tipo_mascota_id, propietario_id) VALUES ('" +
    req.body.nombre +
    "', '" +
    req.body.raza +
    "', '" +
    req.body.tipo_mascota_id +
    "', '" +
    req.body.propietario_id +
    "')"
  );
  res.send("Creado");
};

const createReservas = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO reservas (fecha_hora, servicio_id, mascota_id) VALUES ('" +
    req.body.fecha_hora +
    "', '" +
    req.body.servicio_id +
    "', '" +
    req.body.mascota_id +
    "')"
  );
  res.send("Creado");
};

const createServicios = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO servicios (nombre, descripcion, valor) VALUES ('" +
    req.body.nombre +
    "', '" +
    req.body.descripcion +
    "', '" +
    req.body.valor +
    "')"
  );
  res.send("Creado");
};

const createTipomascotas = async (req, res) => {
  const response = await pool.query(
    "INSERT INTO tipo_mascotas (tipo) VALUES ('" + req.body.tipo + "')"
  );
  res.send("Creado");
};

const ingresar = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM clientes WHERE correo_electronico='" + req.body.correo_electronico + "' AND contrasena='" + req.body.contrasena + "'"
  );

  if (response.rows.length > 0) {
    res.send(response.rows[0]);
  } else {
    res.status(404).send('Not found');
  }
};

const updateCliente = async (req, res) => {
  const response = await pool.query(
    "UPDATE clientes SET documento = '" +
    req.body.documento +
    "', nombre = '" +
    req.body.nombre +
    "', apellido = '" +
    req.body.apellido +
    "', telefono = '" +
    req.body.telefono +
    "' , direccion = '" +
    req.body.direccion +
    "' , correo_electronico = '" +
    req.body.correo_electronico +
    "' , contrasena = '" +
    req.body.contrasena +
    "' , tipo_documento_id = '" +
    req.body.tipo_documento_id +
    "'  WHERE id = " +
    req.params.cliente_id
  );
  res.send("Actualizado");
};
const updateMascotas = async (req, res) => {
  const response = await pool.query(
    "UPDATE mascotas SET nombre = '" +
    req.body.nombre +
    "', raza = '" +
    req.body.raza +
    "', tipo_mascota_id = '" +
    req.body.tipo_mascota +
    "', propietario = '" +
    req.body.propietario +
    "' WHERE id = " +
    req.params.mascota_id
  );
  res.send("Actualizado");
};
const updateReservas = async (req, res) => {
  const response = await pool.query(
    "UPDATE reservas SET fecha_hora = '" +
    req.body.fecha_hora +
    "', servicio_id = '" +
    req.body.servicio_id +
    "', mascota_id = '" +
    req.body.mascota_id +
    "' WHERE id = " +
    req.params.reserva_id
  );
  res.send("Actualizado");
};
const deleteCliente = async (req, res) => {
  const response = await pool.query(
    "DELETE from clientes WHERE id = " + req.params.cliente_id + ""
  );
  res.send("Eliminado");
};

const deleteMascota = async (req, res) => {
  const response = await pool.query(
    "DELETE from mascotas WHERE id = " + req.params.mascota_id + ""
  );
  res.send("Eliminado");
};
const deleteReserva = async (req, res) => {
  const response = await pool.query(
    "DELETE from reservas WHERE id = " + req.params.reserva_id + ""
  );
  res.send("Eliminado");
};
module.exports = {
  getTipodocumento,
  getTipodocumentos,
  getClientes,
  getCliente,
  getMascota,
  getMascotas,
  getReserva,
  getReservas,
  getServicio,
  getServicios,
  getTiposMascota,
  getTipoMascota,
  createClientes,
  createTipoDocumento,
  createMascotas,
  createReservas,
  createServicios,
  createTipomascotas,
  updateCliente,
  updateMascotas,
  updateReservas,
  deleteCliente,
  deleteMascota,
  deleteReserva,
  ingresar
};
