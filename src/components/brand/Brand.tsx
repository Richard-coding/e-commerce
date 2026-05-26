import Shrimp from "../../assets/icons/shrimp.svg?react"

const Brand = () => {
  return (
    <div className="flex items-center mb-4 gap-4">
      <div className="w-15 h-15 rounded-[100%] bg-primary text-foreground flex items-center justify-center">
        <Shrimp className="w-10 h-10 text-white" />
      </div>
      <div>
        <h1 className="text-md font-bold ">Raizes do Nordeste</h1>
        <p className="text-muted text-sm">Sabores da nossa terra</p>
      </div>
    </div>
  );
};

export default Brand;
