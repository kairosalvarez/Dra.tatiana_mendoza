const WHATSAPP_NUMBER = "573009872255";

function openWhatsApp(message){
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

function sendWhatsAppAppointment(e){
  e.preventDefault();
  const name = document.getElementById("a_name").value.trim();
  const phone = document.getElementById("a_phone").value.trim();
  const sede = document.getElementById("a_sede").value;
  const service = document.getElementById("a_service").value;
  const date = document.getElementById("a_date").value;
  const time = document.getElementById("a_time").value;
  const type = document.getElementById("a_type").value;
  const note = document.getElementById("a_note").value.trim();

  const msg =
    `Hola Dra. Tatiana, soy ${name}.\n` +
    `Mi WhatsApp: ${phone}\n` +
    `Sede: ${sede}\n` +
    `Tipo de cita: ${type}\n` +
    `Servicio: ${service}\n` +
    `Fecha: ${date}\n` +
    `Hora: ${time}\n` +
    (note ? `Nota: ${note}\n` : "") +
    `¿Me confirmas disponibilidad, por favor?`;

  openWhatsApp(msg);
  return false;
}

function sendWhatsAppMessage(e){
  e.preventDefault();
  const name = document.getElementById("c_name").value.trim();
  const phone = document.getElementById("c_phone").value.trim();
  const reason = document.getElementById("c_reason").value;
  const msg = document.getElementById("c_msg").value.trim();

  const text =
    `Hola Dra. Tatiana, soy ${name}.\n` +
    `Mi WhatsApp: ${phone}\n` +
    `Motivo: ${reason}\n` +
    `Mensaje: ${msg}`;

  openWhatsApp(text);
  return false;
}
