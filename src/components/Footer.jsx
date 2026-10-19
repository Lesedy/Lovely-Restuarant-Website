export default function Footer(){return <footer id="location" className="bg-[#10201e] pt-10 text-[#f8f6ef] sm:pt-12">
    <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] grid-cols-1 gap-7 pb-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_1.2fr_auto] lg:gap-8">
        <a href="#home" className="flex min-w-max flex-col items-start self-center no-underline">
            <span className="text-3xl leading-none text-[#e5ad43]" aria-hidden="true">❧</span>
            <span className="font-display text-base font-bold uppercase tracking-[.18em]">The Lovely Restuarant Table</span>
            <span className="mt-1 text-[9px] uppercase tracking-[.28em] text-[#e5ad43]">Restaurant &amp; Bar</span></a>
            <section aria-labelledby="hours-title"><h2 id="hours-title" className="mb-3 text-xs font-bold uppercase tracking-[.12em]">
                <span className="mr-2 text-xl text-[#e5ad43]" aria-hidden="true">◷</span>Opening hours</h2>
                {[['Mon – Thu','08:00 – 22:00'],['Fri – Sat','08:00 – 23:00'],['Sunday','08:00 – 21:00']].map(([day,hours])=><p 
                key={day} className="flex justify-between gap-4 py-0.5 text-xs text-stone-200">
                    <span>{day}</span><span>{hours}</span></p>)}</section><section aria-labelledby="address-title">
                        <h2 id="address-title" className="mb-3 text-xs font-bold uppercase tracking-[.12em]">
                            <span className="mr-2 text-xl text-[#e5ad43]" aria-hidden="true">⌖</span>Our location</h2>
                            <address className="text-xs not-italic leading-6 text-stone-200">685 Wynberg<br/>Gauteng<br/>South Africa</address>
                            </section><div className="flex gap-3" aria-label="Social links">{[['ig','Instagram','https://www.instagram.com/'],['f','Facebook','https://www.facebook.com/'],['𝕏','X','https://www.x.com/']].map(([label,name,url])=><a 
                            key={name} className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-sm font-bold hover:border-[#e5ad43] hover:text-[#e5ad43]" 
                            href={url} aria-label={name}>{label}</a>)}</div></div>
                            <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-2 border-t border-white/25 py-4 text-xs text-stone-300 sm:flex-row sm:items-center sm:justify-between">
                            <p>© 2026 Lovely Restuarant Table. All rights reserved.</p><a href="#home" className="hover:text-[#e5ad43]">Back to top ↑</a></div></footer>}