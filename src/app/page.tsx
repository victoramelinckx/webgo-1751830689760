
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestro soporte 24/7 para emprendedores que buscan crecer sin complicaciones." cta1="Transforma Hoy" />
<How step1Title="Contacta a WebGo" step1Desc="Inicia el proceso, habla con nosotros." step2Title="Innovamos tu venta" step2Desc="Digitalizamos tus ventas en 24 horas." step3Title="Disfruta el éxito" step3Desc="Transforma recomendaciones en ventas online." />
<Aboutus headline="WebGo: Digitaliza tu negocio hoy" subheadline="Transformamos ventas en línea sin esfuerzo, destacando por rapidez y compromiso." beneficiotitulo1="Implementación Rápida" beneficio1="Lanzamos tu tienda en días." beneficiotitulo2="Gestión Total" beneficio2="Nos encargamos de todo." />
<Services heading="Transforma tu Negocio en 24 Horas" description="Rapidez, compromiso, innovación: Genera ventas online sin complicaciones." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Lanza tu web de ventas en 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Aumenta visibilidad y tráfico con WebGo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Procesa pagos de manera segura y eficiente."},{"name":"Diseño Personalizado","icon":"palette","description":"Sitios únicos que reflejan tu marca."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualiza y maneja contenido fácilmente."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en soluciones web impactantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo ofrece soluciones rápidas y efectivas para llevar tu negocio al mundo online. Nos encargamos de todo, desde la creación de un sitio web hasta la implementación de estrategias de marketing digital, para que puedas comenzar a vender en línea sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo facilitarme esto?","respuesta":"Con WebGo, no necesitas preocuparte por la gestión del sitio web. Nosotros nos encargamos de todo, desde actualizaciones hasta mantenimiento, permitiéndote concentrarte en lo que haces mejor: dirigir tu negocio."},{"pregunta":"¿Qué beneficios ofrece WebGo frente a otros servicios de digitalización?","respuesta":"WebGo se destaca por su enfoque en rapidez, compromiso e innovación. Ofrecemos soluciones personalizadas que se ajustan a tus necesidades específicas, asegurando que tu transición al mundo digital sea lo más fluida y exitosa posible."},{"pregunta":"¿Cómo asegura WebGo el éxito de mi negocio en línea?","respuesta":"WebGo utiliza estrategias de marketing digital probadas que aumentan tu visibilidad online y atraen más clientes. Nos comprometemos a impulsar tus ventas y a hacer crecer tu negocio utilizando las últimas herramientas tecnológicas."},{"pregunta":"¿Es caro contratar los servicios de digitalización de WebGo?","respuesta":"WebGo ofrece precios competitivos que reflejan la rapidez, compromiso e innovación de nuestros servicios. Invertir en digitalizar tu negocio con nosotros te traerá beneficios a largo plazo superando con creces el costo inicial."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Online" 
                      description="Con WebGo, digitaliza tus ventas con rapidez, compromiso e innovación. No pierdas tiempo, conviértete en un líder digital hoy."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
