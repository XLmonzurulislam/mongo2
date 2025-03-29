interface SectionHeaderProps {
  title: string;
  center?: boolean;
}

const SectionHeader = ({ title, center = false }: SectionHeaderProps) => {
  return (
    <div className={`flex items-center mb-4 ${center ? "justify-center" : ""}`}>
      <div className="w-12 h-1 bg-primary"></div>
      <h3 className="text-primary font-semibold ml-2">{title}</h3>
    </div>
  );
};

export default SectionHeader;
