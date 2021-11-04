const Afip = require('@afipsdk/afip.js');

// const afip = new Afip({CUIT: 20254079112}, );
const afip = new Afip({CUIT: 33710943619});
// const lastVoucher = await afip.ElectronicBilling.getLastVoucher(1, 6); //Devuelve el número del último comprobante creado para el punto de venta 1 y el tipo de comprobante 6 (Factura B)
// console.log(lastVoucher);

// afip.ElectronicBilling.getSalesPoints().then((res) => console.log(res));

// afip.ElectronicBilling.getLastVoucher(5, 6).then((res) => console.log(res));

// afip.ElectronicBilling.getVoucherInfo(5450, 5, 6).then((res) => {
//   //   console.log(res);
//   console.log(res.Iva);
// });

// afip.ElectronicBilling.getDocumentTypes().then((res) => console.log(res));
afip.ElectronicBilling.getVoucherTypes().then((res) => console.log(res));
