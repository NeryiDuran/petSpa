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
  deleteReserva
} = require("../controllers/index.controller");

router.get("/tipo-documentos", getTipodocumento);
router.get("/tipo-documentos/:tipo_documentos_id", getTipodocumentos);
router.get("/clientes", getCliente);
router.get("/clientes/:clientes_id", getClientes);
router.get("/mascotas", getMascotas);
router.get("/mascotas/:mascotas_id", getMascota);
router.get("/reservas", getReservas);
router.get("/reservas/:reservas_id", getReserva);
router.get("/servicios", getServicio);
router.get("/servicios/:servicios_id", getServicios);
router.get("/tipo-mascota", getTiposMascota);
router.get("/tipo-mascota/:tipo_mascota_id", getTipoMascota);

router.post("/tipo-documentos", createTipoDocumento);
router.post("/clientes", createClientes);
router.post("/mascotas", createMascotas);
router.post("/reservas", createReservas);
router.post("/servicios", createServicios);
router.post("/tipo-mascotas", createTipomascotas);
router.put("/clientes/:cliente_id", updateCliente);
router.put("/mascotas/:mascota_id", updateMascotas);
router.put("/reservas/:reserva_id", updateReservas);
router.delete("/clientes/:cliente_id", deleteCliente);
router.delete("/mascotas/:mascota_id", deleteMascota);
router.delete("/reservas/:reserva_id", deleteReserva);

module.exports = router;
