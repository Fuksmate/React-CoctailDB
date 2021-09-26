import Button from '@material-ui/core/Button';
// Styles
import { Wrapper } from './Item.styles';
type Props = {
    item: any;
}

const Item: React.FC<Props> = ({item }) => (
    <Wrapper>
        <img src= {item.strDrinkThumb} alt="" />
        { item.strAlcoholic}<br/>
        { item.strCategory}<br/>
        {item.strGlass}<br/>
  </Wrapper>
);

export default Item;
