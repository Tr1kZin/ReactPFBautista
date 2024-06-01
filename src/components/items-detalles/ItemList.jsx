import { Item } from './Item'

export const ItemList = ( {productos} ) => {

  return (
    <div className="productos-grilla">
        {
          productos.length > 0 ?
          productos.map(producto => {
            return <Item key={producto.id} producto={producto} />
          })
          : <p>Las mejores gorras!  Cargando...</p>
        }
    </div>
  )
}