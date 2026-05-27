interface SectionTitle {
  about: string;
  title: string;
}
const SectionTitle = ({ about, title }: SectionTitle) => {
  return (
    <div className="mb-6">
      <p className="text-primary uppercase text-sm font-bold tracking-wider">
        {about}
      </p>

      <h2 className="text-4xl font-bold text-secondary">{title}</h2>
    </div>
  );
};

export default SectionTitle;
