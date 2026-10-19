import RatingToggle from './RatingToggle.jsx'
export default function MenuCard({item,isFavourite,onToggleFavourite})
{return <article className="flex min-w-0 flex-col overflow-hidden border border-stone-200 bg-[#fffefa] shadow-[0_12px_32px_rgba(16,32,30,0.08)]">
    <img className="h-44 w-full object-cover sm:h-48" src={item.image} alt={item.alt} loading="lazy"/><div className="flex flex-1 flex-col p-4 sm:p-5">
    <div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl leading-snug sm:text-2xl">{item.name}</h3>
    <span className="shrink-0 pt-1 text-sm font-bold">R{item.price}</span></div><p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
    <div className="mt-4"><RatingToggle isFavourite={isFavourite} onToggle={onToggleFavourite}/></div></div></article>}