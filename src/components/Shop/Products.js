import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS  = [
  {
    id: 1,
    price: 19.99,
    title: "The Hitchhiker's Guide to the Galaxy",
    description: "A comic science fiction series written by Douglas Adams."
  },
  {
    id: 2,
    price: 12.50,
    title: "1984",
    description: "A dystopian novel by George Orwell depicting a totalitarian future."
  },
  {
    id: 3,
    price: 7.99,
    title: "To Kill a Mockingbird",
    description: "A novel by Harper Lee about racial injustice in the American South."
  },
  {
    id: 4,
    price: 29.99,
    title: "The Lord of the Rings",
    description: "An epic high-fantasy novel by J.R.R. Tolkien."
  },
  {
    id: 5,
    price: 14.99,
    title: "Harry Potter and the Philosopher's Stone",
    description: "The first novel in the Harry Potter series by J.K. Rowling."
  }
];



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>
          <ProductItem
          key = {product.id}
          id= {product.id}
          title={product.title}
          price={product.price}
          description = {product.description}
          
        />
        )}
        
      </ul>
    </section>
  );
};

export default Products;
