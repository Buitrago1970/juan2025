import Link from 'next/link'

interface Item {
  name: string;
  link?: string;
}

export default function Section({ title, items, isLink = false }: { title: string; items: Item[]; isLink?: boolean }) {
  return (
    <div className="border-b border-gray-items mt-6 pb-5">
      <h3 className="text-white ml-4 mb-4 tracking-wide text-[12px]">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div className="text-white text-xs" key={index}>
            {isLink && item.link ? (
              <Link href={item.link}>
                <p className="ml-4 cursor-pointer">{item.name}</p>
              </Link>
            ) : (
              <p className="ml-4 cursor-pointer">{item.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>  
  )
}
