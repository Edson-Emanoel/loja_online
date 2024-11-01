import Image from "next/image";

export default function Home() {
  return (
    <div className="containe">
      <header className="header flex items-center justify-center">
        <header className="header-item flex items-center justify-between px-5 gap-5">
          <img src="/logo.png" width={140} height={60} alt="Logo da Loja" className="logoImg" />
          <ul className="links flex gap-4">
            <li>
              <a href="#" className="text-xl font-bold"> Novo Produto </a>
            </li>
            <li>
              <a href="#" className="text-xl font-bold"> Nova Categoria </a>
            </li>
            <li>
              <a href="#" className="text-xl font-bold"> Nova Marca </a>
            </li>
          </ul>
          <img src="/bag.png" alt="" />
        </header>
      </header>
      
      <main className="cards mt-16 flex flex-wrap gap-5 items-center justify-center mx-auto">
          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

          <div className="card flex flex-col items-center justify-center">
            <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt="" />
            
            <h3 className="text-center text-xl font-bold">Jaqueta Especial</h3>
            
            <div className="others flex gap-4">
              <div className="stars flex">
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
                <img src="/star.svg" width={23} height={22} alt="estrela" /> 
              </div>
              
              <span className="text-lg text-medium">(9)</span>
              
              <span className="text-lg text-medium">R$799,99</span>
            </div>
          </div>

      </main>
    </div>
  );
}
