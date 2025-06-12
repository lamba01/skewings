export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-4xl capitalize font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-[#101010]/54 mt-2 capitalize">{subtitle}</p>
      )}
    </div>
  );
}
