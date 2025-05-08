import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | SolPromoción",
  description:
    "Política de privacidad de SolPromoción. Información sobre cómo recopilamos, utilizamos y protegemos sus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

      <div className="prose max-w-none">
        <p>Última actualización: 1 de mayo de 2025</p>

        <h2>1. Introducción</h2>
        <p>
          En SolPromoción, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política
          de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le
          informará sobre sus derechos de privacidad y cómo la ley le protege.
        </p>

        <h2>2. Los datos que recopilamos sobre usted</h2>
        <p>
          Datos personales, o información personal, significa cualquier información sobre un individuo a partir de la
          cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
          anónimos).
        </p>
        <p>
          Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted que hemos
          agrupado de la siguiente manera:
        </p>
        <ul>
          <li>Datos de identidad: incluye nombre, apellido, nombre de usuario o identificador similar.</li>
          <li>
            Datos de contacto: incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y
            números de teléfono.
          </li>
          <li>
            Datos técnicos: incluye dirección de protocolo de Internet (IP), datos de inicio de sesión, tipo y versión
            del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador,
            sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio
            web.
          </li>
          <li>
            Datos de perfil: incluye su nombre de usuario y contraseña, compras o pedidos realizados por usted, sus
            intereses, preferencias, comentarios y respuestas a encuestas.
          </li>
          <li>Datos de uso: incluye información sobre cómo utiliza nuestro sitio web, productos y servicios.</li>
        </ul>

        <h2>3. Cómo utilizamos sus datos personales</h2>
        <p>
          Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos
          personales en las siguientes circunstancias:
        </p>
        <ul>
          <li>Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.</li>
          <li>
            Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos
            fundamentales no anulen esos intereses.
          </li>
          <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
        </ul>

        <h2>4. Divulgación de sus datos personales</h2>
        <p>
          Podemos compartir sus datos personales con las partes establecidas a continuación para los fines establecidos
          en la sección 3 anterior:
        </p>
        <ul>
          <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
          <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
          <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
        </ul>

        <h2>5. Seguridad de datos</h2>
        <p>
          Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o
          accedan de manera no autorizada, se alteren o divulguen accidentalmente. Además, limitamos el acceso a sus
          datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad
          comercial de conocer. Solo procesarán sus datos personales según nuestras instrucciones y están sujetos a un
          deber de confidencialidad.
        </p>

        <h2>6. Sus derechos legales</h2>
        <p>
          Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con sus
          datos personales. Estos incluyen el derecho a:
        </p>
        <ul>
          <li>Solicitar acceso a sus datos personales.</li>
          <li>Solicitar la corrección de sus datos personales.</li>
          <li>Solicitar la eliminación de sus datos personales.</li>
          <li>Oponerse al procesamiento de sus datos personales.</li>
          <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
          <li>Solicitar la transferencia de sus datos personales.</li>
          <li>Retirar el consentimiento.</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          Puede configurar su navegador para rechazar todas o algunas cookies del navegador, o para alertarle cuando los
          sitios web establezcan o accedan a cookies. Si deshabilita o rechaza las cookies, tenga en cuenta que algunas
          partes de este sitio web pueden volverse inaccesibles o no funcionar correctamente.
        </p>

        <h2>8. Cambios a esta política de privacidad</h2>
        <p>
          Cualquier cambio que podamos hacer a nuestra política de privacidad en el futuro se publicará en esta página.
          Por favor, revise esta página con frecuencia para ver si hay cambios en nuestra política de privacidad.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos en:
        </p>
        <p>
          SolPromoción
          <br />
          Gran Vía, 45
          <br />
          28013 Madrid, España
          <br />
          Email: info@solpromocion.com
          <br />
          Teléfono: +34 932 654 321
        </p>
      </div>
    </div>
  )
}
