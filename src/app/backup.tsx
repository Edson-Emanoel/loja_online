"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmhyyoefmskloexhlgiu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtaHl5b2VmbXNrbG9leGhsZ2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNzk5MjcsImV4cCI6MjA0NTk1NTkyN30.Sbat4qbAYqIUIrq5Oew0NK1wJqeMxHByf0UUSO1KEOE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// BrandSelect
interface Brand {
  id: number; // Supondo que a tabela tenha um ID
  name: string;
}
const BrandSelect: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  useEffect(() => {
    const fetchBrands = async () => {
      const { data, error } = await supabase
      .from('brands')
      .select('*');

      if (error) {
        console.log('Error fetching clothes:', error);
      } else {
        setBrands(data);
      }
    };

    fetchBrands();
  }, [brands, setBrands]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <select className='text-black flex-1 rounded border-none outline-none px-1' value={selectedBrand} onChange={handleChange}>
      <option value="">Selecione uma marca</option>
      {brands.map(brand => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};


// CategorySelect
interface Category {
  id: number; // Supondo que a tabela tenha um ID
  name: string;
}
const CategorySelect: React.FC = () => {
    const [categories, setCategories] = useState<Brand[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    useEffect(() => {
      const fetchCategory = async () => {
        const { data, error } = await supabase
        .from('category')
        .select('*');
  
      if (error) {
        console.log('Error fetching clothes:', error);
      } else {
        setCategories(data);
      }
      };

      fetchCategory();
    }, [categories, setCategories]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <select className='text-black flex-1 rounded border-none outline-none px-1' value={selectedBrand} onChange={handleChange}>
      <option value="">Selecione uma Categoria</option>
      {categories.map(category => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};


// Modal
const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  // const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [price, setPrice] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [stars, setStars] = useState<number>(1);
  const [available, setAvailable] = useState<boolean>(true);
  const [local, setLocal] = useState<string>('');
  // const [urlProduct, setUrlProduct] = useState<string[]>([]);
  const [gender, setGender] = useState<string>('');

  const [mensagem, setMensagem] = useState<string>('');

  const cadastrarRoupa = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('clothes')
        .insert([{ name, amount, price, description, category, brand, stars, available, local, gender }]);

      if (error) {
        setMensagem(`Erro ao cadastrar gestor: ${error.message}`);
      } else {
        setMensagem(`Roupa ${name} cadastrada com sucesso!`);
        
        setName('');
        setAmount(1);
        setPrice(0);
        setDescription('');
        setCategory('');
        setBrand('');
        setStars(1);
        setAvailable(true);
        setLocal('');
        // setUrlProduct([]);
        setGender('');
      }
    } catch (error) {
      setMensagem(`Ocorreu um erro: ${error}`);
    }
  };

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 backdrop-brightness-75 flex items-center justify-center'>
      <div className='w-2/4 bg-zinc-900 text-white rounded-3xl shadow-2xl flex'>
        <div className="images flex flex-1 flex-col bg-blue-50 m-5 rounded-3xl">
          <div className="flex justify-end mt-1 mr-2">
            <button className='w-12 h-12 text-4xl font-bold rounded-full bg-green-900 self-end'>+</button>
          </div>
          <img src="/jaqueta/jaqueta01.png" className='big w-64 self-center mb-8 mt-8' width={140} alt="" />

          <div className="flex gap-5 justify-center">
            <img src="/jaqueta/jaqueta01.png" width={140} />
            <img src="/jaqueta/jaqueta01.png" width={140} />
            <img src="/jaqueta/jaqueta01.png" width={140} />
          </div>
        </div>

        <div className="form flex flex-1 flex-col items-center justify-between bg-zinc-700 m-5 rounded-3xl">
          <div className="header-form-modal w-full h-14 flex items-center justify-around">
            <h2 className='text-center text-2xl'>Cadastrar Roupa</h2>
            <button onClick={onClose} className='bg-red-700 w-8 rounded-full'>X</button>
          </div>
          <form className='gap-5 flex flex-col h-full mt-4'>
            <div className="flex gap-5  items-center">
              <div className='flex flex-col'>
                <label>Nome:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className='text-black flex-1 rounded border-none outline-none px-1 py-2' type="text" required />
              </div>

              <div className='flex flex-col'>
                <label>Marca:</label>
                <BrandSelect />
              </div>
            </div>
            
            <div className='flex flex-col'>
              <label>Descrição:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value) } className='text-black rounded border-none outline-none px-1 py-2' required />
            </div>

            <div className="flex gap-5">
              <div className='flex flex-col'>
                <label>Genêro:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className='text-black flex-1 rounded border-none outline-none px-1' name="" id="">
                  <option value="">Selecione um Genêro</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Infantil">Infantil</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label>Quantidade:</label>
                <input value={amount} onChange={(e) => setAmount(Number(e.target.value))} className='text-black rounded border-none outline-none px-1 py-1' placeholder='Quantidade do Produto' type="number" />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className='flex flex-col'>
                <label>Categoria:</label>
                <CategorySelect />
              </div>

              <div className='flex flex-col'>
                <label>Local:</label>
                <select value={local} onChange={(e) => setLocal(e.target.value)} className='text-black flex-1 rounded border-none outline-none px-1 py-2' name="" id="">
                  <option value="">Selecione uma Marca</option>
                  <option value="Calvin Klein">Importado</option>
                  <option value="Hering">Nacional</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className='flex flex-col'>
                <label>Preço:</label>
                <input value={price} onChange={(e) => setPrice(Number(e.target.value))} className='text-black flex-1 rounded border-none outline-none px-1 py-2' type="number" required placeholder='Preço do Produto' />
              </div>

              <div className='flex items-center gap-5 mt-7'>
                <label>Disponivel ? </label>
                <input checked={available} onChange={(e) => setAvailable(e.target.checked)} type="checkbox" />
              </div>
            </div>

            <button className='bg-green-700 rounded-md h-12 text-lg font-medium' type="submit" onClick={() => cadastrarRoupa}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};


// Principal
type TypeCloth = {
  id: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  category: string;
  brand: string;
  stars: number;
  avaible: boolean;
  local: 'Importado' | 'Nacional';
  urlCloth: [];
  gender: 'Masculino' | 'Feminino' | 'Infantil';
}
export default function Home() {

  const [clothesData, setClothesData] = useState<TypeCloth[]>([]);

  const [editar, setEditar] = useState('sumir');
  const [cadastrar, setCadastrar] = useState('');  
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleListVisibility = () => {
    setIsVisible(!isVisible);
  };

  const fetchCloth = async () => {
    const { data, error } = await supabase
      .from('clothes')
      .select('*');

    if (error) {
      console.log('Error fetching clothes:', error);
    } else {
      setClothesData(data);
    }
  };

  useEffect(() => {
    fetchCloth()
  }, [clothesData, setClothesData])

  return (
    <div className="container">
      <header className="header flex items-center justify-center">
        <header className="header-item flex items-center justify-between px-5 gap-5">
          <img src="/logo.png" width={140} height={60} alt="Logo da Loja" className="logoImg" />
          <ul className="links flex gap-4">
            <li onClick={openModal}>
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
        
        <div className="mobile">
          <button id="mobile_btn" onClick={toggleListVisibility}>
            {isVisible ? ( <img alt="X" />) : ( <img src="/bars.svg" alt="" /> )}
          </button>

          {isVisible &&
            <div id="mobile_menu">
              <ul id='mobile_nav_list' className={`mobile_nav_list gap-4`}>
                <li className='nav-item'>
                  <a href="#" className="text-xl font-bold"> Novo Produto </a>
                </li>
  
                <li className='nav-item'>
                  <a href="#" className="text-xl font-bold"> Nova Categoria </a>
                </li>
  
                <li className='nav-item'>
                  <a href="#" className="text-xl font-bold"> Nova Marca </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </header>
      
      <main className="cards flex flex-wrap gap-5 items-center justify-center mx-auto">
          {clothesData.map((cloth) => {return (
            <div className="card flex flex-col items-center justify-center" key={cloth.id}>
                <img src="/jaqueta/jaqueta01.png" width={250} height={350} alt={cloth.name} />
              
                <h3 className="text-center text-xl font-bold">{cloth.name}</h3>
                
                <div className="others flex gap-4">
                  <div className="stars flex">
                    <img src="/star.svg" width={23} height={22} alt="estrela" />
                    <img src="/star.svg" width={23} height={22} alt="estrela" />
                    <img src="/star.svg" width={23} height={22} alt="estrela" />
                    <img src="/star.svg" width={23} height={22} alt="estrela" />
                    <img src="/star.svg" width={23} height={22} alt="estrela" />
                  </div>
                  
                  <span className="text-lg text-medium">({cloth.amount})</span>
                  
                  <span className="text-lg text-medium">{cloth.price}</span>
                </div>
            </div>
          )})}
      </main>

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
    
  );
}
