export function TrustBar() {
  const brands = ["G1", "Conjur", "Migalhas", "Forbes", "Estadão"]; // Exemplo

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200">
      <div className="container px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Destaque nos principais meios de comunicação
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-serif font-bold text-slate-400">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}