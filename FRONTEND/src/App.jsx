//react and context imports
import { ProductProvider } from './contexts/ProductContext';

export default function App() {

  //template
  return (
    <>
      <ProductProvider>

        <h1>EAT YOUR WAY</h1>
      </ProductProvider>
    </>
  )
}
