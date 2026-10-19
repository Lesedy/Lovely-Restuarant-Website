// Controlled component: the parent owns isFavourite and passes it in as a prop.
export default function RatingToggle({isFavourite,onToggle})
{return <button type="button" aria-pressed={isFavourite} 
onClick={onToggle} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition 
    ${isFavourite?'border-[#e5ad43] bg-[#fff0c8] text-[#6f4a0a]':'border-stone-300 bg-white text-stone-600 hover:border-[#e5ad43]'}`}>{isFavourite?'♥ Saved':'♡ Save dish'}</button>}