import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/content'

export default function ServicesSection() {
  return (
    <section className="py-4 flex flex-col gap-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  )
}
