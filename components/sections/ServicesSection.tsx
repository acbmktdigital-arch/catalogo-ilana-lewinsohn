import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/content'

export default function ServicesSection() {
  return (
    /* gap-2 (8px): é o único espaço entre um card e outro, então mexer aqui
       muda o ritmo da lista inteira de uma vez. */
    <section className="py-4 flex flex-col gap-2">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  )
}
