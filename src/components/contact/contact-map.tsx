export default function ContactMap() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Nuestra Ubicación</h3>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6774994325575!2d-3.7037974!3d40.4200268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422886d1e0a2c3%3A0x1e7d5d0a5c6e3f5!2sGran%20V%C3%ADa%2C%2045%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de SolPromoción"
        ></iframe>
      </div>
    </div>
  )
}
