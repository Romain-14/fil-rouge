import { Outlet} from 'react-router-dom'

function Shop() {
  return (
    <>
        <h1>SHOP</h1>
        <p>buy some awesome product !!!</p>
        <Outlet />
    </>
  )
}

export default Shop