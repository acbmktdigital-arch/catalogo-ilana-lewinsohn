import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/lib/content'

type ServiceCardProps = {
  service: Service
}


export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card relative overflow-hidden rounded-xl mx-4" style={{ background: 'var(--cor-card)' }}>
      <div className="flex items-stretch h-[170px]">
        {/* Text side */}
        <div className="flex-1 p-5 flex flex-col justify-center gap-4">
          <h2 className="font-heading text-xl leading-tight italic" style={{ color: '#FFFFFF' }}>
            {service.title}
          </h2>
          <Link href={service.ctaHref} className="btn-sales w-fit">
            {service.ctaLabel}
          </Link>
        </div>

        {/* Image side */}
        <div className="relative w-[38%] shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center opacity-80"
          />
          {/* Fade edge overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(84,95,55,1) 0%, rgba(84,95,55,0) 30%)',
            }}
          />
        </div>
      </div>
    </article>
  )
}
