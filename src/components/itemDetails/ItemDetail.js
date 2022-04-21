import {HeaderDetailsItem, TitleDetailsItem, ContainerDetailsItem, DescriptionDetailsItem} from "./itemDetailStyle";

const ItemDetail = ({ item }) => {
  const { id, status, specSection, subSpecSection, rev, title, type, priority, packages, due_date, response, description } = item;
  return (
    <>
    <HeaderDetailsItem>
    <h2>{`#${id}  ${title}`}</h2>
    <h3>{response}</h3>
    </HeaderDetailsItem>

    
      <TitleDetailsItem>
        <p>General Information</p>
      </TitleDetailsItem>

      <DescriptionDetailsItem>
      <div>Description: {description}</div>
      </DescriptionDetailsItem>

      <ContainerDetailsItem>

      <div>
      <div>Status: {status}</div>
      <div>Priority: {priority}</div>
      </div>

      <div>
      <div>Rev: {rev}</div>
      <div>Due date: {due_date}</div>
      </div>
      
      <div>
      <div>Spec section: {specSection}</div>
      <div>Sub spec section: {subSpecSection}</div>
      </div>

      <div>
      <div>Type: {type}</div>
      <div>Package: {packages}</div>
      </div>

      </ContainerDetailsItem>

    </>
  )
}

export default ItemDetail