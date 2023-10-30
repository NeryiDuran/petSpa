const { Router } = require("express");
const router = Router();

const {
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
  getTipomascota,
  getTipomascotas,
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
  deleteMascotas,
  deleteReservas
} = require("../controllers/index.controller");

router.get("/tipo-documentos", getTipodocumento);
router.get("/tipo-documentos/:tipo_documentos_id", getTipodocumentos);
router.get("/clientes", getCliente);
router.get("/clientes/:clientes_id", getClientes);
router.get("/mascotas", getMascota);
router.get("/mascotas/:mascotas_id", getMascotas);
router.get("/reservas", getReserva);
router.get("/reservas/:reservas_id", getReservas);
router.get("/servicios", getServicio);
router.get("/servicios/:servicios_id", getServicios);
router.get("/tipo_mascota", getTipomascota);
router.get("/tipo_mascota/:tipo_mascota_id", getTipomascotas);

router.post("/tipo-documentos", createTipoDocumento);
router.post("/clientes", createClientes);
router.post("/mascotas", createMascotas);
router.post("/reservas", createReservas);
router.post("/servicios", createServicios);
router.post("/tipo_mascotas", createTipomascotas);
router.put("/clientes/:cliente_id", updateCliente);
router.put("/mascotas/:mascota_id", updateMascotas);
router.put("/reservas/:reserva_id", updateReservas);
router.delete("/clientes/:cliente_id", deleteCliente);
router.delete("/mascotas/:mascota_id", deleteMascotas);
router.delete("/reservas/:reserva_id", deleteReservas);
//router.get('/users/1', getUser)
//router.post('/users', createUser)
//router.delete('/users/1', deleteUser)

module.exports = router;
