import { fetchProduct }  from 'actions';  // funtion fetch product 

// It's a function...
function loadProduct() {
  // Which returns a function that takes a component...
  return function(WrappedComponent) {
    // It creates a new wrapper component...
    class ProductLoader extends React.Component {
      // Here's the duplicated code from above:
     constructor(props) {
        super(props);
        this.state = {
        product: null
        };
  }
  
  componentWillMount() {
      const { fetchProduct } = this.props;
      fetchProduct();
  }

  componentDidMount() {
      const { product } = this.product
      this.setState({ product });
  }

      render() {
        const { product } = this.state;

        if(!product) {
          return <div>Loading...</div>;
        }
        
        return (
          <WrappedComponent
            {...this.props}
            product={product} />
        );
      }
    }

    // Remember: it takes a component and returns a new component
    // Gotta return it here.
    return ProductLoader;
  }
}

export default loadProduct;