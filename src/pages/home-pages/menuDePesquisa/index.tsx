import { useContext, useState } from "react";
import { Button, ButtonIcon, ButtonsContainer, ButtonsContent, MenuPesquisaContainer, SliderButtons} from "./styles"
import NextIcon from "../../../assets/home-icons/next-button.png"
import BackIcon from "../../../assets/home-icons/back-button.png"
import { UserContext } from "../../../contexts/contexts";

function MenuPesquisa() {
  const {openMenu, openDropDown, setOpenDropDown, setCategoryId} = useContext(UserContext)
  const [sliderPosition, setSliderPosition] = useState(0);

  var CloseOpenDropDown = openDropDown;
  CloseOpenDropDown = false;
  

  const sliderWidth = 200; // largura do slider
  const containerWidth = 400; // largura do contêiner

  function searchCategory(id: string) {
    setCategoryId(id)
  }

  const nextClick = () => {
    if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
      setSliderPosition((prevPosition: any) => prevPosition - sliderWidth);
    }
  };

  const backClick = () => {
    if (sliderPosition < 0) {
      setSliderPosition((prevPosition) => prevPosition + sliderWidth);
    }
  };

  const categoryButtons = [
    {name: 'Tudo', id: '0'},
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Shorts', id: '26'},
    {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'},
    {name: 'Jornais', id: '25'},
    {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'},
    {name: 'Ciências', id: '15'},
    {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'},
    {name: 'Novidades', id: '24'},
    {name: 'Educação', id: '1'}, 
    {name: 'Ciência e tecnologia', id: '2'}, 
    {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, 
    {name: 'Moda e estilo', id: '23'},
    {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'},
  ];

  return(
    <MenuPesquisaContainer openMenu={openMenu} onClick={() => setOpenDropDown(CloseOpenDropDown)}>

      <SliderButtons onClick={backClick}>
        <ButtonIcon alt="ícone voltar" src={BackIcon} />
      </SliderButtons>

      <ButtonsContainer  >

        <ButtonsContent 
          style={{ 
          transform: `translateX(${sliderPosition}px)`,  
          transition: '0.5s ease-in-out',}}
        >
        
          {
            categoryButtons.map((button, index) => (
              <Button onClick={() => searchCategory(button.id)} key={index}><b>{button.name}</b></Button>
            ))
          }
        </ButtonsContent>
      </ButtonsContainer>
      
      <SliderButtons onClick={nextClick}>
            <ButtonIcon alt="ícone próximo" src={NextIcon} />
          </SliderButtons>

    </MenuPesquisaContainer>
  )
}

export{MenuPesquisa}