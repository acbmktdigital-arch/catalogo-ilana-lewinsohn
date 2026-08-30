import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/content'

export default function ServicesSection() {
  return (
    /* Único espaço entre um card e outro, então mexer aqui muda o ritmo da
       lista inteira de uma vez. 8px no celular, onde a lista precisava ficar
       mais compacta; os 12px de sempre no desktop. */
    <section className="py-4 flex flex-col gap-2 sm:gap-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  )
}
