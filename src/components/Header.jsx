export default function Header(){return <header id="home" className="bg-[#10201e] text-[#fffefa]">
    <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-wrap items-center justify-center gap-4 py-4 md:min-h-[88px] md:justify-between md:gap-6">
        <a href="#home" className="flex min-w-max flex-col items-center no-underline">
            <span className="text-3xl leading-none text-[#e5ad43]" aria-hidden="true">❧</span>
            <span className="font-display text-sm font-bold uppercase tracking-[.18em] sm:text-base">The Lovely Restuarant Table</span>
            <span className="mt-1 text-[9px] uppercase tracking-[.28em] text-[#e5ad43]">Restaurant &amp; Bar</span></a>
            <nav aria-label="Main navigation" 
            className="order-3 flex w-full flex-wrap justify-center gap-5 text-sm md:order-none md:w-auto md:gap-7">
                {['Home','Menu','About','Location'].map((label)=><a key={label} 
                className="border-b-2 border-transparent py-1 hover:border-[#e5ad43] hover:text-[#e5ad43]" 
                href={'#'+(label==='Home'?'home':label==='Menu'?'menu':label==='About'?'about':'location')}>{label}</a>)}
                </nav>
                <a href="#reservation" className="rounded-sm bg-[#e5ad43] px-4 py-2.5 text-center text-sm font-bold text-[#171c17] hover:bg-amber-300">Book a reservation
                    </a></div></header>}